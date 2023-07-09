import React from "react";
import teamMember from "../images/team-member.png";


function Team() {
  return (
    <div className="container team">
      <h3>PROLIFIC TEAM</h3>
      <div className="text-center">
        <div className="team-desc container">
          <p>
            WinBulk's dedication to continuous development and enhancement is a
            fundamental asset, with the team consistently exploring fresh
            opportunities for progress and innovation.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="lead-member">
            <div className="team-details">
              <img src={teamMember} alt="" />
              <div style={{ padding: "20px" }}>
                <h4>BB - FOUNDER/LEAD DEVELOPER</h4>
                <p>The Visioneer of the project and overall concept, as well as the Lead developer.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="lead-member">
            <div className="team-details">
              <img src={teamMember} alt="" />
              <div style={{ padding: "20px" }}>
                <h4>LIZ - COO</h4>
                <p>Streamlining and coordinating all operational processes with precision and efficiency. Human Relations (HR).</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="member3-card">
            <div className="team-details">
              <img src={teamMember} alt="" />
              <div style={{ padding: "20px" }}>
                <h4>OPEN - AMBASSADOR</h4>
                <p>Winbulk spokesperson.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="member3-card">
            <div className="team-details">
              <img src={teamMember} alt="" />
              <div style={{ padding: "20px" }}>
                <h4>CollinsChyke - TECH MAN</h4>
                <p>Master Of AI/BOT</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="member3-card">
            <div className="team-details">
              <img src={teamMember} alt="" />
              <div style={{ padding: "20px" }}>
                <h4>Phoenyx - CONTENT DEVELOPER</h4>
                <p>content & activity manager.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
