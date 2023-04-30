import React from "react";
function Mood(props) {
  const emotions = [
    { name: "Happy" },
    { name: "Sad" },
    { name: "Angry" },
    { name: "Cute" },
    { name: "Dumb" }
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
  return <div className="cats-tray">{props.name}</div>;
}
export default Mood;
