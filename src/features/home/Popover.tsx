import { useScrollBlocker } from "@/hooks/useScrollBlocker.tsx";
import { ReactNode } from "react";

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Popover({ isOpen, onClose, children }: PopoverProps) {
  useScrollBlocker(isOpen);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[70] mx-4  flex items-center justify-center  overflow-auto  bg-black bg-opacity-50">
          <div className="relative z-50  rounded-lg border-2 border-white bg-black px-4 py-14 shadow-lg sm:p-12 ">
            <button
              className="absolute right-0 top-0 m-2 p-2 text-white hover:text-gray-200 sm:m-4 "
              onClick={onClose}
            >
              <img src="/icons/close.svg" alt="" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
