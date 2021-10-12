import React, { useState } from "react";
import gsap from "gsap";
import { InView } from "react-intersection-observer";
import { vars } from "../public/vars";

export default function Work({ item, index }) {
  const { author, authorURL, name, description, fileName, url } = item;
  const [animated, setAnimated] = useState(false);
  const workTL = gsap.timeline();
  return (
    <InView
      style={{ width: "100%" }}
      threshold={0.3}
      onChange={(inView) => {
        if (inView) {
          if (!animated) {
            workTL
              .from(
                `#WorkImage${index}`,
                {
                  duration: 2,
                  autoAlpha: 0,
                  y: 200,
                  ease: "power3.out",
                },
                0.2
              )
              .from(
                `#WorkDetails${index}`,
                {
                  duration: 2,
                  autoAlpha: 0,
                  y: 200,
                  ease: "power3.out",
                },
                0.5
              );
          }
          setAnimated(true);
        }
      }}
    >
      <div className="WorkItem" id={`WorkItem${index}`}>
        <div className="WorkDetails" id={`WorkDetails${index}`}>
          <a href={url} target="_blank">
            <h2>{name}</h2>
          </a>
          <p>{description}</p>
          <a href={authorURL} target="_blank">
            <h6>
              <em>- {author}</em>
            </h6>
          </a>
        </div>
        <img
          src={`/img/${fileName}`}
          alt={"Image showing the " + name + "website."}
          className="WorkItemImage"
          id={`WorkImage${index}`}
        />
      </div>
      <style jsx>{`
        .WorkItem {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: ${vars.spacing.paddingy} ${vars.spacing.paddingx};
          margin: ${vars.spacing.paddingy} 0;
          min-height: 500px;
          width: 100%;
          margin: 0 auto;
          color: ${vars.colors.white};
        }
        .WorkDetails {
          position: absolute;
          top: 60%;
          left: ${vars.spacing.paddingx};
          width: 50%;
          padding: calc(${vars.spacing.paddingx} / 2);
          background-color: ${vars.colors.blue};
          line-height: 1.4;
          z-index: 2;
        }
        .WorkDetails a {
          font-weight: 500;
        }
        .WorkDetails a:hover {
          text-decoration: underline;
        }
        .WorkItemImage {
          height: auto;
          width: 80%;
          margin-left: auto;
          visibility: hidden;
          z-index: 1;
        }
        .WorkItemImage:hover .WorkDetails {
          left: -50%;
        }
      `}</style>
    </InView>
  );
}
