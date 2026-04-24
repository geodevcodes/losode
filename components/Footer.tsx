import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";

export default function Footer() {
  // Get Year
  const getYear = new Date();
  const dateString = getYear.getFullYear();
  return (
    <>
      <footer className="pt-8 border-t xl:pl-10">
        <section className="px-4 sm:px-6 text-left text-sm l md:flex max-w-2xl mx-auto lg:max-w-7xl lg:px-8  md:text-[14px]">
          <div className="md:w-2/3">
            <Link href="/">
              <h1 className="text-2xl md:text-4xl font-bold">
                {" "}
                Next <span className="text-primary">Commerce</span>
              </h1>
              {/* <Image
            src="/brandLogo.svg"
            alt="brand logo"
            width={100}
            height={100}
          /> */}
            </Link>
            <div>
              <p className="w-[240px] leading-6  mt-6 lg:w-[400px] text-sm">
                Below are our privacy & policy, which outline a lot of goodies.
                it&apos;s our aim to always take of our participant
              </p>
            </div>
            <p className="my-6 lg:mt-20">
              Terms of Use{" "}
              <span className="ml-2 px-3 border-l-2 border-primary">
                Privacy Policy
              </span>
            </p>
          </div>
          {/* useful link */}
          <div className="text-sm leading-8 md:w-1/3">
            <h4 className="font-bold text-primary md:text-[14px]">
              Useful Links
            </h4>
            <ul>
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>
            <div className="flex items-center gap-2 lg:gap-6">
              <p className="text-primary">Follow us</p>
              <div className="flex items-center gap-4">
                <IoLogoInstagram className="w-5 h-5 cursor-pointer" />
                <FaXTwitter className="w-5 h-5 cursor-pointer" />
                <CiFacebook className="w-6 h-6 cursor-pointer" />
                <FaLinkedin className="w-5 h-5 cursor-pointer" />
              </div>
            </div>
          </div>
          {/* contact us */}
          <div className="mt-12 md:w-1/3 md:mt-0">
            <h4 className="font-bold text-primary text-sm">Contact Us</h4>
            <div className="flex items-center my-2 gap-2">
              <MdWifiCalling3 className="w-5 h-5 cursor-pointer" />
              <p>+234 679 81819</p>
            </div>
            <div className="flex justify-start my-2 gap-2">
              <IoLocationSharp className="w-5 h-5 cursor-pointer" />
              <p className="max-w-[10x]">
                27, Alara Street Yaba 100012 Lagos State
              </p>
            </div>
          </div>
        </section>
        <div>
          <p className="text-center mt-6 text-[12px] md:text-[14px] pb-4">
            All rights reserved. copyright © {dateString} losode.
          </p>
        </div>
      </footer>
    </>
  );
}
