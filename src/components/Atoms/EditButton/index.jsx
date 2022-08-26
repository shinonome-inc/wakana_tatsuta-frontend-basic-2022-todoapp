import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const EditButton = ({ onClick }) => {
  return (
    <StyleEditButton onClick={onClick}>
      <img src={pencil} width="20" height="20" />
      <StyledCicle></StyledCicle>
    </StyleEditButton>
  );
};

export default EditButton;

const StyledCicle = styled.div`
  position: absolute;
  visibility: hidden;
  width: 20px;
  height: 20px;
  top: 0px;
  border-radius: 50%;
  opacity: 0.2;
  background-color: ${COLOR.LIGHT_GRAY};
`;

const StyleEditButton = styled.button`
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: none;
  padding: 0px;
  background-color: transparent;
  &:hover {
    ${StyledCicle} {
      visibility: visible;
    }
  }
`;
