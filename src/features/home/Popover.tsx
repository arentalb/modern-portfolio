import { useEffect } from "react";

export function Popover({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-auto  bg-black  bg-opacity-50">
          <div className="relative z-50  rounded-lg border-2 border-white bg-black p-8 shadow-lg ">
            <button
              className="absolute right-0 top-0 m-2 p-2 text-white hover:text-gray-200 "
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
