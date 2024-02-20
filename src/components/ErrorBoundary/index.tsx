"use client"
import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state to trigger the error UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  handleReset = () => {
    // Reset the error state
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI here
      return (
        <div>
          <h1>Something went wrong component level.</h1>
          <p onClick={this.handleReset} >Please try again later.</p>
        </div>
      );
    }

    // If no error, render children as normal
    return this.props.children;
  }
}

export default ErrorBoundary;