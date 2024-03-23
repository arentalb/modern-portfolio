export function BrightCurvedLine({ direction }: { direction: string }) {
  if (!(direction === "up" || direction === "down")) {
    return <div className={"border-t-4 border-t-white "}></div>;
  }
  return (
    <div className={"px-5"}>
      <div
        className={` md:mx-auto md:max-w-[1400px] 
        ${direction === "up" && "rounded-t-[40px] border-t-4"} 
        ${direction === "down" && "rounded-b-[40px] border-b-4"} 
        h-10 border-white`}
      ></div>
    </div>
  );
}
