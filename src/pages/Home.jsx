import React from "react";
import { Link } from "react-router-dom";
import articleData from "./data/articledata";
import useWindowWidth from "./hooks/useWindowWidth.jsx";
import useArticlePreviewCount from "./hooks/useArticlePreviewCount.jsx";
import heroSectionImg from "./articleimage.png";

export default function Home() {
  const windowWidth = useWindowWidth();
  const [articlePreviewCount, setArticlePreviewCount] = React.useState(
    useArticlePreviewCount(windowWidth, articleData)
  );

  function handleViewMoreBtn() {
    if (articlePreviewCount <= articleData.length) {
      setArticlePreviewCount((prev) => prev + 3);
    }
  }

  const numberOfArticlesDisplayed =
    windowWidth >= 1085 ? articleData.length : articlePreviewCount;

  const heroSectionStyle = {
    backgroundImage: `url(${heroSectionImg})`,
    backgroundSize: "cover",
  };

  return (
    <div className="home-page-container">
      <Link className="hero-section-link" to="/blog/1">
        <div className="hero-section" style={heroSectionStyle}>
          <div className="hero-section-text-container">
            <p className="hero-section-date">JULY 23, 2022</p>
            <h2 className="hero-section-heading">
              My new journey as a bootcamp student.
            </h2>
            <p className="hero-section-paragraph">
              After several months of learning in the Frontend Developer Career
              Path, I've made the big jump over to the Bootcamp to get expert
              code reviews of my Solo Projects projects and meet like-minded
              peers.
            </p>
          </div>
        </div>
      </Link>

      <div className="article-preview-container">
        {articleData.slice(0, numberOfArticlesDisplayed).map((article) => (
          <div className="article" key={article.id}>
            <Link className="article-link" to={`/blog/${article.id}`}>
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
              {articlePreviewCount === articleData.length
                ? "No more articles to view"
                : "View More"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}