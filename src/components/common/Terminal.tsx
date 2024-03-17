import { Button } from "@/components/common/ui/button.tsx";
import { Popover } from "@/components/common/Popover.tsx";
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
    <div className="w-full h-[400px] relative max-w-[500px]">
      <div className={"border-2 border-white w-full h-full rounded-3xl "}></div>
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
        className={` w-[95%] h-[95%] z-10 border-2 border-white font-mono text-base text-white bg-black absolute bottom-0 right-0 rounded-3xl p-4   resize-none scroll focus:outline-none `}
        style={{ overflowY: "hidden", scrollbarWidth: "none" }}
      ></textarea>
      <Button
        onClick={openHandler}
        variant="destructive"
        className={
          "z-20 w-2 h-2   flex justify-center items-center  absolute bottom-5 right-5 text-black rounded-full bg-gray-primary text-xl font-bold p-3 "
        }
      >
        !
      </Button>
      <Popover isOpen={isOpen} onClose={closeHandler}>
        <div className="p-4 text-center">
          <h1 className="text-3xl font-bold   mb-6">
            Welcome to my Terminal Interface
          </h1>
          <p className={"text-sm text-gray-primary mb-2"}>
            To discover all available commands, simply type "
            <span className="font-bold text-white">help</span>" and press Enter.
          </p>{" "}
          <p className={"text-sm text-gray-primary mb-6"}>
            Kindly note that this demo showcases basic functionality; the
            complete feature set is currently in development.
          </p>
          <div className={"flex justify-center mb-2"}>
            <img src="/icons/caution.svg" alt="" />
          </div>
          <p className="text-red-600 max-w-[600px] mb-4 mx-auto">
            This terminal interface is based on my original idea. If you're
            interested in developing a similar concept, please contact me first
            to discuss further possibilities.
          </p>
        </div>
      </Popover>
    </div>
  );
};
