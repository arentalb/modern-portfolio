export function Error({ message = "error" }: { message: string }) {
  return <div className={"text-lg text-white "}>{message}</div>;
}
