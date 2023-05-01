import React from "react";
function Mood(props) {
  const emotions = [
    { name: "Happy" },
    { name: "Sad" },
    { name: "Angry" },
    { name: "Cute" },
    { name: "Dumb" },
    { name: "Lazy"}
  ];
  return (
    <div className="Cat-Mood">
      {emotions.map((emote, index) => {
        return <Tray name={emote.name} />;
      })}
    </div>
  );
}

function Tray(props) {
  return <div className="Cats-Tray">{props.name}</div>;
}
export default Mood;
