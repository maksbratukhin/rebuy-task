export function getErrorMessage(error: unknown): string {
    if (error && typeof error === 'object' && 'status' in error) {
      const httpError = error as { status: number; statusText?: string };
      if (httpError.status === 0) {
        return 'Unable to connect to the server. Please ensure the API is running and try again.';
      }
      if (httpError.status === 404) {
        return 'The requested resource was not found.';
      }
      if (httpError.status >= 500) {
        return 'Server error occurred. Please try again later.';
      }
    }
    if (error instanceof Error) {
      return error.message;
    }
    return 'An unexpected error occurred. Please try again.';
  }