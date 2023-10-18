import React from "react";
import Blogs from "./Blogs";
import allNewsData from "@data/Blog/all-news.json";

const AllNews = ({ isWide, leftSidebar, style = "4" }) => {
  const data = allNewsData;

  return (
    <section className="all-news section-padding blog bg-transparent style-3">
      <div className="container">
        <div
          className={`row justify-content-center ${
            isWide ? "" : leftSidebar ? "gx-5" : "gx-4 gx-lg-5"
          }`}
        >
          <Blogs blogs={data.blogs} isWide={isWide} style={style} />
        </div>
      </div>
    </section>
  );
};

export default AllNews;