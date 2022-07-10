import { useState, useEffect } from "react";
import "/src/carousel.css";

const AppHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 3 - 1;
    } else if (newIndex >= 3) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 10000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <header className="header">
        <h1 className="display-1">Video-posters</h1>
      </header>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{
            height: "500px"
          }}
        >
          <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
            <div style={{ display: "flex" }} className="slide-box">
              <img
                src={
                  window.location.origin + `/img/1604248414_610x900_5457.jpg`
                }
                className=""
                alt="1"
              ></img>
              <img
                src={
                  window.location.origin + `/img/1604405851_610x900_6522.jpg`
                }
                className=""
                alt="1"
              ></img>
              <img
                src={
                  window.location.origin + `/img/1604406512_610x900_6558.jpg`
                }
                className=""
                alt="1"
              ></img>
            </div>
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
            <div style={{ display: "flex" }} className="slide-box">
              <img
                src={
                  window.location.origin + `/img/1604314613_610x900_6358.jpg`
                }
                className=""
                alt="2"
              ></img>
              <img
                src={
                  window.location.origin + `/img/1604415205_610x900_6773.jpg`
                }
                className=""
                alt="2"
              ></img>
              <img
                src={
                  window.location.origin + `/img/1604525431_610x900_16666.jpg`
                }
                className=""
                alt="2"
              ></img>
            </div>
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
            <div style={{ display: "flex" }} className="slide-box">
              <img
                src={
                  window.location.origin + `/img/1604353236_610x900_39771.jpg`
                }
                className=""
                alt="3"
              ></img>
              <img
                src={
                  window.location.origin + `/img/1604599407_610x900_10605.jpg`
                }
                className=""
                alt="3"
              ></img>
              <img
                src={
                  window.location.origin + `/img/1604610419_610x900_13447.jpg`
                }
                className=""
                alt="3"
              ></img>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default AppHeader;
