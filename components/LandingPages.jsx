import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <img
        className="pexels-shvets-production-71760-icon1"
        loading="lazy"
        alt=""
        src="/pexelsshvetsproduction7176026-1@2x.png"
      />
      <div className="shape1" />
      <h1 className="mind-keeper1">
        <p className="mind1">“Mind</p>
        <p className="keeper1"> Keeper”</p>
      </h1>
      <div className="kesehatan-bukan-hanya-container1">
        <p className="kesehatan-bukan-hanya1">
          Kesehatan bukan hanya tentang apa yang kamu makan. Ini tentang apa
          yang kamu pikirkan dan rasakan juga.
        </p>
        <p className="konsultasi-sekarang-juga1">
          Konsultasi sekarang juga secara gratis!
        </p>
      </div>
      <div className="landing-spacer" />
      <div className="konsultasi1">Konsultasi</div>
    </section>
  );
};

export default LandingPage;
