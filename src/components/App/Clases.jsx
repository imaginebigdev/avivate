import React, { useState } from "react";
import Link from "next/link";
import blogsData from "../../data/App/blogdata.json"; // Importa el archivo JSON con los datos

const Blogs2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleModalOpen = (videoInfo) => {
    setCurrentVideo(videoInfo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <section className="blog-list section-padding sub-bg" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color ls2" style={{ color: "#fff" }}>
                Artículos Recientes
              </h6>
              <h3>Últimos Contenidos</h3>
              <p>
                Enterate de los últimos artículos y contenidos relacionados al
                Coaching.
              </p>
              <Link href="/Contenidos">
                <a>
                  <span>Ver Contenido</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="posts mt-80">
              {blogsData.map((blogItem, index) => (
                <div
                  className="item mb-80 wow fadeInUp"
                  key={index}
                  data-wow-delay=".3s"
                >
                  <div className="img valign">
                    <img src={blogItem.image} alt="" />
                  </div>
                  <div className="cont valign">
                    <div>
                      <div className="info">
                        <span style={{ color: "#0c7498ff" }} className="pt-20">
                          {blogItem.date}
                        </span>
                      </div>
                      <h5>{blogItem.title}</h5>
                      <h6>{blogItem.content}</h6>
                      <button onClick={() => handleModalOpen(blogItem.video)}>
                        Ver Video
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <video controls autoPlay>
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs2;
