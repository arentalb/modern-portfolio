export function BrightCurvedLine({ direction }: { direction: string }) {
  if (!(direction === "up" || direction === "down")) {
    return <div className={"border-t-4 border-t-white "}></div>;
  }
  return (
    <div className={"px-5"}>
      <div
        className={` md:max-w-[1400px] md:mx-auto 
        ${direction === "up" && "border-t-4 rounded-t-[40px]"} 
        ${direction === "down" && "border-b-4 rounded-b-[40px]"} 
        border-white h-10`}
      ></div>
    </div>
  );
}
