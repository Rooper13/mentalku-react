import Navbar from "../components/Navbar";
import ContactContainer from "../components/ContactContainer";
import PlatformDetails from "../components/PlatformDetails";
import LandingPage from "../components/LandingPage";
import "./Home1.css";

const Home = () => {
  return (
    <div className="home-2">
      <section className="shape" />
      <header className="mental-health-icons" />
      <img
        className="healthiconsv"
        loading="lazy"
        alt=""
        src="/healthiconsv.svg"
      />
      <Navbar />
      <h2 className="gangguan-tidur">Gangguan Tidur</h2>
      <h2 className="bipolar">Bipolar</h2>
      <h2 className="kecemasan-umum">Kecemasan Umum</h2>
      <div className="navigation-spacer" />
      <b className="keluar">Keluar</b>
      <img className="healthiconsv1" alt="" src="/healthiconsv.svg" />
      <textarea className="mental-health-icons1" rows={19} cols={20} />
      <div className="mental-health-icons2">
        <img
          className="pendulum-icon"
          loading="lazy"
          alt=""
          src="/014pendulum1.svg"
        />
        <div className="features">
          <h3 className="fitur-lengkap">Fitur Lengkap</h3>
          <div className="tidak-hanya-konsultasi">
            Tidak hanya konsultasi, disini juga ada edukasi seputar kesehatan
            mental, dan peresepan obat (bila perlu)
          </div>
        </div>
      </div>
      <textarea className="mental-health-icons3" rows={19} cols={20} />
      <div className="navigation-spacer1" />
      <div className="free-session">
        <img className="group-icon" loading="lazy" alt="" src="/group1.svg" />
        <div className="free-parent">
          <h2 className="free">FREE</h2>
          <div className="pasien-dapat-melakukan">
            pasien dapat melakukan sesi tanya jawab dengan dokter profesional
            kapanpun dan di manapun secara gratis. Tentu hal ini sangat
            bermanfaat, terutama bagi masyarakat menengah ke bawah.
          </div>
        </div>
      </div>
      <section className="why-us">
        <b className="mengapa">Mengapa?</b>
        <h1 className="mengapa-konsultasi-kesehatan">
          Mengapa Konsultasi Kesehatan Mental Kami adalah Pilihan Terbaik
        </h1>
      </section>
      <section className="kami-membantu-orang1">
        Kami membantu orang - orang yang hidup dengan berbagai kondisi kesehatan
        mental.
      </section>
      <footer className="mental-health-icons4" />
      <ContactContainer />
      <div className="mental-health-icons5">
        <img
          className="psychologist-icon"
          loading="lazy"
          alt=""
          src="/007psychologist1.svg"
        />
        <div className="fleksibel-parent">
          <h3 className="fleksibel">Fleksibel</h3>
          <div className="pasien-dapat-melakukan1">
            Pasien dapat melakukan konsultasi di manapun dan kapanpun tanpa
            perlu datang ke klinik atau rumah sakit. Selain itu, layanan ini
            juga buka 24 jam. Jadi, di tengah kesibukan pun, pasien bisa tetap
            konsultasi dengan dokter terkait keluhan penyakitnya.
          </div>
        </div>
      </div>
      <img
        className="placeholder-icon"
        loading="lazy"
        alt=""
        src="/rectangle-1661@2x.png"
      />
      <img
        className="placeholder-icon1"
        loading="lazy"
        alt=""
        src="/rectangle-170@2x.png"
      />
      <img className="home-2-child" alt="" src="/rectangle-168@2x.png" />
      <PlatformDetails />
      <div className="quote-spacer" />
      <section className="rectangle-group">
        <div className="frame-item" />
        <h1 className="perawatan-diri-bukanlah1">
          Perawatan diri bukanlah sebuah kemewahan. Itu sudah keharusan.
          Tanpanya, kita tidak bisa menjadi diri kita yang terbaik, secara
          mental, emosional, atau fisik.
        </h1>
        <img className="icon2" alt="" src="/-11.svg" />
        <img className="icon3" loading="lazy" alt="" src="/1.svg" />
      </section>
      <section className="mental-health-icons6" />
      <img className="divider-icon" alt="" src="/divider.svg" />
      <section className="knowledge-spacer" />
      <h2 className="koleksi-pengetahuan">KOLEKSI PENGETAHUAN</h2>
      <h2 className="pelajari-dan-pahami">{`Pelajari dan Pahami `}</h2>
      <h2 className="kesehatan-mental">Kesehatan Mental</h2>
      <div className="jelajahi-koleksi-pengetahuan">
        Jelajahi koleksi pengetahuan dan temukan jawaban dari semua pertanyanmu
        mengenai kesehatan mental
      </div>
      <div className="kunjungi-koleksi-pengetahuan">{`Kunjungi Koleksi Pengetahuan >`}</div>
      <div className="galeri-parent">
        <b className="galeri">Galeri</b>
        <h1 className="kesehatan-mental-diseluruh">
          Kesehatan Mental diseluruh dunia
        </h1>
      </div>
      <img className="image-9-icon" alt="" src="/image-9-11@2x.png" />
      <img
        className="mask-group-icon"
        loading="lazy"
        alt=""
        src="/mask-group1@2x.png"
      />
      <img className="mask-group-icon1" alt="" src="/mask-group-11@2x.png" />
      <img className="mask-group-icon2" alt="" src="/mask-group-21@2x.png" />
      <img className="mask-group-icon3" alt="" src="/mask-group-31@2x.png" />
      <img className="mask-group-icon4" alt="" src="/mask-group-41@2x.png" />
      <img className="mask-group-icon5" alt="" src="/mask-group-51@2x.png" />
      <img className="mask-group-icon6" alt="" src="/mask-group-61@2x.png" />
      <img
        className="gallery-image-icon"
        loading="lazy"
        alt=""
        src="/rectangle-391@2x.png"
      />
      <LandingPage />
    </div>
  );
};

export default Home;
