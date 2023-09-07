import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid rgb(var(--primary-color));
  color: rgb(var(--primary-color));
  border-radius: 5rem;
  transition: 0.15s;
  &:active {
    transform: scale(0.95);
  }
`;
const IsGotIt : React.FC<any> = (props) => {
  const opts = [
    {
      name: "Got It",
      action: props.actionProvider.handleGotIt,
      id: 1,
    },
  ];

  return (
    <>
   
  <div className="container">
    {opts.map((op)=> {
        return (
            <StyledButton key = {op.id}
            onClick={op.action}>
                {op.name}
            </StyledButton>
        );
    })}
  </div>
  </>
   );
};

export default IsGotIt;
