import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-header-parent">
        <div className="gallery-header">
          <div className="flexibility-container">
            <b className="galeri1">Galeri</b>
            <h1 className="kesehatan-mental-di">
              Kesehatan Mental di seluruh dunia
            </h1>
          </div>
        </div>
        <div className="partner">
          <div className="mask-group-parent">
            <img
              className="mask-group-icon7"
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
            <img
              className="mask-group-icon8"
              alt=""
              src="/mask-group-1@2x.png"
            />
          </div>
          <div className="image-grid">
            <div className="image-row">
              <img
                className="gallery-photo-icon"
                loading="lazy"
                alt=""
                src="/rectangle-39@2x.png"
              />
              <img
                className="mask-group-icon9"
                alt=""
                src="/mask-group-2@2x.png"
              />
            </div>
            <div className="mask-group-group">
              <img
                className="mask-group-icon10"
                alt=""
                src="/mask-group-3@2x.png"
              />
              <div className="mask-group-container">
                <img
                  className="mask-group-icon11"
                  alt=""
                  src="/mask-group-4@2x.png"
                />
                <div className="mask-group-parent1">
                  <img
                    className="mask-group-icon12"
                    alt=""
                    src="/mask-group-5@2x.png"
                  />
                  <img
                    className="mask-group-icon13"
                    alt=""
                    src="/mask-group-6@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
