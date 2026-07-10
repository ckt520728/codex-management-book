export type DecisionRecord = {
  decision: string;
  status: 'draft' | 'reviewed' | 'validated' | 'published';
};

export interface DecisionStore {
  save(record: DecisionRecord): Promise<void>;
}

/** 第一版使用 mock；Firebase project 設定完成後再替換實作。 */
export const mockDecisionStore: DecisionStore = {
  async save(record) {
    console.info('mock decision saved', record);
  },
};

