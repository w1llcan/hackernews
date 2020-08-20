import styled from "styled-components";

export const StoryWrapper = styled.section`
  padding: 10px 15px;
  margin-botton: 20px;
  border-top: 1px solid #cccccc;
  background-color: #f8fafb;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #0d6ca3;
    font-size: 22px;
    background-color: #edf5f7;
    text-decoration: none;

    &:hover {
      color: #dec93e;
      font-size: 24px;
    }
  }
`;

export const StoryMeta = styled.div`
  font-style: italic;

  > span:not(:first-child):before {
    content: "🠚🠚🠚";
    margin: 0 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || "red"};
`;
