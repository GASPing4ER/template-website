"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import menuCloseIcon from "@/public/menu-bars.webp";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="text-zinc-900 flex items-center mr-auto md:ml-20 font-light">
      <Image
        src={menuCloseIcon}
        alt="Menu"
        width={75}
        height={75}
        className="cursor-pointer"
        onClick={handleMenuClick}
      />
      <span className="hidden xs:block">MENU</span>
      {isMenuOpen && (
        <>
          <nav
            ref={menuRef}
            className="absolute top-0 left-0 bg-white h-screen max-w-[300px] w-screen p-8 flex flex-col justify-between z-10"
          >
            <div className="flex flex-col gap-8">
              <FontAwesomeIcon
                onClick={handleMenuClick}
                icon={faX}
                className="h-4 w-4 cursor-pointer"
              />
              <ul className="flex flex-col gap-3 text-lg">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
              </ul>
            </div>
            <div>Social Media Plugs</div>
          </nav>
          <div className="absolute top-0 left-0 w-screen h-screen bg-zinc-900/50"></div>
        </>
      )}
    </div>
  );
};

export default Navigation;
