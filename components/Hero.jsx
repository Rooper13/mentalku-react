import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image-overlay" />
      <div className="background-shape" />
      <div className="pexels-shvets-production-71760-parent">
        <img
          className="pexels-shvets-production-71760-icon"
          loading="lazy"
          alt=""
          src="/pexelsshvetsproduction7176026-2@2x.png"
        />
        <div className="kesehatan-bukan-hanya-container">
          <p className="kesehatan-bukan-hanya">
            Kesehatan bukan hanya tentang apa yang kamu makan. Ini tentang apa
            yang kamu pikirkan dan rasakan juga.
          </p>
          <p className="konsultasi-sekarang-juga">
            Konsultasi sekarang juga secara gratis!
          </p>
        </div>
      </div>
      <div className="consultation-button-wrapper">
        <button className="consultation-button">
          <div className="consultation-button-child" />
          <div className="konsultasi">Konsultasi</div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
