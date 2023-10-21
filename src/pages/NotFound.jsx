import React from "react";
import { Link } from "react-router-dom";
import articleData from "./data/articledata";
import useWindowWidth from "./hooks/useWindowWidth";
import useArticlePreviewCount from "./hooks/useArticlePreviewCount";

export default function NotFound() {
  const windowWidth = useWindowWidth();
  const articlePreviewCount = useArticlePreviewCount(windowWidth, articleData);

  return (
    <div className="not-found-container">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link className="return-home-link" to="/">
        Return to home
      </Link>
     </div>
    
  );
}
