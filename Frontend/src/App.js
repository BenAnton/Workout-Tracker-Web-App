import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import Exercises from "./Pages/ExercisesPage";
import Workouts from "./Pages/WorkoutsPage";
import HistoryPage from "./Pages/HistoryPage";
import Profile from "./Pages/ProfilePage";
import Dashboard from "./Pages/Dashboard";
import WorkoutPage from "./Pages/WorkoutPage";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes";
import {CreatedWorkoutProvider} from "./Components/Context/CreatedWorkoutContext";
import {CompletedWorkoutProvider} from "./Components/Context/CompletedWorkoutContext";
import {ThemeProvider} from "./Components/Context/ThemeContext";

function App() {
    return (
        <Router>
            <ThemeProvider>
                <CreatedWorkoutProvider>
                    <CompletedWorkoutProvider>
                        <div className="App-Container">
                            <NavBar/>
                            <div className="content-wrapper">

                                <Routes>
                                    <Route path="/" element={<HomePage/>}/>

                                    <Route path="/Exercises" element={<Exercises/>}/>
                                    <Route path="/Workouts" element={<Workouts/>}/>
                                    <Route path="/History" element={<HistoryPage/>}/>
                                    <Route path="/Profile" element={<Profile/>}/>

                                    <Route

                                        path="/Dashboard"
                                        element={
                                            <ProtectedRoute>
                                                <Dashboard/>
                                            </ProtectedRoute>
                                        }
                                    />

                                    <Route path="/Workout" element={<WorkoutPage/>}/>
                                </Routes>

                            </div>
                            <Footer/>
                        </div>
                    </CompletedWorkoutProvider>
                </CreatedWorkoutProvider>
            </ThemeProvider>
        </Router>
    );
}

export default App;
