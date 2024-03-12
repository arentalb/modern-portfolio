import { Button } from "@/components/common/ui/button.tsx";

export const Terminal = () => {
  function helpHandler() {
    console.log("help");
  }

  return (
    <div className="w-full h-[400px] relative max-w-[500px]">
      <div className={"border-2 border-white w-full h-full rounded-3xl "}></div>
      <textarea
        defaultValue={"PS C:\\Users\\Click>"}
        className={
          " w-[95%] h-[95%] z-10 border-2 border-white font-mono text-base text-white bg-black absolute bottom-0 right-0 rounded-3xl p-4   resize-none scroll focus:outline-none"
        }
      ></textarea>

      <Button
        onClick={helpHandler}
        variant="destructive"
        className={
          "z-20 w-2 h-2  flex justify-center items-center  absolute bottom-5 right-5 text-black rounded-full bg-gray-primary text-xl font-bold p-3 "
        }
      >
        !
      </Button>
    </div>
  );
};
