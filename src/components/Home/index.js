/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const homeContainerCss = css`
  width: 100%;
  height: 100vh;
  color: orange;
`;

function Home(){
  return (
    <div css={homeContainerCss}>
      Hello I'm the Home
    </div>
  )
}

export default Home