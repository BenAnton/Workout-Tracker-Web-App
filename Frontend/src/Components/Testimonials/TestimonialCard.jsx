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

                    <div className="Test-Card-Star-Cont">

                        {[...Array(feedback.stars)].map((_, i) => (
                            <span className="Test-Card-Stars" key={i}>︎⭑</span>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default TestimonialCard;
