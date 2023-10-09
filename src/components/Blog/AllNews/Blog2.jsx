import React, { useState } from "react";

const Blogs = ({ blogs, isWide, style, rtl }) => {
  const blogsPerPage = 5; // Número de blogs por página
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  const pageCount = Math.ceil(blogs.length / blogsPerPage);

  const handlePageClick = (newPage) => {
    setCurrentPage(newPage);
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
                      <a
                        className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0 curor-pointer"
                        href={blog.video}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Clase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Renderiza la paginación */}
      <nav
        aria-label="Page navigation"
        className="d-flex justify-content-center"
      >
        <ul className="pagination">
          <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageClick(currentPage - 1)}
              aria-label="Anterior"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {Array.from({ length: pageCount }, (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => handlePageClick(i)}>
                {i + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === pageCount - 1 ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageClick(currentPage + 1)}
              aria-label="Siguiente"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Blogs;
