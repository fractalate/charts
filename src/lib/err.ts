export function getUserFriendlyErrorMessage(err: any): string {
  if (err instanceof Error) {
    return err.message;
  }
  return 'ERROR: ' + err;
}
