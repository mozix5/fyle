// DataContext.js
import axios from "axios";
import { createContext, useContext, useState } from "react";

// Create Contexts to manage data and repositories
const DataContext = createContext();
const ReposContext = createContext();

// Custom Hooks to access the DataContext and ReposContext
export const useDataContext = () => {
  return useContext(DataContext);
};

export const useReposContext = () => {
  return useContext(ReposContext);
};

// DataProvider component to wrap the application with data and repositories context
export const DataProvider = ({ children }) => {
  // State variables to manage user-related data and repositories
  const [user, setUser] = useState("mozix5");
  const [userData, setUserData] = useState({});
  const [userRepositories, setUserRepositories] = useState([]);
  const [reposPerPage, setReposPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Asynchronous function to fetch user details and repositories
  const fetchData = async () => {
    try {
      // Indicate that data is loading
      setIsLoading(true);

      // Fetch user details from the GitHub API
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

      // Set user data and repositories in state
      setUserData(userResponse?.data);
      setUserRepositories(repositoriesResponse?.data);
    } catch (error) {
      // Log any errors that occur during data fetching
      console.error(error);
    } finally {
      // Indicate that data loading is complete
      setIsLoading(false);
    }
  };

  return (
    // Provide the data and repositories to the application through context
    <DataContext.Provider
      value={{
        userData,
        fetchData,
        reposPerPage,
        currentPage,
        setReposPerPage,
        setCurrentPage,
        isLoading,
      }}
    >
      <ReposContext.Provider value={{ userRepositories, setUserRepositories }}>
        {children}
      </ReposContext.Provider>
    </DataContext.Provider>
  );
};
