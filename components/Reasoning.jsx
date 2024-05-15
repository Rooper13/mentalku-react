import "./Reasoning.css";

const Reasoning = () => {
  return (
    <section className="reasoning">
      <div className="flexibility-parent">
        <div className="flexibility">
          <div className="gallery-content">
            <div className="flexibility-header">
              <b className="mengapa1">Mengapa?</b>
            </div>
            <h1 className="mengapa-konsultasi-kesehatan1">
              Mengapa Konsultasi Kesehatan Mental Kami adalah Pilihan Terbaik
            </h1>
          </div>
        </div>
        <div className="feature-list-parent">
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-item-child" />
              <div className="psychologist-icon1">
                <img
                  className="psychologist-icon2"
                  loading="lazy"
                  alt=""
                  src="/007psychologist.svg"
                />
              </div>
              <div className="free-consult-description">
                <div className="feature-item1">
                  <h3 className="fleksibel1">Fleksibel</h3>
                </div>
                <div className="pasien-dapat-melakukan2">
                  Pasien dapat melakukan konsultasi di manapun dan kapanpun
                  tanpa perlu datang ke klinik atau rumah sakit. Selain itu,
                  layanan ini juga buka 24 jam. Jadi, di tengah kesibukan pun,
                  pasien bisa tetap konsultasi dengan dokter terkait keluhan
                  penyakitnya.
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-container">
            <div className="frame-inner" />
            <div className="free-consult-content">
              <img
                className="group-icon1"
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </div>
            <div className="frame-group">
              <div className="gratis-wrapper">
                <h2 className="gratis">Gratis</h2>
              </div>
              <div className="pasien-dapat-melakukan3">
                pasien dapat melakukan sesi tanya jawab dengan dokter
                profesional kapanpun dan di manapun secara gratis. Tentu hal ini
                sangat bermanfaat, terutama bagi masyarakat menengah ke bawah.
              </div>
            </div>
          </div>
          <div className="feature-list1">
            <div className="frame-div">
              <div className="rectangle-div" />
              <div className="pendulum-wrapper">
                <img
                  className="pendulum-icon1"
                  loading="lazy"
                  alt=""
                  src="/014pendulum.svg"
                />
              </div>
              <div className="information-block">
                <div className="fitur-lengkap-wrapper">
                  <h3 className="fitur-lengkap1">Fitur Lengkap</h3>
                </div>
                <div className="tidak-hanya-konsultasi1">
                  Tidak hanya konsultasi, disini juga ada edukasi seputar
                  kesehatan mental, dan peresepan obat (bila perlu)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasoning;
