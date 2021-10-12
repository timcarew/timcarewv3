import React, { useState } from "react";
import gsap from "gsap";
import { InView } from "react-intersection-observer";
import { vars } from "../public/vars";

export default function Work({ left, item, index }) {
  const { author, authorURL, name, description, fileName, url } = item;
  const [animated, setAnimated] = useState(false);
  const workTL = gsap.timeline();
  return (
    <InView
      style={{ width: "100%", margin: `${vars.spacing.paddingy} 0` }}
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
      <a className="WorkItem" id={`WorkItem${index}`} href={url}>
        <div className="WorkDetails" id={`WorkDetails${index}`}>
          <a href={url} target="_blank">
            <h2>{name}</h2>
          </a>
          <p className="Description">{description}</p>
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
      </a>
      <style jsx>{`
        .WorkItem {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: calc(${vars.spacing.paddingy}*3) ${vars.spacing.paddingx};
          min-height: 500px;
          width: 100%;
          margin: 0 auto;
          color: ${vars.colors.white};
          cursor: pointer;
        }
        .WorkDetails {
          position: absolute;
          bottom: 0%;
          left: ${left ? vars.spacing.paddingx : ""};
          right: ${left ? "" : vars.spacing.paddingx};
          width: 50%;
          padding: calc(${vars.spacing.paddingx} / 2);
          background-color: rgba(29, 29, 31, 0.9);
          border-radius: 5px;
          line-height: 1.4;
          z-index: 2;
        }
        .Description {
          font-weight: 300;
          padding: calc(${vars.spacing.paddingy} / 4) 0;
        }
        .WorkDetails a {
          font-weight: 300;
        }
        .WorkDetails a:hover {
          text-decoration: underline;
        }
        .WorkItemImage {
          height: auto;
          width: 80%;
          margin-left: ${left ? "auto" : ""};
          margin-right: ${left ? "" : "auto"};
          visibility: hidden;
          z-index: 1;
        }
        .WorkItemImage:hover .WorkDetails {
          left: -50%;
        }
        @media (orientation: portrait) {
          .WorkItem {
            flex-direction: column;
            padding: 5px;
          }
          .WorkDetails {
            position: unset;
            width: 100%;
            order: 1;
            border-radius: 0;
          }
          .WorkItemImage {
            width: 100%;
            margin: 0 auto;
          }
        }
      `}</style>
    </InView>
  );
}
