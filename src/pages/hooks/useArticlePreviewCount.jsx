import React from "react";

export default function useArticlePreviewCount(windowWidth, articleData) {
  const [articlePreviewCount, setArticlePreviewCount] = React.useState(3);

  React.useEffect(() => {
    windowWidth >= 1085
      ? setArticlePreviewCount(articleData.length)
      : setArticlePreviewCount(3);
  }, [windowWidth, articleData]);

  return articlePreviewCount;
}
