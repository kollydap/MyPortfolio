import React from "react";
import "../styles/Header.css";
import kola from "../assets/kola.jpeg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
// import GitHubIcon from '@mui/icons-material/GitHub';
function Header() {
  return (
    <div className="header">
      <div className="header__text-box">
        <div className="social-img">
          <div className="socials">
            <LinkedInIcon
              onClick={(event) =>
                (window.location.href =
                  "https://www.linkedin.com/in/oladapo-kolawole-osagie-864315185/")
              }
            />
            <FacebookIcon
              onClick={(event) =>
                (window.location.href =
                  "https://web.facebook.com/profile.php?id=100074142968612")
              }
            />
            <GitHubIcon 
              onClick={(event) =>
                (window.location.href = "https://github.com/kollydap")
              }
            />
            <TwitterIcon
              onClick={(event) =>
                (window.location.href = "https://twitter.com/kollydapp")
              }
            />
          </div>
          <img src={kola} alt=" kollydap" />
        </div>
        <div className="heading-primary">
          <strong>Oladapo Kolawole Osagie</strong>
          <h3 className="active">Software Developer</h3>
          <p className="aboutt">
            Hello! I am Osagie. A Software developer with experience in
            developing robust and result driven applications with expertise
            in web development and design, destop applications. I develop applications using
            python Django, ReactJs, Csharp, WPF. I work comfortably with database and other web technologies. I basically
            choose the best tools for the project at hand. I can work with
            distributed team ,i work comfortably in an Agile-driven
            environment and remotely. I have great communication skills which has helped me
            relate with clients directly and converting their project vision to
            robust and efficient applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
