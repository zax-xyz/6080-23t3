export const Spinner = () => (
  <div
    className="inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-indigo-600"
    role="status"
    aria-label="loading"
  >
    <span className="sr-only">Loading...</span>
  </div>
);
