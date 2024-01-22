import React, { useEffect } from "react";
import { HiLink } from "react-icons/hi";
import { Link, Outlet, useParams } from "react-router-dom";
import { useDataContext, useReposContext } from "../context/DataContext";
import { MdKeyboardArrowRight } from "react-icons/md";
import Loader from "../components/Loader";

const Home = () => {
  // Destructuring values from the context using custom hooks
  const {
    userData,
    fetchData,
    reposPerPage,
    currentPage,
    setReposPerPage,
    setCurrentPage,
    isLoading,
  } = useDataContext();
  const { userRepositories } = useReposContext();

  // Initial data fetching and pagination setup
  useEffect(() => {
    fetchData();
  }, [currentPage, reposPerPage]);

  // Get the current page number from the URL parameter
  const { pageNo } = useParams();

  // Set the current page based on the URL parameter
  useEffect(() => {
    setCurrentPage(pageNo ? parseInt(pageNo, 10) : 1);
  }, [pageNo]);

  return (
    <div className="bg-[#161418] text-white min-h-screen flex px-20 py-10">
      {isLoading ? (
        // Display a Loader component while data is being fetched
        <Loader />
      ) : (
        <>
          {/* User Profile Section */}
          <section className="sticky top-20 h-full w-[23vw] px-8 ">
            <div>
              {/* User's avatar and GitHub link */}
              <div className="w-56 h-56  rounded-full custom-gradient flex items-center justify-center p-2">
                <img
                  src={userData?.avatar_url}
                  alt={`Avatar of ${userData?.login}`}
                  className="object-cover rounded-full h-full w-full "
                ></img>
              </div>
              <div>
                {/* GitHub link with icon */}
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
              {/* User's name and bio */}
              <div>{userData?.login}</div>
              <div>{userData?.bio}</div>
            </div>
          </section>

          {/* Repositories Section */}
          <section className="flex-1 pr-8">
            {/* Dropdown for selecting repositories per page */}
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

            {/* Render child routes */}
            <Outlet />

            {/* Pagination section */}
            <div className="flex justify-center mt-4">
              {/* Button to navigate to the previous page */}
              <Link to={`/${currentPage - 1}`}>
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 mr-2 text-white disabled:opacity-50 flex gap-1 items-center justify-center hover:border-white border-2 rounded-lg border-[#161418]"
                >
                  <MdKeyboardArrowRight className=" text-lg rotate-180" />
                  <span>Previous</span>
                </button>
              </Link>

              {/* Button to navigate to the next page */}
              <Link to={`/${currentPage + 1}`}>
                <button
                  onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                  disabled={userRepositories.length < reposPerPage}
                  className="px-4 py-2 hover:border-white border-2 rounded-xl border-[#161418] text-white disabled:opacity-50 flex gap-1 items-center justify-center"
                >
                  <span>Next</span>{" "}
                  <MdKeyboardArrowRight className=" text-lg" />
                </button>
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
