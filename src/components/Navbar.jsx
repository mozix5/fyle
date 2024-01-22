import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useReposContext } from "../context/DataContext";
import axios from "axios";

const Navbar = ({ userName }) => {
  // Destructure the setUserRepositories function from the DataContext
  const { setUserRepositories } = useReposContext();

  // State to store the search query entered by the user
  const [searchQuery, setSearchQuery] = useState("");
  //   const [searchedRepo, setSearchedRepo] = useState([]);
  //   useEffect(() => {
  //     const debounce = setTimeout(() => {
  //       fetchData();
  //     }, 2000);
  //     return () => clearTimeout(debounce);
  //   }, [searchQuery]);

  // Handler function to initiate the search
  const handleSearch = () => {
    fetchData();
    // setUserRepositories(searchedRepo);
  };

   // Event handler for the "Enter" key press
   const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Asynchronous function to fetch repositories based on the search query
  const fetchData = async () => {
    try {
      const user = "mozix5";

      // Make a request to the GitHub API to search repositories
      const repositoriesResponse = await axios.get(
        `https://api.github.com/search/repositories`,
        {
          params: {
            q: `user:${user} ${searchQuery}`,
          },
        }
      );
      //   setSearchedRepo(repositoriesResponse?.data.items || []);

      // Set the retrieved repositories in the DataContext
      setUserRepositories(repositoriesResponse?.data.items || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className=" bg-[#171717] z-10 pt-6 pb-4 px-8 flex items-center justify-between">
      <div className="flex items-center">
        <FaGithub className="text-white text-4xl mr-2" />
        <span className="text-white text-xl font-semibold pl-2">mozix5</span>
      </div>
      <div className="flex items-center h-8">
        <input
          type="text"
          placeholder="Search repositories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleEnterKeyPress}
          className="input w-24 md:w-48"
        />
        <button onClick={handleSearch} className="search__btn ">
          <FiSearch className="text-xl text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
