import React from "react";
import { Link } from "react-router-dom";
import articleDataWithUrlsIds from "./data/articledata";
import useWindowWidth from "./hooks/useWindowWidth";
import useArticlePreviewCount from "./hooks/useArticlePreviewCount";

export default function Blog() {
  const windowWidth = useWindowWidth();
  const [articlePreviewCount, setArticlePreviewCount] = React.useState(
    useArticlePreviewCount(windowWidth, articleDataWithUrlsIds)
  );


  function handleViewMoreBtn() {
    if (articlePreviewCount < articleDataWithUrlsIds.length) {
      setArticlePreviewCount(prev => prev + 3);

    } else if(articlePreviewCount === articleDataWithUrlsIds.length) {
      setArticlePreviewCount(prev => prev - 3)
    }
  }

  const numberOfArticlesDisplayed =
    windowWidth >= 1085 ? articleDataWithUrlsIds.length : articlePreviewCount;

  return (
    <>
      <h3 className="article-recent-posts-heading blog-page-heading">
        Recent posts
      </h3>
      <div className="article-preview-container">
        {articleDataWithUrlsIds.slice(0, numberOfArticlesDisplayed).map((article) => (
          <div className="article" key={article.id}>
            <Link className="article-link"  to={`/blog/${article.url}`}>
              <img
                className="article-image"
                src={article.image}
                alt={article.title}
              />
              <p className="article-date">{article.date}</p>
              <h3 className="article-heading">{article.title}</h3>
              <p className="article-intro">{article.IntroTxt}</p>
            </Link>
          </div>
        ))}
        {windowWidth < 1085 && (
          <div className="view-more-articles">
            <a className="view-more-articles-link" onClick={handleViewMoreBtn}>
              {articlePreviewCount === articleDataWithUrlsIds.length
                ? "View less"
                : "View more"}
            </a>
          </div>
        )}
      </div>
    </>
  );
}
