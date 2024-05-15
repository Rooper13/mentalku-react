import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="partner-info-parent">
      <div className="partner-info">
        <div className="partner-logo">
          <img
            className="partner-logo-child"
            loading="lazy"
            alt=""
            src="/group-9@2x.png"
          />
          <img className="partner-icon" alt="" src="/partner-icon.svg" />
        </div>
        <div className="partner-details">
          <h1 className="mentalkucom">Mentalku.com</h1>
          <div className="partner-description">
            <div className="partner-description-child" />
            <h3 className="salah-satu-website">
              Salah satu website pelayanan Kesehatan Mental yang akan membuat
              pengguna menikmati layanan kesehatan mental secara online dan akan
              mempengaruhi pengidap untuk segera konsultasi kepada para ahli
              agar mengetahui diagnosa penyakitnya secara mudah dan tentunya
              tanpa dipungut biaya apapun atau gratis. Website ini juga
              memberikan edukasi seputar kesehatan mental dari pengertian,
              gejala, jenis, dan cara menangani sebelum terlambat, sehingga
              orang akan lebih teredukasi dan berhati-hati sedari awal.
            </h3>
          </div>
        </div>
      </div>
      <div className="additional-image">
        <div className="additional-image-child" />
        <img className="image-9-icon2" alt="" src="/image-9-1@2x.png" />
      </div>
    </section>
  );
};

export default FrameComponent;
