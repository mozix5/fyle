import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Functional component to scroll to the top of the page when the route changes
export default function ScrollToTop() {
  // Get the current pathname from the location hook provided by react-router-dom
  const { pathname } = useLocation();

  // Use the useEffect hook to perform actions after the component mounts or when pathname changes
  useEffect(() => {
    // Scroll to the top of the page using the scrollTo method
    document.documentElement.scrollTo({
      top: 0,          // Scroll to the top
      left: 0,         // Scroll to the left
      behavior: "instant",  // Use instant scrolling behavior
    });
  }, [pathname]); // Trigger the effect when the pathname changes

  // The component doesn't render anything (returns null), as it's focused on performing a side effect
  return null;
}
