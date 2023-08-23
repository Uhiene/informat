import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularInfo = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await axios.get(
          "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=Zh4TZgpd9gf0KJcHM7Xemue3RU4ytS7E"
        );
        setArticles(response.data.results.slice(1, 4)); // Get next 3 articles
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTopStories();
  }, []);

  return (
    <>
      {articles.slice(0, 4).map((article) => (
        <div className="border border-[#5A637233] rounded-lg overflow-hidden   w-full h-fit">
          <div className="relative  border">
            <img
              src={article.multimedia[0].url}
              alt=""
              className="w-full h-1/2 object-cover"
            />
            <div className=" bg-white absolute bottom-0 left-0 p-1 text-[#1049CC] font-medium text-xs uppercase">{article.section}</div>
          </div>
          <div className="p-4 space-y-2">
            <p className="text-[10px] text-[#5A6372]">{article.updated_date}</p>
            <h1 className="text-sm ">{article.title}</h1>
            <p className="text-xs text-[#5A6372]">{article.abstract}</p>
            <p className="text-xs text-[#1049CC] font-bold">GO TO HEADLINE</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PopularInfo;
