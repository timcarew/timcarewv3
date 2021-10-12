import React, { useState } from "react";
import gsap from "gsap";
import { InView } from "react-intersection-observer";
import { vars } from "../public/vars";

export default function Work({ item, index }) {
  const { name, description, fileName, url } = item;
  const [animated, setAnimated] = useState(false);
  const workTL = gsap.timeline();
  return (
    <InView
      threshold={0.3}
      onChange={(inView) => {
        if (inView) {
          console.log("inview");
          if (!animated) {
            workTL.from(
              `#WorkItem${index}`,
              {
                duration: 1,
                autoAlpha: 0,
                y: 200,
                ease: "power3.out",
              },
              0.2
            );
          }
          setAnimated(true);
        } else {
          console.log("not in view");
        }
      }}
    >
      <div className="WorkItem" id={`WorkItem${index}`}>
        <img
          src={`/img/${fileName}`}
          alt={"Image showing the " + name + "website."}
          className="WorkItemImage"
        />
      </div>
      <style jsx>{`
        .WorkItem {
          padding: ${vars.spacing.paddingy} 0;
          min-height: 100vh;
          visibility: hidden;
        }
      `}</style>
    </InView>
  );
}
