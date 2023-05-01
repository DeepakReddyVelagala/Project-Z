import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Cat from "./components/Cats/Home";
import Edventures from "./components/Edventures/Home";
import MLhome from "./components/Edventures/ML/Home";
import CPhome from "./components/Edventures/CP/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/cats" element={<Cat />} />
      <Route exact path="/edventures" element={<Edventures />} />
      <Route exact path="/ML" element={<MLhome />} />
      <Route exact path="/CP" element={<CPhome />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.
