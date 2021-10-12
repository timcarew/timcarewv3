import { vars } from "../public/vars";
import { work } from "../public/work";

import React, { useState } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { InView } from "react-intersection-observer";

import Work from "../components/Work";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const heroTL = gsap.timeline();
  const handleLearnButtonClick = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#work",
      ease: "power3.out",
    });
  };
  return (
    <div className="Container">
      <InView
        threshold={0.3}
        onChange={(inView) => {
          if (inView) {
            if (!heroAnimated) {
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
                  ".Headshot",
                  {
                    duration: 0.75,
                    opacity: 0.5,
                    ease: "power1.out",
                  },
                  2.5
                )
                .from(
                  ".WorkSlogan",
                  {
                    duration: 1.5,
                    autoAlpha: 0,
                    ease: "power1.out",
                  },
                  5
                );
            }
            setHeroAnimated(true);
          }
        }}
      >
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
              <a className="HeroButtonEmail">
                <a className="HeroEmail" href="mailto:mail@timcarew.com">
                  <h6>mail@timcarew.com</h6>
                </a>
              </a>
            </div>
            <img
              className="Headshot"
              src="/img/me.png"
              alt="Photo of me, Tim Carew. I'm bald and have a big beard."
            />
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
      </InView>
      <footer className="Footer"></footer>
      <style jsx>{`
        .Container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          color: ${vars.colors.black};
          background-color: ${vars.colors.white};
        }
        .Hero {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
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
          cursor: pointer;
          transition: all 0.5s ease;
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
        .Headshot {
          position: absolute;
          top: 0;
          right: 0;
          margin-top: ${vars.spacing.paddingy};
          height: auto;
          width: 10%;
          min-width: 75px;
          opacity: 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .Headshot:hover {
          opacity: 1 !important;
        }
        .Work {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: ${vars.spacing.paddingy};
          min-height: 50vh;
          margin: 0 auto;
          width: calc(100vw - ${vars.spacing.paddingx});
          background-color: ${vars.colors.grey};
        }
        .WorkSlogan {
          visibility: hidden;
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
