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
  console.log(userData);
  return (
    <div className="bg-[#171717] text-white flex flex-col md:flex-row xl:px-36 py-10">
      {isLoading ? (
        // Display a Loader component while data is being fetched
        <Loader />
      ) : (
        <>
          {/* User Profile Section */}
          <section className="md:sticky md:block top-10 h-full w-[360px] md:px-8 px-4">
            <div className="flex md:block">
              {/* User's avatar */}
              <div className="md:w-60 md:h-60 w-20 h-20 rounded-full custom-gradient flex items-center justify-center p-2">
                <img
                  src={userData?.avatar_url}
                  alt={`Avatar of ${userData?.login}`}
                  className="object-cover rounded-full h-full w-full "
                ></img>
              </div>
              <div className=" pl-4 md:pl-0">
                <div className=" text-2xl font-semibold pt-4">
                  {userData?.name}
                </div>
                <div className=" text-lg text-gray-400 pb-4">
                  {userData?.login}
                </div>
              </div>
            </div>
            <div className="pt-2 md:pt-0 pb-10 md:pb-0">
              <div>
                {/* GitHub link with icon */}
                <a
                  href={userData?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center text-[#a970ff]"
                >
                  <HiLink />
                  github
                </a>
              </div>
              <div>{userData?.bio}</div>
            </div>
          </section>

          {/* Repositories Section */}
          <section className="flex-1 px-4 md:px-0 md:pr-8">
            {/* Dropdown for selecting repositories per page */}
            <div className="flex justify-end  text-gray-400 items-center">
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
                className="bg-[#212121] text-white px-2 py-1 rounded-md"
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
            <div className="flex justify-center ">
              {/* Button to navigate to the previous page */}
              <Link to={`/${currentPage - 1}`}>
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 mr-2 text-[#a970ff] disabled:opacity-50 flex gap-1 items-center justify-center hover:border-white border-2 rounded-lg border-[#161418]"
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
                  className="px-4 py-2 hover:border-white border-2 rounded-xl border-[#161418] text-[#a970ff] disabled:opacity-50 flex gap-1 items-center justify-center"
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
