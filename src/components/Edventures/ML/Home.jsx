import React, { useState, useEffect } from 'react';
import Header from "../../Header";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import TopicCard from './topic_card';
import TopicPage from './topic_page';
import TopicForm from './new_topic_form';

function MLhome() {
  const [topics, setTopics] = useState([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const storedTopics = JSON.parse(localStorage.getItem('topics') || '[]');
    setTopics(storedTopics);
  }, []);

  useEffect(() => {
    localStorage.setItem('topics', JSON.stringify(topics));
  }, [topics]);

  const handleTopicClick = (topic) => {
    // Navigate to a new page with more info
    console.log(`Clicked on ${topic.title}`);
    window.location.href = `ML/${topic.title}`;
  };

  const handleTopicSave = (newTopic) => {
    setTopics([...topics, newTopic]);
    setShowForm(false);
  };
  
  const handleAddNewClick = () =>{
    setShowForm(true)
  }
  return (
    <div className="mlhome">
      <Header title ="The Machine learning Maze"/>
      
      
      <div className='card-container'>
        {showForm ? (
            <div className='form-container'>
              <TopicForm onSave={handleTopicSave} />
            </div>
          ):(
            <div className='card' onClick={handleAddNewClick}>
                <h2>Add new topic !!!</h2>
                <p> Could not find an important topic! want contribute click here right away!</p>
            </div>
          )}
        {topics.map((topic, index) => (
          <TopicCard key={index} title={topic.title} description={topic.description} onClick={() => handleTopicClick(topic)} />
        ))}
          
        
      </div>
    </div>
  );
}

// function MLhome() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/ML">Home</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route exact path="/ML">
//             <HomePage />
//           </Route>
//           <Route path="/:id">
//             <TopicPage />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

export default MLhome;