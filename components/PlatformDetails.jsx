import "./PlatformDetails.css";

const PlatformDetails = () => {
  return (
    <section className="platform-details">
      <div className="platform-spacer" />
      <img
        className="platform-details-child"
        loading="lazy"
        alt=""
        src="/group-91@2x.png"
      />
      <img className="platform-logo-icon" alt="" src="/platform-logo.svg" />
      <div className="platform-name">
        <h1 className="mentalkucom1">Mentalku.com</h1>
      </div>
      <h3 className="salah-satu-website1">
        Salah satu website pelayanan Kesehatan Mental yang akan membuat pengguna
        menikmati layanan kesehatan mental secara online dan akan mempengaruhi
        pengidap untuk segera konsultasi kepada para ahli agar mengetahui
        diagnosa penyakitnya secara mudah dan tentunya tanpa dipungut biaya
        apapun atau gratis. Website ini juga memberikan edukasi seputar
        kesehatan mental dari pengertian, gejala, jenis, dan cara menangani
        sebelum terlambat, sehingga orang akan lebih teredukasi dan berhati-hati
        sedari awal.
      </h3>
    </section>
  );
};

export default PlatformDetails;
