import React, { useState } from "react";

// import { unstable_renderSubtreeIntoContainer } from "react-dom";

function Field(props) {
  return (
    <div className="field-container">
      {props.data.map((icons, index) => {
        return (
          <a className="link-style" href={icons.link} key={index}>
            <FieldSmol title={icons.name} image={icons.image} />
          </a>
        );
      })}
    </div>
  );
}

function FieldSmol(props) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="field-box"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {props.title}
      <img className="hover-image" src={props.image} alt=""></img>

      {/* {hover && <img className="hover-image" src={props.image} alt=""></img>} */}
      {/* {!hover && props.title} */}
      {/* <img className="hover-image" src={props.image} alt=""></img> */}
    </div>
  );
}
export default Field;
