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
      link: "./cats",
      image: "/images/cats.jpg"
    },
    {
      name: "Maniratnam",
      link: "https://www.google.com",
      image: "/images/Mani_Ratnam.png"
    },
    {
      name: "Edventures",
      link: "./edventures",
      image: "/images/study.png"
    }
  ];

  return (
    <div>
      <Header title="Jack Field" />
      <Field data={icons} />
    </div>
  );
}

export default App;
