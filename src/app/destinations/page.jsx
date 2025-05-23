"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import pic1 from "../../../public/destination.jpg";

const page = () => {
  const router = useRouter();

  const send = () => {
    router.push("/domestic");
  };

  const send1 = () => {
    router.push("/international");
  };

  return (
    <div className="">
      {/* Hero Section */}
      <motion.section
        className="relative h-[35vh] md:h-[50vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black">
          <Image
            src={pic1}
            alt="Destinations"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center text-white text-left p-4 md:ml-24 md:mt-10">
          <motion.h1
            className="trips-exotica-header font-serif text-3xl md:text-7xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Destinations
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Choose your vacation destination
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <div className="py-8 px-4 md:px-12">
        <motion.h2
          className="text-xl font-bold font-mono text-black text-left ml-4 md:ml-28"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Choose Your
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-7xl font-bold font-serif text-black text-left ml-4 md:ml-28"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          Destinations
        </motion.h1>
        <motion.p
          className="text-base md:text-xl italic font-serif text-stone-800 text-left mt-4 ml-4 md:ml-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Escape to the world's most luxurious destinations and immerse yourself
          in unparalleled beauty and indulgence.
        </motion.p>
      </div>

      {/* Destination Options */}
      <div className="py-8">
        {/* Domestic Section */}
        <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-12 mb-12">
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://storage.googleapis.com/stateless-www-justwravel-com/2018/04/1460182886_notes-810x538.png"
              alt="Domestic"
              className="rounded-lg w-full md:w-[500px] h-auto shadow-lg"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold font-serif text-stone-600">
              Domestic
            </h1>
            <h2 className="text-lg md:text-xl font-bold font-mono text-black mt-4">
              Discover the Hidden Gems of Your Own Country
            </h2>
            <p className="text-base md:text-xl italic font-serif text-stone-800 mt-4 leading-relaxed">
              Indulge in unforgettable luxury travel experiences across the best
              destinations in your home country!
            </p>
            <motion.button
              onClick={send}
              className="mt-6 bg-stone-300 hover:bg-stone-500 text-black font-bold font-mono text-lg md:text-xl py-2 px-6 rounded-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find more
            </motion.button>
          </motion.div>
        </div>

        {/* International Section */}
        <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-12">
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-8 order-2 md:order-1 md:ml-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold font-serif text-stone-600">
              International
            </h1>
            <h2 className="text-lg md:text-xl font-bold font-mono text-black mt-4">
              Escape to Exotic Destinations
            </h2>
            <p className="text-base md:text-xl italic font-serif text-stone-800 mt-4 leading-relaxed">
              Immerse yourself in culture, adventure, and unmatched luxury with
              our exclusive international travel packages!
            </p>
            <motion.button
              onClick={send1}
              className="mt-6 bg-stone-300 hover:bg-stone-500 text-black font-bold font-mono text-lg md:text-xl py-2 px-6 rounded-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find more
            </motion.button>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/06/28/15/32/venice-2451047_1280.jpg"
              alt="International"
              className="rounded-lg w-full md:w-[500px] h-auto shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;