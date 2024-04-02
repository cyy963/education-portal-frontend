import React from "react";
import './LearningObjectives.css'; 

export default function LearningObjectives() {
  return (
<div className="container">

<div className="overlay-box">

  {/* Sticky header wrapper */}
  <div className="sticky-header">
    <h2>Explore Scratch blocks</h2>
    <p>Learn the basic function of some basic scratch blocks such as "say," "wait," "go to" and "hide."</p>
  </div>

      <div className="row">
        <div className="column">
          <h3>Look Blocks</h3>
        </div>
        <div className="column">
          <h3>Control Blocks</h3>
        </div>
        <div className="column">
          <h3>Motion Blocks</h3>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <img src='/images/projects/Project01-obj1.png' alt="Look Blocks" />
        </div>
        <div className="column">
          <img src='/images/projects/Project01-obj2.png' alt="Look Blocks" />
        </div>
        <div className="column">
          <img src="/images/projects/Project01-obj3.png" alt="Control Blocks"/>
        </div>
        <div className="column">
          <img src='/images/projects/Project01-obj4.png' alt="Control Blocks" />
        </div>
        <div className="column">
          <img src="/images/projects/Project01-obj5.png" alt="Motion Blocks"/>
        </div>
        <div className="column">
          <img src='/images/projects/Project01-obj6.png' alt="Motion Blocks" />
        </div>
      </div>
    </div>
    </div>
  );
}
