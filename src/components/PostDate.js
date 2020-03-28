import React from "react";
import PropTypes from 'prop-types';
import moment from "moment";
import {Badge} from "react-bootstrap";

function PostDate({date}) {
    const postDate = moment(date).startOf('hour').fromNow();

    return (
        <Badge
            variant="light"
            className="mr-2"
        >
            {postDate}
        </Badge>
    );
}

PostDate.propTypes = {
    date: PropTypes.string.isRequired,
};

export default PostDate;
