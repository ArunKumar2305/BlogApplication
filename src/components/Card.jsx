import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 shadow-md rounded-md"
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default Card;
