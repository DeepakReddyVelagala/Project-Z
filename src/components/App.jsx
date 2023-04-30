import React from "react";

// import ReactDOM from "react-dom";
import Header from "./Header";
import Field from "./Field";

function App() {
  const icons = [
    {
      name: "Anime",
      link: "https://www.google.com",
      image: "/images/anime.png"
    },
    {
      name: "Cats",
      link: "https://9w061x.csb.app/cats",
      image: "/images/cats.jpg"
    },
    {
      name: "Maniratnam",
      link: "https://www.google.com",
      image: "/images/Mani_Ratnam.png"
    },
    {
      name: "Education",
      link: "https://www.google.com",
      image: "/images/study.png"
    }
  ];

  return (
    <div>
      <Header />
      <Field data={icons} />
    </div>
  );
}

export default App;
