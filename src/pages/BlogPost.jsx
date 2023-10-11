import React from "react";
import articleData from "./data/articledata";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { blogId } = useParams();
  const [blogPost, setBlogPost] = React.useState(null);
  const post = articleData.find((post) => post.id === parseInt(blogId));

  React.useEffect(() => {
    setBlogPost(post);
  }, [blogId]);

  if (!blogPost) {
    return <div>....Loading posts</div>;
  }

  return (
    <div className="blog-post-page-container">
      <h2 className="blog-post-main-heading">{blogPost.title}</h2>

      <p className="blog-post-intro-text">
        After several months of learning in the Frontend Developer Career Path,
        I've made the big jump over to the Bootcamp to get expert code reviews
        of my Solo Projects projects and meet like-minded peers.
      </p>

      <h3 className="blog-post-heading">How I stay committed to learning</h3>

      <p>
        I like to think of myself as a lifelong learner. I used to spend hours
        and hours learning, then try to create simple projects using what I
        learned or work new techniques into existing projects.
      </p>

      <p className="blog-post-last-paragraph">
        While that was fun, I felt like it would be helpful to share what I was
        learning and most things about my journey with the world.
      </p>

      <h3 className="blog-post-heading">How I got started</h3>

      <p>
        I started simple and gradually grew my learning journal site. I would
        take notes about what I was learning. After each learning session, I'd
        use my notes to not only reflect on what I learned but also write short
        summaries of what I learned using my own words.
      </p>

      <p className="blog-post-last-paragraph">
        That helped me grok what I was learning, and I realized that posting my
        learning summaries was also helping others learn and stay motivated.
      </p>
    </div>
  );
}
