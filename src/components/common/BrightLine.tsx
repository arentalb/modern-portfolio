export function BrightLine({ gradient }: { gradient?: string }) {
  return (
    <div className={"relative"}>
      <div
        style={{
          borderTopWidth: "1px",
          borderImage:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 48%, rgba(0,0,0,1) 100%) 30 stretch",
        }}
      ></div>
      <div
        className="left-1/2 top-0 w-[300px] z-20 center absolute h-px -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `${
            gradient ||
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)"
          }`,
        }}
      ></div>

      <div
        className="-top-1 left-1/2 h-[200px] w-full md:max-w-[400px]    absolute max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)",
        }}
      ></div>
    </div>
  );
}

// blue  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,237,255,1) 48%, rgba(255,255,255,0) 100%)"
// red  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,0,0,1) 47%, rgba(255,255,255,0) 100%)"
