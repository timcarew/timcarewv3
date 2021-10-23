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
    const portrait = window.innerHeight > window.innerWidth;
    const pillars = gsap.utils.toArray(".Pillar");
    pillars.forEach((pillar, index) => {
      heroTL.from(pillar, {
        duration: 1,
        x: portrait ? "0" : 75 * index + 1,
        autoAlpha: portrait ? 0.5 : 0.25,
        scrollTrigger: {
          trigger: "#pillars",
          start: "top 10%",
          end: "bottom -20%",
          pin: !portrait,
          pinSpacing: !portrait,
          toggleActions: "restart none none none",
          scrub: true,
        },
        ease: "power3.out",
      });
    });
    const workItems = gsap.utils.toArray(".WorkItem");
    workItems.forEach((workItem, index) => {
      heroTL
        .from(workItem, {
          duration: 10,
          x: index % 2 == 0 ? -200 : 200,
          autoAlpha: 0,
          scrollTrigger: {
            trigger: `#WorkItem${index}`,
            start: "top 50%",
            end: "top 100%",
            pin: true,
            toggleActions: "restart none none none",
            scrub: 4,
          },
          ease: "power1.out",
        })
        .from(`#WorkDetails${index}`, {
          duration: 2,
          y: 100,
          scrollTrigger: {
            trigger: `#WorkItem${index}`,
            start: "top 60%",
            end: "bottom 60%",
            toggleActions: "restart none none none",
            scrub: 3,
          },
        });
    });
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
      )
      .from(
        "#pillar1",
        {
          duration: 0.5,
          y: 100,
          scrollTrigger: {
            trigger: "#pillar1",
            top: "-100%",
            scrub: true,
          },
        },
        0
      )
      .from(
        "#pillar2",
        {
          duration: 0.5,
          y: 100,
          scrollTrigger: {
            trigger: "#pillar2",
            top: "-100%",
            scrub: true,
          },
        },
        0
      )
      .from(
        "#pillar3",
        {
          duration: 0.5,
          y: 100,
          scrollTrigger: {
            trigger: "#pillar3",
            top: "-100%",
            scrub: true,
          },
        },
        0
      );
  }, []);
  const handleLearnButtonClick = () => {
    const portrait = window.innerHeight > window.innerWidth;
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "#pillars",
        offsetY: portrait ? 0 : -250,
      },
      ease: "power3.out",
    });
  };
  const handleHeadshotEnter = () => {
    const portrait = window.innerHeight > window.innerWidth;
    if (!portrait) {
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
    }
  };
  const handleHeadshotLeave = () => {
    const portrait = window.innerHeight > window.innerWidth;
    if (!portrait) {
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
    }
  };
  const handleArrowUpClick = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
      ease: "power1.out",
    });
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
        <div className="Pillars" id="pillars">
          <div className="Pillar" id="pillar1">
            <div className="PillarImage" id="pillarimage1"></div>
            <div className="PillarInfo" id="pillarinfo1">
              <h3 className="PillarHeadline">Look ma, all hands!</h3>
              <h4 className="PillarDescription">
                On small screens in landscape, boardroom projectors, and
                everything in between. Websites should always serve their
                purpose and audience through responsive design and top notch
                accessiblity standards.
              </h4>
            </div>
          </div>
          <div className="Pillar" id="pillar2">
            <div className="PillarImage" id="pillarimage2"></div>
            <div className="PillarInfo" id="pillarinfo2">
              <h3 className="PillarHeadline">
                Putting the 'sight' in Website.
              </h3>
              <h4 className="PillarDescription">
                A Sketch document, Photoshop document, scribble on the back of a
                napkin, you name it. If you can put your idea down, I can spin
                it up. If you can't put it down, well, let's try anyway.
              </h4>
            </div>
          </div>
          <div className="Pillar" id="pillar3">
            <div className="PillarImage" id="pillarimage3"></div>
            <div className="PillarInfo" id="pillarinfo3">
              <h3 className="PillarHeadline">
                Framework - makes the dream work.
              </h3>
              <h4 className="PillarDescription">
                Creating the websites of tomorrow requires technology from the
                future. So I went there to steal it. Turns out it's the latest
                version of ${`{BEST_FRAMEWORK}`}. So that was a waste of a
                perfectly good flux capacitor.
              </h4>
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
      <footer className="Footer">
        <p>
          Send me an{" "}
          <a className="Link" href="mailto:mail@timcarew.com">
            email
          </a>
          .
        </p>
        <img
          onClick={handleArrowUpClick}
          src="/img/arrowup.svg"
          alt="Back to Top."
          className="ArrowUp"
          height="32"
          width="32"
        />
      </footer>
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
          min-height: 60vh;
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
          overflow: hidden;
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
        .Pillars {
          display: flex;
          justify-content: space-between;
          padding: calc(${vars.spacing.paddingy} / 2)
            calc(${vars.spacing.paddingx} / 2);
          background-color: ${vars.colors.grey2};
        }
        .Pillar {
          display: flex;
          flex-direction: column;
          width: 35vw;
          padding: ${vars.spacing.paddingy} ${vars.spacing.paddingx};
        }
        .PillarImage {
          height: 25vh;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 20px 20px 0 0;
        }
        .PillarInfo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          color: ${vars.colors.black};
          background-color: ${vars.colors.grey};
          padding: ${vars.spacing.paddingy} calc(${vars.spacing.paddingx} / 4);
          border-radius: 0 0 20px 20px;
          flex: 1 1 0px;
        }
        .PillarHeadline {
          text-align: center;
        }
        .PillarDescription {
          text-align: left;
          letter-spacing: 0.007em;
          padding: ${vars.spacing.paddingy} calc(${vars.spacing.paddingx} / 3);
          padding-bottom: 0;
          line-height: 1.4;
        }
        #pillarimage1 {
          background-image: url("/img/allhands.jpg");
        }
        #pillarimage2 {
          background-image: url("/img/sight.jpg");
        }
        #pillarimage3 {
          background-image: url("/img/framework.jpg");
        }
        #pillarinfo1 {
          background-color: ${vars.colors.pillar1};
        }
        #pillarinfo2 {
          background-color: ${vars.colors.pillar2};
        }
        #pillarinfo3 {
          background-color: ${vars.colors.pillar3};
        }
        .Work {
          display: flex;
          flex-direction: column;
          padding: 0 10%;
          padding: ${vars.spacing.paddingy};
          margin: 0 auto;
          overflow-y: hidden;
          background-color: ${vars.colors.grey};
        }
        .WorkSlogan {
          text-align: center;
          font-weight: 500;
        }
        .Footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: ${vars.spacing.paddingy} ${vars.spacing.paddingx};
        }
        .ArrowUp {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        @media (orientation: portrait) {
          .Hero {
            width: 90%;
            margin: 0 auto;
          }
          .Pillars {
            flex-direction: column;
            align-items: center;
          }
          .Pillar {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
}
