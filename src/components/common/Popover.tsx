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
        <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-auto  bg-opacity-50  bg-black">
          <div className="relative z-50  p-8 rounded-lg shadow-lg border-2 border-white bg-black ">
            <button
              className="absolute top-0 right-0 p-2 m-2 text-white hover:text-gray-200 "
              onClick={onClose}
            >
              <img src="public/icons/close.svg" alt="" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
