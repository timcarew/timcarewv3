import { vars } from "../public/vars";
import { work } from "../public/work";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Work from "../components/Work";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroTL = gsap.timeline();
  useEffect(() => {
    heroTL
      .from(
        ".HeroName",
        {
          duration: 2,
          autoAlpha: 0,
          ease: "power1.out",
        },
        0.5
      )
      .from(
        ".HeroSlogan",
        {
          duration: 1.5,
          autoAlpha: 0,
          y: 50,
          ease: "power1.out",
        },
        1.25
      )
      .from(
        ".HeroButtons",
        {
          duration: 0.75,
          autoAlpha: 0,
          ease: "power1.out",
        },
        2.5
      )
      .to(
        ".Headshot, .Header",
        {
          duration: 0.75,
          opacity: 0.5,
          ease: "power1.out",
        },
        2.5
      );
  }, []);
  const handleLearnButtonClick = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#work",
      ease: "power3.out",
    });
  };
  const handleHeadshotEnter = () => {
    let enterTL = gsap.timeline();
    enterTL
      .to(
        ".Header",
        {
          duration: 0.75,
          marginLeft: "0%",
          ease: "power2.in",
        },
        0
      )
      .to(
        ".HeadshotLinks",
        {
          duration: 0.75,
          autoAlpha: 1,
          marginLeft: "0",
          ease: "power2.out",
        },
        0
      );
  };
  const handleHeadshotLeave = () => {
    let leaveTL = gsap.timeline();
    leaveTL
      .to(
        ".Header",
        {
          duration: 0.75,
          marginLeft: "-100%",
          ease: "power2.out",
        },
        0
      )
      .to(
        ".HeadshotLinks",
        {
          duration: 0.75,
          autoAlpha: 0,
          marginLeft: "200%",
          ease: "power2.out",
        },
        0
      );
  };
  return (
    <div className="Container">
      <header className="Header">
        <div className="HeaderLinks">
          <a href="mailto:mail@timcarew.com" className="HeaderLink">
            <img src="/img/email.svg" alt="Email Icon" height="24" />
          </a>
          <a
            className="HeaderLink"
            href="https://www.linkedin.com/in/tvcarew/"
            target="_blank"
          >
            <img src="/img/linkedin.svg" alt="LinkedIn Logo" height="24" />
          </a>
          <a
            className="HeaderLink"
            href="https://github.com/timcarew"
            target="_blank"
          >
            <img src="/img/github.svg" alt="Github Logo" height="24" />
          </a>
        </div>
      </header>
      <main className="Main">
        <div className="Hero">
          <h1 className="HeroName">Tim Carew</h1>
          <p className="HeroSlogan">
            There's never been a better time to be a website.
          </p>
          <div className="HeroButtons">
            <a onClick={handleLearnButtonClick} className="HeroButton">
              <h6>Learn why</h6>
            </a>
            <div className="HeroButtonEmail">
              <a className="HeroEmail" href="mailto:mail@timcarew.com">
                <h6>mail@timcarew.com</h6>
              </a>
            </div>
          </div>
          <div
            className="HeadshotWrapper"
            onMouseEnter={handleHeadshotEnter}
            onMouseLeave={handleHeadshotLeave}
          >
            <img
              className="Headshot"
              src="/img/me.png"
              alt="Photo of me, Tim Carew. I'm bald and have a big beard."
            />
            <div className="HeadshotLinks">
              <a href="mailto:mail@timcarew.com" className="HeaderLink">
                <img src="/img/email.svg" alt="Email Icon" height="24" />
              </a>
              <a
                className="HeaderLink"
                href="https://www.linkedin.com/in/tvcarew/"
                target="_blank"
              >
                <img src="/img/linkedin.svg" alt="LinkedIn Logo" height="24" />
              </a>
              <a
                className="HeaderLink"
                href="https://github.com/timcarew"
                target="_blank"
              >
                <img src="/img/github.svg" alt="Github Logo" height="24" />
              </a>
            </div>
          </div>
        </div>
        <div className="Work" id="work">
          <h2 className="WorkSlogan">It speaks for itself.</h2>
          {work.map((item, index) => {
            return (
              <Work
                item={item}
                index={index}
                key={`Work${index}`}
                left={index % 2 == 0}
              />
            );
          })}
        </div>
      </main>
      <footer className="Footer"></footer>
      <style jsx>{`
        .Container {
          min-height: 100vh;
          width: 100vw;
          color: ${vars.colors.black};
          background-color: ${vars.colors.white};
        }
        .Header {
          width: 200%;
          color: ${vars.colors.black};
          background-color: ${vars.colors.grey};
          margin-left: -100%;
          opacity: 0;
        }
        .HeaderLinks {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .HeaderLink {
          opacity: 0.75;
          height: 24px;
          width: auto;
          margin: calc(${vars.spacing.paddingy} / 4)
            calc(${vars.spacing.paddingx} / 6);
          transition: all 0.3s ease;
        }
        .HeaderLink:hover {
          cursor: pointer;
          opacity: 1;
        }
        .Hero {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
          width: 100%;
        }
        .HeroName {
          font-weight: 600;
          visibility: hidden;
        }
        .HeroSlogan {
          padding: calc(${vars.spacing.paddingy} / 2) 0;
          font-weight: 300;
          text-align: center;
          visibility: hidden;
        }
        .HeroButtons {
          padding-top: 10px;
          display: flex;
          visibility: hidden;
        }
        .HeroButton {
          color: ${vars.colors.blue};
          font-family: inherit;
          font-weight: 400 !important;
          padding: calc(${vars.spacing.paddingy} / 3)
            calc(${vars.spacing.paddingx} / 2);
          margin-right: calc(${vars.spacing.paddingx} / 2);
          border: 1px solid ${vars.colors.blue};
          border-radius: 99em;
          background: transparent;
          box-shadow: 2px 2px 15px rgba(0, 101, 204, 0);
          cursor: pointer;
          transition: all 0.5s ease;
        }
        .HeroButton:hover {
          transform: scale(0.99);
          box-shadow: 5px 5px 15px rgba(0, 101, 204, 0.2);
        }
        .HeroButtonEmail {
          display: flex;
          align-items: center;
          position: relative;
          color: ${vars.colors.blue};
          font-family: inherit;
          font-weight: 400 !important;
          padding: calc(${vars.spacing.paddingy} / 3)
            calc(${vars.spacing.paddingx} / 4);
          border: none;
          cursor: pointer;
          transition: all 0.5s ease;
        }
        .HeroButtonEmail:before {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          background: ${vars.colors.blue};
          left: 0;
          bottom: 0;
          transition: width 0.3s ease-out;
        }
        .HeroButtonEmail:hover:before {
          width: 100%;
        }
        .HeroButton:hover {
          color: ${vars.colors.white};
          background-color: ${vars.colors.blue};
        }
        .HeadshotWrapper {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          top: ${vars.spacing.paddingy};
          right: 0;
          height: 20vw;
          width: 15%;
        }
        .Headshot {
          height: auto;
          width: 100%;
          min-width: 75px;
          opacity: 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .HeadshotWrapper:hover > .Headshot {
          opacity: 1 !important;
        }
        .HeadshotLinks {
          visibility: hidden;
          opacity: 0.75;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          width: 100%;
          margin-left: 200%;
        }
        .HeadshotLinks:hover {
          opacity: 1;
        }
        .Work {
          display: flex;
          flex-direction: column;
          padding: 0 10%;
          padding-top: ${vars.spacing.paddingy};
          min-height: 50vh;
          margin: 0 auto;
          width: 100vw;
          background-color: ${vars.colors.grey2};
        }
        .WorkSlogan {
          text-align: center;
          font-weight: 500;
        }
        @media (orientation: portrait) {
          .Hero {
            width: 90%;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
