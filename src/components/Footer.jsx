import Image from "next/image";
import Link from "next/link";
// import FooterImg from "../assets/image/footer-bg.png"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import Logo from "../assets/image/logo-white.png";

const Footer = () => {
  return (
    <div className='bg-[url("../assets/image/footer-bg.png")]  bg-cover bg-no-repeat'>
      <div className="main-container mx-auto flex flex-col lg:flex-row justify-between items-center py-4 lg:py-9">
        <div className="my-2 lg:m-0">
          <Image src={Logo} alt="" />
        </div>
        <div className="text-[#fff] grid grid-flow-col gap-6 lg:gap-11 font-ValueSansPro text-base my-2 lg:m-0">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Cookies</Link>
        </div>
        <div className="grid grid-flow-col gap-4 lg:gap-9 text-[#fff] my-2 lg:m-0">
          <div className="w-9 h-9 border-[1px] flex justify-center items-center rounded-full">
            <FaLinkedinIn />
          </div>
          <div className="w-9 h-9 border-[1px] flex justify-center items-center rounded-full">
            <FaFacebookF />
          </div>
          <div className="w-9 h-9 border-[1px] flex justify-center items-center rounded-full">
            <IoLogoTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
