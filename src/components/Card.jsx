import React from "react";

const Card = ({ repoData }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{repoData.name}</h2>
      <p className="text-gray-400">{repoData.description}</p>
      <div className="flex justify-between mt-3">
        <div className="flex items-center text-gray-500">
          <span className="mr-2">Language:</span>
          {repoData.language}
        </div>
        <div className="flex items-center text-gray-500">
          <span className="mr-2">Stars:</span>
          {repoData.stargazers_count}
        </div>
      </div>
      <a
        href={repoData.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-blue-500 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Card;
