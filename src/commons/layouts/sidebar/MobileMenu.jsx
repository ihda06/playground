import { BreakLine } from "@/commons/elements/BreakLine";
import React from "react";
import { Navigation } from "./Navigation";
import { motion } from "framer-motion";

export const MobileMenu = () => {
  return (
    <motion.div
      className="h-screen flex flex-col my-3"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="">
        <BreakLine className="mt-2"></BreakLine>
        <Navigation></Navigation>
      </div>
    </motion.div>
  );
};
