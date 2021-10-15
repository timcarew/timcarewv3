import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { vars } from "../public/vars";

gsap.registerPlugin(ScrollTrigger);

export default function Work({ left, item, index }) {
  const { author, authorURL, name, description, fileName, url } = item;
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline().from(`#WorkImage${index}`, {
      duration: 2,
      y: 200,
      scrollTrigger: {
        trigger: `#WorkImage${index}`,
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="WorkItem" id={`WorkItem${index}`}>
      <div className="WorkDetails" id={`WorkDetails${index}`}>
        <a href={url} target="_blank">
          <h3>{name}</h3>
        </a>
        <h4 className="Description">{description}</h4>
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
      <style jsx>{`
        .WorkItem {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: calc(${vars.spacing.paddingy}*2) ${vars.spacing.paddingx};
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
          width: 40%;
          padding: calc(${vars.spacing.paddingx} / 2);
          color: ${vars.colors.black};
          background-color: ${vars.colors.white};
          filter: drop-shadow(5px 0px 10px rgba(0, 0, 0, 0.1));
          border-radius: 5px;
          line-height: 1.4;
          z-index: 2;
        }
        .Description {
          color: ${vars.colors.greyDark};
          font-weight: 400;
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
          width: 90%;
          margin-left: ${left ? "auto" : ""};
          margin-right: ${left ? "" : "auto"};
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
            width: 80%;
            order: 1;
            border-radius: 5px;
          }
          .WorkItemImage {
            width: 100%;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
