import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { HiLink } from "react-icons/hi";

const Home = () => {
  const [user, setUser] = useState("mozix5");
  const [userData, setUserData] = useState({});
  const [userRepositories, setUserRepositories] = useState([]);
  const [reposPerPage, setReposPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage, reposPerPage]);

  const fetchData = async () => {
    try {
      // Fetch user details
      const userResponse = await axios.get(
        `https://api.github.com/users/${user}`
      );

      // Fetch repositories with pagination
      const repositoriesResponse = await axios.get(
        `https://api.github.com/users/${user}/repos`,
        {
          params: {
            page: currentPage,
            per_page: reposPerPage,
          },
        }
      );

      setUserData(userResponse?.data);
      setUserRepositories(repositoriesResponse?.data);
      //   console.log(repositoriesResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-[#161418] text-white min-h-screen flex px-20 py-10">
      {/* User Profile Section */}
      <section className="flex items-center flex-col w-[30vw] pl-6">
        <div>
          <div className="w-56 h-56 rounded-full custom-gradient flex items-center justify-center p-2">
            <img
              src={userData?.avatar_url}
              alt={`Avatar of ${userData?.login}`}
              className="object-cover rounded-full h-full w-full"
            ></img>
          </div>
          <div>
            <a
              href={userData?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <HiLink />
              github
            </a>
          </div>
        </div>
        <div>
          <div>{userData?.login}</div>
          <div>{userData?.bio}</div>
        </div>
      </section>

      {/* Repositories Section */}
      <section className="flex-1">
        <div className="flex justify-end mt-4 text-gray-400">
          {/* Label for Repos per page dropdown */}
          <label className="mr-2">Repos per page:</label>

          {/* Dropdown for selecting repositories per page */}
          <select
            value={reposPerPage}
            onChange={(e) => {
              // Ensure the selected value is at least 1
              const selectedValue = Math.max(1, Number(e.target.value));

              // Set the selected value as the new reposPerPage
              setReposPerPage(selectedValue);
            }}
            className="bg-gray-700 text-white px-2 py-1 rounded"
          >
            {/* Options for repositories per page */}
            {[10, 20, 30, 50, 100].map((perPage) => (
              <option key={perPage} value={perPage}>
                {perPage}
              </option>
            ))}
          </select>
        </div>

        <div className=" grid grid-flow-row grid-cols-2 gap-4 px-6">
          {userRepositories.map((item, index) => {
            return <Card key={index} repoData={item} />;
          })}
        </div>
        {/* Pagination section */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            disabled={currentPage === 1}
            className="px-4 py-2 mr-2 bg-gray-800 text-white disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={userRepositories.length < reposPerPage}
            className="px-4 py-2 bg-gray-800 text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
