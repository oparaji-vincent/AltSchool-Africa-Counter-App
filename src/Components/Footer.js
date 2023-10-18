import React from "react";
import "../Styles/Footer.css";
import { FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer_container">
        <section className="social-media">
          <div className="social-media-wrap">
            <p>
              Designed by:{" "}
              <span className="footer-span">
                {" "}
                <a
                  style={{ color: "white" }}
                  href="https://www.linkedin.com/in/vincent-oparaji-6b7978239/"
                  rel="noreferrer"
                >
                  {" "}
                  Vincent Oparaji{" "}
                </a>
              </span>{" "}
              ⓒ {year}
            </p>{" "}
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/vincent-oparaji-6b7978239/"
                rel="noreferrer"
                target="_blank"
                className="social-icons-link linkedin"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="social-icons-link website"
                rel="noreferrer"
                href="https://twitter.com/VincentOparaji"
                target="_blank"
              >
                <FiTwitter />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;