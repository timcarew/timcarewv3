import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { vars } from "../public/vars";

gsap.registerPlugin(ScrollTrigger);

export default function Work({ left, item, index }) {
  const { author, authorURL, name, description, fileName, url } = item;
  const handleWorkClick = () => {
    window.open(url);
  };
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
        <button
          onClick={handleWorkClick}
          target="_blank"
          className="HeroButton"
        >
          <h6>Learn more</h6>
        </button>
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
          padding: calc(${vars.spacing.paddingy}) ${vars.spacing.paddingx};
          margin: calc(${vars.spacing.paddingy}*2) 0;
          min-height: 500px;
          width: 100%;
          color: ${vars.colors.white};
        }
        .WorkDetails {
          position: absolute;
          bottom: 0;
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
        .HeroButton {
          color: ${vars.colors.blue};
          font-family: inherit;
          font-weight: 400 !important;
          margin-top: calc(${vars.spacing.paddingy} / 4);
          padding: calc(${vars.spacing.paddingy} / 4)
            calc(${vars.spacing.paddingx} / 3);
          border: 1px solid ${vars.colors.blue};
          border-radius: 99em;
          background: transparent;
          box-shadow: 2px 2px 15px rgba(0, 101, 204, 0);
          cursor: pointer;
          transition: all 0.5s ease;
        }
        .HeroButton:hover {
          color: ${vars.colors.white};
          background-color: ${vars.colors.blue};
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
            justify-content: center;
            padding: 5px;
          }
          .WorkDetails {
            position: unset;
            width: 100%;
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
