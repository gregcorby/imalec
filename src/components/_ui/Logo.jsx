import React from "react";
import styled from "@emotion/styled"
import colors from "styles/colors"
const LogoContainer = styled.div`
  display: flex;
  width: 80px;
  height: 200px;
  background: ${colors.red};
  flex-direction: column;
  position: relative;
  align-items: center;
  .name {
    position: absolute;
    text-align: center;
    bottom: 20px;
    font-family: Circular Std;
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    width: 100%;
    color: #fff;
  }
  .rings {
    width: 38px;
    height: 38px;
    border-radius: 20px;
    box-shadow: 0 0 0 2px #fff inset;
    position: relative;
    top: 40px;
    box-sizing: border-box;

    &:before,
    &:after {
      content: "";
      width: 38px;
      transition: all 100ms ease-in-out;
      height: 38px;
      border-radius: 20px;
      box-shadow: 0 0 0 2px #fff inset;
      position: absolute;

      box-sizing: border-box;
      left: 0;
    }
    &:before {
      top: -18px;
    }
    &:after {
      top: 18px;
    }
  }
  &:hover .rings {
    &:before,
    &:after {
      transition: all 100ms ease-in-out;
      top: 0px;
    }
  }
`

const Logo = () => (
  <LogoContainer>
    <div className="rings"></div>
    <div className="name">A&mdash;S</div>
  </LogoContainer>
)

export default Logo;
