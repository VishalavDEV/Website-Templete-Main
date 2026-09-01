/* src/components/common/ErrorBoundary.tsx */
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '../ui/Button';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in application shell:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-6 text-center">
          <div className="max-w-md w-full border border-border bg-card rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-destructive">Application Crash Detected</h2>
            <p className="text-sm text-muted-foreground mt-2">
              An unexpected runtime error occurred. Our engineers have been notified.
            </p>
            {this.state.error && (
              <pre className="mt-4 p-4 text-left font-mono text-xs bg-muted text-foreground/80 overflow-auto rounded-lg max-h-40 border border-border">
                {this.state.error.toString()}
              </pre>
            )}
            <div className="mt-6 flex justify-center gap-3">
              <Button onClick={this.handleReset}>Reload Application</Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
