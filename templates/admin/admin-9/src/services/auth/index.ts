export interface AuthSession {
  token: string;
  expiresAt: number;
}

export const authService = {
  async mockLogin(email: string): Promise<AuthSession> {
    console.log(`[AuthService] Logging in email: ${email}`);
    const session: AuthSession = {
      token: 'mock-jwt-token-xyz-123',
      expiresAt: Date.now() + 3600000 // 1h
    };
    window.sessionStorage.setItem('auth_session', JSON.stringify(session));
    return session;
  },

  logout(): void {
    console.log('[AuthService] Logging out user');
    window.sessionStorage.removeItem('auth_session');
  },

  getSession(): AuthSession | null {
    try {
      const data = window.sessionStorage.getItem('auth_session');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  isAuthenticated(): boolean {
    const session = this.getSession();
    return !!session && session.expiresAt > Date.now();
  }
};
