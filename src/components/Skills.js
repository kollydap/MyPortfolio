import "../styles/Skill.css";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
function Skills() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="skill">
      <div>
        <div
          className="skillCard"
          // data-aos="fade-down"
          // data-aos-duration="1500"
        >
          <div className="skillCard-top">
            <h3 data-aos="zoom-in" data-aos-delay="130">
              {" "}
              01
            </h3>
            <h5 data-aos="zoom-in" data-aos-delay="300">
              {" "}
              Web Developer
            </h5>
          </div>
          <p data-aos="fade-up" data-aos-duration="500">
            I am a positive enthusiastic and competent web developer who, over
            the years, has built up a diverse range of skills, qualities and
            attributes that guarantee i will perform highly in this role.
          </p>
        </div>

        <div className="skillCard">
          <div className="skillCard-top">
            <h3 data-aos="zoom-in" data-aos-delay="130">
              {" "}
              02
            </h3>
            <h5 data-aos="zoom-in" data-aos-delay="300">
              {" "}
              Database Administrator
            </h5>
          </div>
          <p data-aos="fade-up" data-aos-duration="500">
            establish the needs of users and monitor user access and security,
            monitor performance and manage parameters in order to provide fast
            responses to front-end users, map out the conceptual design for a
            planned database, carry out capacity planning and lots more
          </p>
        </div>
      </div>
      <div>
        <div className="skillCard">
          <div className="skillCard-top">
            <h3 data-aos="zoom-in" data-aos-delay="130">
              {" "}
              03
            </h3>
            <h5 data-aos="zoom-in" data-aos-delay="300">
              Software Developer
            </h5>
          </div>
          <p data-aos="fade-up" data-aos-duration="500">
            Experienced software developer with over a year experience as a
            freelance software engineer, i've contributed to over a dozen
            projects and assisted with managing one project for one of the
            firm's long time client.
          </p>
        </div>
        <div className="skillCard">
          <div className="skillCard-top">
            <h3 data-aos="zoom-in" data-aos-delay="130">
              {" "}
              04
            </h3>
            <h5 data-aos="zoom-in" data-aos-delay="300">
              {" "}
              Backend Developer
            </h5>
          </div>
          <p data-aos="fade-up" data-aos-duration="500">
            experienced with sever side web application logic and integration of
            the work frontend, writes competent services and APIs used by front
            end web developers and mobile applications. vast in backend
            technologies like ASP.Net and Django Rest Framework
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
