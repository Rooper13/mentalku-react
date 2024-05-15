import FrameComponent1 from "./FrameComponent1";
import "./DisorderExamples.css";

const DisorderExamples = () => {
  return (
    <section className="disorder-examples">
      <div className="frame-container">
        <FrameComponent1
          iconPlaceholder="/rectangle-166@2x.png"
          gangguanTidur="Gangguan Tidur"
        />
        <FrameComponent1
          iconPlaceholder="/rectangle-167@2x.png"
          gangguanTidur="Bipolar"
          propPadding="0px 20px"
          propDisplay="inline-block"
          propMinWidth="109px"
        />
        <FrameComponent1
          iconPlaceholder="/rectangle-168@2x.png"
          gangguanTidur="Kecemasan Umum"
          propPadding="0px 57px 0px 58px"
          propDisplay="unset"
          propMinWidth="unset"
        />
      </div>
    </section>
  );
};

export default DisorderExamples;
