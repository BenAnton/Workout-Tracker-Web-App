import "./TestimonialsCard.css";
import userFeedbacks from "../../Data/Feedback";

function TestimonialCard() {
  return (
    <>
      {userFeedbacks.map((feedback) => (
        <div className="Test-Card-Flex" key={feedback.id}>
          <h3 className="Test-Card-Heading">{feedback.name},</h3>
          <h3 className="Test-Card-Heading">{feedback.location}</h3>
          <p className="Test-Card-Content">{feedback.feedback}</p>
          <p className="Test-Card-Stars">{"⭐️".repeat(feedback.stars)}</p>
        </div>
      ))}
    </>
  );
}

export default TestimonialCard;
