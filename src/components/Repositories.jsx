import React from "react";
import Card from "./Card";
import { useReposContext } from "../context/DataContext";

const Repositories = () => {
    // Access the userRepositories data from the context
    const { userRepositories } = useReposContext();

    return (
        <>
            {/* Container for the repositories grid */}
            <div className="grid grid-flow-row grid-cols-1 gap-4 py-8">
                {/* 
                    Map through each repository and render a Card component for it.
                    The use of the optional chaining operator (?.) ensures that the mapping won't break 
                    if userRepositories is null or undefined.
                */}
                {userRepositories?.map((item, index) => (
                    // Card component receives repository data as a prop
                    <Card key={index} repoData={item} />
                ))}
            </div>
        </>
    );
};

export default Repositories;
