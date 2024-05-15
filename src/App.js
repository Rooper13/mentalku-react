import Header from "../components/Header";
import Hero from "../components/Hero";
import Reasoning from "../components/Reasoning";
import DisorderExamples from "../components/DisorderExamples";
import FrameComponent from "../components/FrameComponent";
import Knowledge from "../components/Knowledge";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "../components/Home.css";

const Home = () => {
  return (
    <div className="home-1">
      <Header />
      <Hero />
      <Reasoning />
      <section className="helping">
        <h1 className="kami-membantu-orang">
          Kami membantu orang - orang yang hidup dengan berbagai kondisi
          kesehatan mental.
        </h1>
      </section>
      <DisorderExamples />
      <FrameComponent />
      <img className="home-1-child" alt="" src="/vector-3.svg" />
      <Knowledge />
      <section className="quote">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="perawatan-diri-bukanlah-sebuah-parent">
            <h1 className="perawatan-diri-bukanlah">
              Perawatan diri bukanlah sebuah kemewahan. Itu sudah keharusan.
              Tanpanya, kita tidak bisa menjadi diri kita yang terbaik, secara
              mental, emosional, atau fisik.
            </h1>
            <img className="icon" loading="lazy" alt="" src="/.svg" />
          </div>
          <img className="icon1" alt="" src="/-1.svg" />
        </div>
      </section>
      <Gallery />
      <h1 className="mind-keeper">
        <p className="mind">“Mind</p>
        <p className="keeper"> Keeper”</p>
      </h1>
      <Footer />
    </div>
  );
};

export default Home;
