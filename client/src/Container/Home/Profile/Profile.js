import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://github.com/nowackibartosz/">
                  <i className="fa fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/bartosz-nowacki-8052b0241/">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="https://www.instagram.com/hajjde/">
                  <i className="fa fa-instagram" />
                </a>
                <a href="https://www.youtube.com/user/Hajjde">
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'm <span className="highlighted-text">Bartek</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-text">
        <div className="primary-text">
          <h1>
            <Typewriter
              options={{
                strings: [
                  " I am looking for an employer who will allow me to fully develop my potential and influence the quality of the technologies that surround me. I feel satisfied and fulfilled when I'm able to solve a problem or optimise the process. For me, programming is something beautiful and infinite, in which I see something different every time. The future supervisor is guaranteed my enthusiasm, uninterrupted support and long-term cooperation.",
                ],
                autoStart: true,
                loop: true,
                delay: 30,
                deleteSpeed: 10,
                pauseFor: 100000,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
