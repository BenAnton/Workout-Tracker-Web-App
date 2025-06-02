import "./HeroSection.css";
import Hero from "../../Assets/Images/Workout.jpg";

function HeroSection() {
  return (
    <div className="Hero-Section-Cont">
      <img className="Hero-Image" src={Hero} alt="Person working out" />
      <div className="Hero-Text-Cont">
        <h2 className="Hero-Title">
          Focus.<br></br>Lift.<br></br> Grow.<br></br>
        </h2>
        <p className="Hero-Para">
          A no-nonsense training partner that always shows up on time!
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
