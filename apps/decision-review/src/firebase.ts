export type DecisionRecord = {
  decision: string;
  status: 'draft' | 'reviewed' | 'validated' | 'published';
  report?: string;
  createdAt?: string;
};

export interface DecisionStore {
  save(record: DecisionRecord): Promise<void>;
  list(): Promise<DecisionRecord[]>;
}

/** Mock store — console only, no persistence. */
export const mockDecisionStore: DecisionStore = {
  async save(record) {
    console.info('mock decision saved', record);
  },
  async list() {
    return [];
  },
};

/**
 * Detects whether Firebase env vars are present.
 * If present, dynamically imports the real Firestore implementation.
 * If absent, falls back to mock.
 */
export async function getDecisionStore(): Promise<DecisionStore> {
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined;
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY as string | undefined;

  if (!projectId || !apiKey) {
    console.info('Firebase config not found — using mock store');
    return mockDecisionStore;
  }

  try {
    const { initializeApp } = await import('firebase/app');
    const { getFirestore, collection, addDoc, getDocs, serverTimestamp } = await import(
      'firebase/firestore'
    );

    const app = initializeApp({
      projectId,
      apiKey,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
      appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
    });

    const db = getFirestore(app);

    return {
      async save(record: DecisionRecord) {
        await addDoc(collection(db, 'decision-reviews'), {
          ...record,
          createdAt: serverTimestamp(),
        });
        console.info('decision saved to Firestore', record.decision);
      },
      async list() {
        const snapshot = await getDocs(collection(db, 'decision-reviews'));
        return snapshot.docs.map((d) => d.data() as DecisionRecord);
      },
    };
  } catch (err) {
    console.warn('Firebase init failed — falling back to mock', err);
    return mockDecisionStore;
  }
}
