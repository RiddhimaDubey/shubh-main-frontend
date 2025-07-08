import React from "react";
import "../styles/PlacedStudents.css";
import studentImg from "../assets/img.png";
import arrowImg from "../assets/arrow1.png";

const students = [
  {
    name: "Priya Tiwari",
    package: "18 LPA",
    desc:
      "I went from Level 0 to Level 30 in under two months—and landed a summer internship at a top startup! The live classes and quests kept me motivated every day.",
  },
  {
    name: "Priya Tiwari",
    package: "18 LPA",
    desc:
      "I went from Level 0 to Level 30 in under two months—and landed a summer internship at a top startup! The live classes and quests kept me motivated every day.",
  },
  {
    name: "Priya Tiwari",
    package: "18 LPA",
    desc:
      "I went from Level 0 to Level 30 in under two months—and landed a summer internship at a top startup! The live classes and quests kept me motivated every day.",
  }
];

const PlacedStudents = () => {
  return (
    <section className="placed-students-section">
      <h2 className="placed-title">Placed Students</h2>
      <div className="placed-bg-ball1"></div>
      <div className="placed-bg-ball2"></div>
      <div className="placed-carousel">
        <button className="placed-arrow left placed-arrow-left">
          {/* Removed left arrow image */}
        </button>
        <div className="placed-cards">
          {students.map((student, idx) => (
            <div className="placed-card-wrapper" key={idx}>
              <img src={studentImg} alt="Placed Student" className="placed-img placed-img-outside" />
              <div className="placed-card">
                <div className="placed-info">
                  <div className="placed-header">
                    <span className="placed-name">{student.name}</span>
                    <span className="placed-package">{student.package}</span>
                  </div>
                  <p className="placed-desc">{student.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="placed-arrow right placed-arrow-right">
          {/* Removed right arrow image */}
        </button>
      </div>
      <div className="placed-dots">
        {students.map((_, idx) => (
          <span key={idx} className={`dot${idx === 1 ? " active" : ""}`}></span>
        ))}
      </div>
    </section>
  );
};

export default PlacedStudents; 