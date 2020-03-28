import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";

function Title({isLink, to, title, large, medium, small, center}){
    if (isLink){
        return (
            <StyledLink to={to}>
                <StyledTitle
                    large={large}
                    medium={medium}
                    small={small}
                    center={center}
                >
                    {title}
                </StyledTitle>
            </StyledLink>
        );
    } else {
        return (
            <StyledTitle
                large={large}
                medium={medium}
                small={small}
                center={center}
            >
                {title}
            </StyledTitle>
        );
    }
}

const StyledTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    color: black;
    padding: 0;
    
    ${({large}) => large && css`
        font-size: 36px;
    `};
    ${({medium}) => medium && css`
        font-size: 22px;
    `};
    ${({small}) => small && css`
        font-size: 18px;
    `};
    ${({center}) => center && css`
        text-align: center;
    `};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

Title.defaultProps = {
    isLink: false,
    to: null,
    large: false,
    medium: false,
    small: false,
    center: false,
};

Title.propTypes = {
    isLink: PropTypes.bool,
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool,
    center: PropTypes.bool,
};

export default Title;
