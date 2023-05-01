import React, { useState } from "react";
import Header from "../Header";
import Field from "../Field";

function Edventures() {
    const icons = [
        {
          name: "Machine Learning",
          link: "/ML",
          image: "/images/study.png"
        },
        {
          name: "Competitive Programming",
          link: "/CP",
          image: "/images/study.png"
        }
      ];

  return (
    <div>
        <Header title = "The Awesome Edventures" />
        <Field data={icons} />
    </div>
  );
}

export default Edventures;
