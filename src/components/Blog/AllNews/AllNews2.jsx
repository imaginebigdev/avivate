import React from "react";
import Blog2 from "./Blog2";
import allNewsData from "@data/Blog/modulo2.json";

const AllNews2 = ({ isWide, leftSidebar, style = "4" }) => {
  const data = allNewsData;

  return (
    <section className="all-news section-padding blog bg-transparent style-3">
      <div className="container">
        <div
          className={`row justify-content-center ${
            isWide ? "" : leftSidebar ? "gx-5" : "gx-4 gx-lg-5"
          }`}
        >
          <Blog2 blogs={data.blog2} isWide={isWide} style={style} />
        </div>
      </div>
    </section>
  );
};

export default AllNews2;
