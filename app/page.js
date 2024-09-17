"use client";

import Image from "next/image";
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";

import { Montserrat } from "next/font/google";
import { useState } from "react";
import { DialogBox } from "./components/DialogBox";
import LoadingOverlay from "./components/LoadingOverlay";

// ---------------- font
const montserrat = Montserrat({ weight: '400', subsets: ['latin'] });

// ---------------- component
export default function Home() {

  // ---------------- state variables
  const [linkClicked, setLinkClicked] = useState(false);
  const [link, setLink] = useState("");
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(true);

  // ---------------- event handlers
  const handleInstalgramClick = (e) => {
    setLinkClicked(true);
    setLink("Instagram");
  }

  const handleEmailClick = (e) => {
    setLinkClicked(true);
    setLink("Email");
  }

  const handleContactNumberClick = (e) => {
    setLinkClicked(true);
    setLink("Contact Number");
  }

  // ---------------- JSX
  return (
    <>
      <LoadingOverlay
        enabled={showLoadingOverlay}
        bgColor="#fff"
        showSpinner={true}
        spinnerColor="#ea002a"
      />

      <div className="relative h-screen bg-cover bg-center bg-[url('/images/Interior-mobile.jpg')] sm:bg-[url('/images/Banglow-day.jpg')] overflow-hidden select-none">

        {/* (3) Add Bhaiye's picture right beside the text for desktop screens. */}

        {/* (4) Add a block at the bottom of the page that is blackish but not entirely black, and which has bhaiye's social links. */}

        <DialogBox linkClicked={linkClicked} setLinkClicked={setLinkClicked} link={link} />

        <div className=" p-6 relative z-10 drop-shadow-[0rem_0rem_0.4rem_#000]">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl text-white leading-snug md:mt-0">
              Hi, I&apos;m
              <span className={`${montserrat.className} block max-w-fit bg-white rounded px-2 mt-1 text-black`}>Preet Pal Singh</span>
            </h1>
            <motion.p className="text font-bold text-white mt-4"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              a realtor based in Truro, NS.
              <span className="ml-2 inline max-w-96 sm:block sm:ml-0">Your dream home is just a click away. Let&apos;s Find Your Perfect Home Together!</span>
            </motion.p>
          </div>

          <Image
            className="drop-shadow-[0rem_0rem_0.4rem_#ffffff70] rounded m-auto mt-10"
            src="/images/realtor_preet_portrait.jpg"
            alt="Preet singh dhillon's portrait photo"
            width={200}
            height={10}
            priority
            onLoad={(e) => setShowLoadingOverlay(false)}
          />
        </div>

        <motion.div className="absolute inset-0 mt-auto h-1/4 bg-gradient-to-b from-transparent to-black flex flex-wrap items-center justify-between p-6"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1
          }}
        >

          <div className="flex justify-between min-w-1/2 drop-shadow-[0rem_0rem_0.4rem_#ffffff70]">
            <FontAwesomeIcon icon={faInstagram} className="text-white text-4xl hover:invert cursor-pointer" onClick={handleInstalgramClick} />
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-4xl hover:invert cursor-pointer mx-6" onClick={handleEmailClick} />
            <FontAwesomeIcon icon={faSquarePhone} className="text-white text-4xl hover:invert cursor-pointer" onClick={handleContactNumberClick} />
          </div>

          <Image
            className="drop-shadow-[0rem_0rem_0.4rem_#ffffff70]"
            src="/svg/Royal_LePage_Logo.svg"
            alt="Royal LePage Logo"
            width={180}
            height={37}
            priority
          />

        </motion.div>

      </div>
    </>
  );
}
