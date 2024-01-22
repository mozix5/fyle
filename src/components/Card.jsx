import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const Card = ({ repoData }) => {
  // Mapping of programming languages to their respective colors
  const languageColors = {
    JavaScript: "#f7df1e",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Java: "#b07219",
    Ruby: "#701516",
    TypeScript: "#2b7489",
  };

  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  // Determine the color for the language badge, default to gray if not found
  const languageColor = languageColors[repoData.language] || "#6b7280";
  return (
    <a
    href={repoData.html_url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="bg-[#212121] text-white rounded-tl-2xl rounded-bl-md rounded-tr-md overflow-hidden shadow-md card relative py-6">
      <div className="px-6 ">
        {/* Repository name */}
        <h2 className="card__title text-[#a970ff] text-2xl font-semibold mb-2">
          {repoData.name}
        </h2>
        {/* Repository description */}
        <p className="text-gray-400">{repoData.description}</p>
      </div>
      <div className="flex justify-between items-center px-4 py-2 ">
        {/* Language information */}
        <div className="flex items-center text-gray-400">
          <span className="mr-2 text-sm">{repoData.language}</span>
          <div
            className={`w-2 h-2 rounded-full`}
            style={{ backgroundColor: languageColor }}
          ></div>
        </div>
        {/* Star count */}
        <div className="flex items-center text-gray-400">
          <BsFillStarFill className="text-yellow-500 mr-2" />
          {repoData.stargazers_count}
        </div>
      </div>
      <div className="flex justify-between pl-4 ">
        <div className="text-gray-400 text-sm">
          <span>Updated on </span>
          {formatDate(repoData.updated_at)}
        </div>
        {/* Link to view the repository on GitHub */}
        {/* <a
          href={repoData.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
       
       */}
      </div>
      <div className="card__arrow absolute bottom-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="20"
            width="20"
          >
            <path
              fill="#fff"
              d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
            ></path>
          </svg>
        </div>
    </div>
    </a> 
  );
};

export default Card;
