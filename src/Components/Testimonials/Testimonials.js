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
          <TestimonialCard />
        </div>
      </motion.div>
    </>
  );
}

export default Testimonials;
