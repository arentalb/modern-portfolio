import { Button } from "@/ui/ui/button.tsx";
import { Popover } from "@/features/home/Popover.tsx";
import { useState } from "react";
import { useTerminal } from "@/context/TerminalContext.tsx";

export const Terminal = () => {
  const { state, writeCommand, runCommand, textareaRef } = useTerminal();

  const [isOpen, setIsOpen] = useState(false);

  function openHandler() {
    setIsOpen(true);
  }

  function closeHandler() {
    setIsOpen(false);
  }

  return (
    <div className="relative h-[400px] w-full max-w-[500px]">
      <div className={"h-full w-full rounded-3xl border-2 border-white "}></div>
      <textarea
        ref={textareaRef}
        value={state.command.path}
        onChange={(e) => {
          writeCommand(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            runCommand();
          }
        }}
        autoFocus
        className={` scroll absolute bottom-0 right-0 z-10 h-[95%] w-[95%] resize-none rounded-3xl border-2 border-white bg-transparent p-4 font-mono   text-base text-white focus:outline-none `}
        style={{ overflowY: "hidden", scrollbarWidth: "none" }}
      ></textarea>
      <Button
        onClick={openHandler}
        variant="destructive"
        className={
          "absolute bottom-5 right-5   z-20 flex h-2  w-2 items-center justify-center rounded-full bg-gray-primary p-3 text-xl font-bold text-black "
        }
      >
        !
      </Button>
      <Popover isOpen={isOpen} onClose={closeHandler}>
        <div className=" text-center">
          <h1 className="mb-6 text-3xl   font-bold">
            Welcome to my Terminal Interface
          </h1>
          <p className={" mb-2 text-sm text-gray-primary"}>
            To discover all available commands, simply type "
            <span className="font-bold text-white">help</span>" and press Enter.
          </p>
          <p className={"mb-6 text-sm text-gray-primary"}>
            Kindly note that this demo showcases basic functionality; the
            complete feature set is currently in development.
          </p>
          <div className={"mb-2 flex justify-center"}>
            <img src="/icons/caution.svg" alt="" />
          </div>
          <p className="mx-auto mb-4 max-w-[600px] text-red-600">
            This terminal interface is based on my original idea. If you're
            interested in developing a similar concept, please contact me first
            to discuss further possibilities.
          </p>
        </div>
      </Popover>
    </div>
  );
};
