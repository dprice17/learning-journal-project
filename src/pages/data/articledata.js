import blogOneImg from "./images/article-image-03.png";
import blogTwoImg from "./images/article-image-02.png";
import blogThreeImg from "./images/article-image-01.png";
import blogFourImg from "./images/blog-image-03.png";
import blogFiveImg from "./images/blog-image-01.png";
import blogSixImg from "./images/blog-image-02.png";

const articleData = [
  {
    date: "July 23 2022",
    image: blogOneImg,
    title: "Blog one",
    IntroTxt:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },

  {
    date: "July 23 2022",
    image: blogTwoImg,
    title: "Blog two",
    IntroTxt:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },

  {
    date: "July 23 2022",
    image: blogThreeImg,
    title: "Blog three",
    IntroTxt:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },

  {
    date: "July 23 2022",
    image: blogFourImg,
    title: "Blog four",
    IntroTxt:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },

  {
    date: "July 23 2022",
    image: blogFiveImg,
    title: "Blog five",
    IntroTxt:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },

  {
    date: "July 23 2022",
    image: blogSixImg,
    title: "Blog six",
    IntroTxt:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
];

const articleDataWithUrlsIds = articleData.map((article, index) => ({
  ...article,
  id: index + 1,
  url: `blog-${index + 1}`,
}));

export default articleDataWithUrlsIds;
