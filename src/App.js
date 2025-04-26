import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import Exercises from "./Pages/ExercisesPage";
import Workouts from "./Pages/WorkoutsPage";
import HistoryPage from "./Pages/HistoryPage";
import Profile from "./Pages/ProfilePage";
import LoggedInProfile from "./Pages/LoggedInProfile";

function App() {
  return (
    <Router>
      <div className="App-Container">
        <NavBar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Exercises" element={<Exercises />} />
            <Route path="/Workouts" element={<Workouts />} />
            <Route path="/History" element={<HistoryPage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/LoggedIn" element={<LoggedInProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
