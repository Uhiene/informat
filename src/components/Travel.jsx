import React, { useState, useEffect } from "react";
import axios from "axios";
import textBackground from "../../images/redBg.svg";

const Travel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await axios.get(
          "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=Zh4TZgpd9gf0KJcHM7Xemue3RU4ytS7E"
        );
        setArticles(response.data.results.slice(1, 4)); // Get next 3 articles
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTopStories();
  }, []);

  return (
    <div>
      {articles.slice(0, 1).map((article) => (
        <div className="flex gap-10  " key={article.uri}>
          <div
            style={{
              backgroundImage: `url(${textBackground})`,
            }}
            className="w-48 h-44"
          >
            <p className="font-medium text-[100px] text-center">T</p>
          </div>
          <div className="w-fit mt-10 space-y-10">
            <div className="space-y-4">
              <h1 className="font-medium text-sm uppercase">
                {article.section}
              </h1>
              <h1 className="text-2xl">{article.title}</h1>
              <p className="text-lg text-[#5A6372]">{article.abstract}</p>
              <p className="text-xs">GO TO HEADLINE</p>
            </div>
            <div className="space-y-5">
              {articles.slice(0, 4).map((article) => (
                <div className="flex gap-4" key={article.url}>
                  <img
                    src={article.multimedia[0].url}
                    alt=""
                    className="w-[110px] h-[110px] object-cover"
                  />
                  <div className="space-y-2">
                    <div className="text-xs text-[#5A6372] flex gap-4">
                      <p>{article.updated_date}</p>
                      <p>{article.byline}</p>
                    </div>
                    <h1 className="text-lg leading-6">{article.title}</h1>
                    <p className="text-sm text-[#5A6372]">{article.abstract}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Travel;
