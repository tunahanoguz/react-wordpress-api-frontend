import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Badge} from "react-bootstrap";

function PostCategory({categories}) {
    return (
        categories.map(category => (
            <Link
                key={category.id}
                to={`/category/${category.slug}`}
            >
                <Badge variant="primary">
                    {category.name}
                </Badge>
            </Link>
        ))
    );
};

PostCategory.propTypes = {
    categories: PropTypes.array.isRequired,
};

export default PostCategory;
