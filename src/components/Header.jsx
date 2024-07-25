import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-16 bg-blue-500 flex items-center justify-between px-4 shadow-md"
    >
      <h1 className="text-white text-2xl">Dashboard</h1>
    </motion.header>
  );
};

export default Header;
