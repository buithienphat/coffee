import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  popupMenu: boolean;
  onClose: () => void;
};

const ModalMenu = ({ popupMenu, onClose }: Props) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (popupMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [popupMenu]);

  return <></>;

  // return createPortal(
  //   <div
  //     ref={modalRef}
  //     className={`fixed inset-0 bg-black/80 z-50 flex items-center justify-center overflow-hidden ${
  //       popupMenu ? "opacity-100 visible" : "opacity-0 invisible"
  //     }`}
  //     onClick={onClose}
  //   >
  //     <div
  //       className={`w-[70vw] h-[80vh] bg-white-smoke duration-300 ${
  //         popupMenu ? "scale-100 opacity-100" : "scale-75 opacity-0"
  //       }`}
  //       onClick={(e) => e.stopPropagation()}
  //     ></div>
  //   </div>,
  //   document.body
  // );
};

export default ModalMenu;
