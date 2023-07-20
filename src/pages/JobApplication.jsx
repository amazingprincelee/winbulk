import React from "react";


function JobApplication() {
  return (
    <div className="job-app text-white">
      <h1>Welcome to WinBulk Job Application</h1>
      <p>
        We appreciate your interest in joining our team at WinBulk! To proceed
        with the application process, kindly take a few moments to fill out the
        following form accurately. Your responses will help us better understand
        your qualifications and suitability for the available positions.
      </p>

      <a
        href="https://forms.gle/3khDeRmikjfHcCws9"
        target="_blank"
        rel="noopener noreferrer"
        className="application-btn"
      >
        Application Form
      </a>
    </div>
  );
}

export default JobApplication;
