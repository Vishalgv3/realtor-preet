"use client";

import Image from "next/image";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-[url('/images/Interior-mobile.jpg')] sm:bg-[url('/images/Banglow-day.jpg')]">

      {/* (1) Add a background picture that is darker than the foreground and that covers the entire screen, be it Desktop, laptop, tablet or mobile screen. DONE */}

      {/* (2) Add an "Hey there, I'm Preet Singh Dhillon, a realtor based out of Truro, Ns."  DONE */}

      {/* (3) Add Bhaiye's picture right beside the text for desktop screens. */}

      {/* (4) Add a block at the bottom of the page that is blackish but not entirely black, and which has bhaiye's social links. */}

      <div className="p-6 relative z-10 drop-shadow-[0rem_0rem_0.4rem_#000]">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white leading-snug md:mt-0">
          Hi, I&apos;m
          <span className="block max-w-fit bg-white rounded px-2 mt-1 italic text-black">Preet Singh Dhillon</span>
        </h1>
        <motion.p className="text font-extrabold text-white mt-4"
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
            delay: 0.5
          }}
        >
          a realtor based in Truro, NS.
          <span className="ml-2 inline sm:block sm:ml-0"> ** Add a call to action here ** </span>
        </motion.p>
        <motion.button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-4 md:mt-16`}
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
          {/* replace this image with "Royal Lepage logo" */}
          {/* <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> */}

          <span className="mt-8">** Replace this button with &quot;Royal LePage&quot; logo **</span>

        </motion.button>
      </div>
      <div className="absolute inset-0 mt-auto h-1/4 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
}
