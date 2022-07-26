type LoaderProps = {
  children: JSX.Element;
  loading: boolean;
};
//This is s HOC for loader- Use it to have your component wrapped with loading
export function WithLoader({ children, loading }: LoaderProps): JSX.Element {
  if (loading)
    return (
      <div className="flex justify-center items-center">
        <div>Loading...</div>
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        ></div>
      </div>
    );
  return children;
}
