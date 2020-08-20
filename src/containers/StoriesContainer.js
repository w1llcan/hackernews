import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import "../styles/style.css";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  //   ".then" resolves the promise, which comes from "async" in hnApi.js.
  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    // getStory(20970623).then((data) => console.log(data));
  }, []);

  //   [] = when the component mounts, do this...
  //   [storyIdsUpdated (true/false)]
  //  With [], it runs just once, because it's an empty array.

  return (
    //   "<>" is a fragment so you could use multiple children - not JUST ONE
    <body
      style={{
        backgroundColor: "#F8FAFB",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          alignItems: "center",
          fontFamily: "B612",
          fontSize: "48px",
          color: "#fff",
          border: "1px solid #bfbb80",
          backgroundColor: "#000",
        }}
      >
        Hacker News Stories
      </h1>
      {storyIds.map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </body>
  );
};
