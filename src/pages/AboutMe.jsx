import React from "react";
import { Link } from "react-router-dom";
import articleData from "./data/articledata";
import useWindowWidth from "./hooks/useWindowWidth";
import useArticlePreviewCount from "./hooks/useArticlePreviewCount";
import aboutMePageImg from "./image18.jpg";

export default function AboutMe() {
  const windowWidth = useWindowWidth();
  const articlePreviewCount = useArticlePreviewCount(windowWidth, articleData);

  return (
    <>
      <div className="about-me-page-container">
        <div className="about-me-page-intro">
          <img className="about-me-page-intro-image" src={aboutMePageImg} />

          <div>
            <h1 className="about-me-page-intro-title">
              Hi there! My name is Roku and welcome to my learning journal.
            </h1>

            <p className="about-me-page-intro-text">
              After several months of learning in the Frontend Developer Career
              Path, I've made the big jump over to the Bootcamp to get expert
              code reviews of my Solo Projects projects and meet like-minded
              peers.
            </p>
          </div>
        </div>

        <h3 className="about-me-page-heading">
          How I stay committed to learning
        </h3>

        <p>
          I like to think of myself as a lifelong learner. I used to spend hours
          and hours learning, then try to create simple projects using what I
          learned or work new techniques into existing projects.
        </p>

        <p className="about-me-page-last-paragraph">
          While that was fun, I felt like it would be helpful to share what I
          was learning and most things about my journey with the world.
        </p>

        <h3 className="about-me-page-heading">How I got started</h3>

        <p>
          I started simple and gradually grew my learning journal site. I would
          take notes about what I was learning. After each learning session, I'd
          use my notes to not only reflect on what I learned but also write
          short summaries of what I learned using my own words.
        </p>

        <p className="about-me-page-last-paragraph">
          That helped me grok what I was learning, and I realized that posting
          my learning summaries was also helping others learn and stay
          motivated.
        </p>
      </div>

      <h3 className="article-recent-posts-heading">Recent posts</h3>

      <div className="article-preview-container">
        {articleData.slice(0, articlePreviewCount).map((article) => (
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
      </div>
    </>
  );
}
