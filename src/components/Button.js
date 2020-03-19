import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: red;
    padding: 10px 20px;
    border: none;
    outline: none;
    color: white;
`;

function Button({text, action}){
    return (
        <StyledButton onClick={action}>
            {text}
        </StyledButton>
    );
}

export default Button;
