import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Blogs = ({ blogs, isWide, style, rtl }) => {
  const [isOpen, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={isWide ? "col-lg-10" : "col-lg-8"}>
      {currentBlogs.map((blog, index) => (
        <div
          className={`card border-0 bg-transparent rounded-0 ${
            index !== currentBlogs.length - 1
              ? "border-bottom brd-gray"
              : "mb-lg-0 pb-lg-0"
          } pb-30 mb-30`}
          key={index}
        >
          <div className="row">
            <div className="col-lg-5">
              <div className="img img-cover">
                <img src={blog.cover} className="radius-2" alt="..." />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card-body p-0">
                <small className="d-block date text">
                  <p
                    className={`text-uppercase border-end brd-gray pe-3 me-3 color-blue${style} fw-bold`}
                  >
                    {blog.type}
                  </p>
                  <p className="op-8">
                    <i className="bi bi-calendar me-1"></i>
                    {blog.time}
                  </p>
                </small>

                <h4 className="card-title mb-10">{blog.title}</h4>

                <p className="fs-13px color-666">{blog.desc}</p>
                <div className="auther-comments d-flex small align-items-center justify-content-between op-9">
                  <div className="l_side d-flex align-items-center">
                    <span
                      className={`icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue${style} p-2 me-2 text-white`}
                    >
                      {blog.userImgLetter}
                    </span>
                    <p>
                      <small className="text-muted">By </small> {blog.username}
                    </p>
                  </div>
                  <div className="vid-area">
                    <div className="vid-icon">
                      {typeof window !== "undefined" && (
                        <ModalVideo
                          autoplay
                          channel="vimeo"
                          isOpen={isOpen}
                          videoId={`${blog.videoId}`}
                          onClose={() => setOpen(false)}
                        />
                      )}
                      <button
                        className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(true);
                        }}
                      >
                        Ver Clase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div
        className={`pagination style-5 color-${style} justify-content-center mt-60`}
      >
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }).map(
          (_, index) => (
            <a
              style={{ cursor: "pointer" }}
              key={index}
              className={`butn ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Blogs;

{
  /* <div
        className={`pagination style-5 color-${style} justify-content-center mt-60`}
      >
        <a href="#" className="active">
          <span>1</span>
        </a>
        <a href="#">
          <span>2</span>
        </a>
        <a href="#">
          <span>3</span>
        </a>
        <a href="#">
          <span>4</span>
        </a>
        <a href="#">
          <span>...</span>
        </a>
        <a href="#">
          <span>20</span>
        </a>
        <a href="#">
          <span className="text">
            {rtl ? "التالي" : "next"} <i className="fas fa-chevron-right"></i>{" "}
          </span>
        </a>
      </div> */
}
