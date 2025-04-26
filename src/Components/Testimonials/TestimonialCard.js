import "./TestimonialsCard.css";

function TestimonialCard(props) {
  return (
    <div className="Test-Card-Flex">
      <h3 className="Test-Card-Heading">{props.title}</h3>
      <p className="Test-Card-Content">{props.content}</p>
      <p className="Test-Card-Stars">⭐️⭐️⭐️⭐️⭐️</p>
    </div>
  );
}

export default TestimonialCard;
