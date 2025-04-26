import "./Testimonials.css";
import "./TestimonialCard";
import TestimonialCard from "./TestimonialCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <h2 className="Test-Title">
        Workout Tracker is made to suit the goals of all fitness levels from
        amatuer to pro. Feedback from our users speaks for itself:
      </h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 75 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="Testimonials-Grid-Cont">
          <TestimonialCard
            title="Steve, Northumberland"
            content="“I’ve tried several apps over the years, and always ended up back to basic notebook, but not with the Workout Tracker. Quick, easy, and based on actual experience of people who get it. Rock solid!”"
          />
          <TestimonialCard
            title="John, Manchester"
            content="I’m a fan of the Workout Tracker. It’s the best workout tracker that’s out there on the market."
          />
          <TestimonialCard
            title="Pam, Hexham"
            content="As I was getting ready for my world record attempt, I tried 10 different workout tracking apps! the Workout Tracker was not only the easiest to use, but I used it as my official weight tracking app the day I broke the record."
          />
          <TestimonialCard
            title="Chris, London"
            content="The greatest fitness app. It's clear the makers behind this thing use it every week, because it is so perfect."
          />
          <TestimonialCard
            title="Smithy, London"
            content="I LOVE the Workout Tracker! Very user friendly, so it’s perfect for experienced athletes and beginners. It’s become my favorite way to track my workouts 🙌🏾."
          />
          <TestimonialCard
            title="Jane, Birmingham"
            content="The best of all the workout apps I have tried on iOS. I have used the Workout Tracker for more than a year now. It is intuitive and clean, yet full-featured."
          />
        </div>
      </motion.div>
    </>
  );
}

export default Testimonials;
