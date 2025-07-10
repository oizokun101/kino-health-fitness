import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TopScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    const allScrollables = document.querySelectorAll("*");
    allScrollables.forEach((el) => {
      if (el.scrollTop > 0) el.scrollTop = 0;
    });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default TopScroll;
