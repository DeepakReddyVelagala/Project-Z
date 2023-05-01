import React from 'react';

function TopicCard(props) {
    const { title, description, onClick } = props;
    return (
      <div className="card" onClick={onClick}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }

export default TopicCard;