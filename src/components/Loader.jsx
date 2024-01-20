import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-32">
      <FaSpinner className="animate-spin text-gray-400" />
    </div>
  );
};

export default Loader;
