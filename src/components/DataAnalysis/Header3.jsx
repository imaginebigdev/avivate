import Navbar3 from "@components/Navbars/Clases";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header2 = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <header className="style-8 bg-gray2" id="inicio">
      <Navbar3 />
    </header>
  );
};

export default Header2;
