import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    color: #333333;
`;

function Title({title}){
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    );
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
