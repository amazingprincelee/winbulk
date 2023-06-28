import React from "react";
import bbPhoto from "../images/user.png";

function Team() {
  return (
    <div className="container team">
      <h3>PROLIFIC TEAM</h3>
      <div className="text-center">
        <div className="team-desc container">
          <p>
            WinBulk's dedication to continuous development and enhancement is a
            fundamental asset, with the team consistently exploring fresh
            opportunities for progress and innovation. The project will gain an
            enthusiastic community of users who will value its distinct
            innovative features.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="lead-member">
            <div className="team-details">
              <img src={bbPhoto} alt="" />
              <div style={{ padding: "20px" }}>
                <h4>BB - FOUNDER/LEAD DEVELOPER</h4>
                <p>
                  The Visioneer of project's and overall concept and also the
                  Lead developer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="lead-member">
            <div className="team-details">
              <img src={bbPhoto} alt="" />
              <div style={{ padding: "20px" }}>
                <h4>LIZ - COO</h4>
                <p>
                  Streamlining and coordinating all operational processes with
                  precision and efficiency. Human relation (HR)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="member3-card">
            <div className="team-details">
              <img src={bbPhoto} alt="" />
              <div style={{ padding: "20px" }}>
                <h4>POSITION IS OPEN - AMBASSADOR</h4>
                <p>
                  An accomplished event organizer, dedicated social media
                  activist, and Winbulk spokesperson.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="member3-card">
            <div className="team-details">
              <img src={bbPhoto} alt="" />
              <div style={{ padding: "20px" }}>
                <h4>POSITION IS OPEN - TECHNICAL ANALYST</h4>
                <p>
                  A proficient technical analyst, adept at analyzing complex
                  data and providing valuable insights.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="member3-card">
            <div className="team-details">
              <img src={bbPhoto} alt="" />
              <div style={{ padding: "20px" }}>
                <h4>POSITION IS OPEN - CONTENT DEVELOPER</h4>
                <p>
                  AI content developer, engaging in creating
                  innovative content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
