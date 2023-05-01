import React from "react";

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

  return (
    <div className="Ovelapping-Class">
      <div className="field-box"> {props.title} </div>
      <img className="hover-image" src={props.image} alt=""></img>
    </div>
  );
}
export default Field;
