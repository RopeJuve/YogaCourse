import "./Courses.css";
import CourseCard from "./CorseCard";
import course1 from "../../assets/Rectangle 4539.png";
import course2 from "../../assets/Rectangle 4540.png";
import course3 from "../../assets/Rectangle 4541.png";

const Courses = () => {
  return (
    <div className="courses-container" id="Classes">
      <div className="courses-wrapper">
        <div className="content-head">
          <h1>Popular Courses</h1>
          <p>
            Practice anywhere, anytime. Explore a new way to exercise and learn
            more about yourself. We are providing the best.
          </p>
        </div>
        <div className="card-wrapper">
          <CourseCard
            imgUrl={course1}
            title="Resortive Yoga Training & Immersion"
            text="Here is some tips for new job seekers who want to get a dream job and want to shine in his career."
          />
          <CourseCard
            imgUrl={course2}
            title="Resortive Yoga Training & Immersion"
            text="Here is some tips for new job seekers who want to get a dream job and want to shine in his career."
          />
          <CourseCard
            imgUrl={course3}
            title="Resortive Yoga Training & Immersion"
            text="Here is some tips for new job seekers who want to get a dream job and want to shine in his career."
          />
        </div>
        <button>Browse All</button>
      </div>
    </div>
  );
};

export default Courses;
