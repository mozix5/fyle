import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const Card = ({ repoData }) => {
    console.log(repoData);
    const languageColors = {
      JavaScript: "#f7df1e",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Python: "#3572A5",
      Java: "#b07219",
      Ruby: "#701516",
      TypeScript: "#2b7489",
    };
    const languageColor = languageColors[repoData.language] || "#6b7280"; // Default color if language not found
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{repoData.name}</h2>
        <p className="text-gray-400">{repoData.description}</p>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-700">
        <div className="flex items-center text-gray-400">
          <span className="mr-2">{repoData.language}</span>
          <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: languageColor }}></div>
        </div>
        <div className="flex items-center text-gray-400">
          <BsFillStarFill className="text-yellow-500 mr-2" />
          {repoData.stargazers_count}
        </div>
      </div>
      <a
        href={repoData.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center py-2 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Card;
