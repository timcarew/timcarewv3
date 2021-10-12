import { vars } from "../public/vars";
import { work } from "../public/work";

import React, { useState } from "react";
import gsap from "gsap";
import { InView } from "react-intersection-observer";

import Work from "../components/Work";

export default function Home() {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const heroTL = gsap.timeline();
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
                  1.5
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
          </div>
          <div className="Work">
            {work.map((item, index) => {
              return <Work item={item} index={index} key={`Work${index}`} />;
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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
        }
        .HeroName {
          font-weight: 500;
          visibility: hidden;
        }
        .HeroSlogan {
          padding: calc(${vars.spacing.paddingy} / 2) 0;
          font-weight: 400;
          visibility: hidden;
        }
        .Work {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: ${vars.spacing.paddingy};
          min-height: 50vh;
          width: calc(100vw - ${vars.spacing.paddingx});
          background-color: ${vars.colors.grey};
        }
      `}</style>
    </div>
  );
}
