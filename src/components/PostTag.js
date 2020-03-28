import React from "react";
import PropTypes from 'prop-types';
import {Badge} from "react-bootstrap";
import {Link} from "react-router-dom";

function PostTag({tags}) {
    return tags.map(tag => (
        <Link
            key={tag.id}
            to={`/tag/${tag.slug}`}
        >
            <Badge
                key={tag.id}
                variant="secondary"
                className="mr-2"
            >
                {tag.name}
            </Badge>
        </Link>
    ));
}

PostTag.propTypes = {
    tags: PropTypes.array.isRequired,
};

export default PostTag;
