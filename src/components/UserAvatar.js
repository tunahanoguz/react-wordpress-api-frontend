import React from 'react';
import PropTypes from 'prop-types';

function UserAvatar({avatar, size}){
    return (
        <img
            alt="Profile Picture"
            src={avatar}
            width={size}
            height={size}
        />
    );
}

UserAvatar.defaultProps = {
    size: 100,
};

UserAvatar.propTypes = {
    avatar: PropTypes.string.isRequired,
    size: PropTypes.number,
};

export default UserAvatar;
