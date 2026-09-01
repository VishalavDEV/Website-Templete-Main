// Mock helper service to simulate async actions and delay indicators
export const mockService = {
  async delay(ms = 400): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },

  async resolveMock<T>(data: T, delayMs = 300): Promise<T> {
    await this.delay(delayMs);
    return data;
  },

  async rejectMock(errorMsg: string, delayMs = 300): Promise<never> {
    await this.delay(delayMs);
    throw new Error(errorMsg);
  }
};
