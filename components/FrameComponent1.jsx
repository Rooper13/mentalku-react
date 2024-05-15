import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  iconPlaceholder,
  gangguanTidur,
  propPadding,
  propDisplay,
  propMinWidth,
}) => {
  const disorderItemStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const gangguanTidurStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="icon-placeholder-parent">
      <img
        className="icon-placeholder"
        loading="lazy"
        alt=""
        src={iconPlaceholder}
      />
      <div className="disorder-item" style={disorderItemStyle}>
        <h2 className="gangguan-tidur1" style={gangguanTidurStyle}>
          {gangguanTidur}
        </h2>
      </div>
    </div>
  );
};

export default FrameComponent1;
