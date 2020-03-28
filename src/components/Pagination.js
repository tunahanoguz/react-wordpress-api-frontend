import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";

function Pagination({currentPage, totalPageNumber, setPageNumber}){
    function increaseCurrentPageNumber(){
        if (currentPage < totalPageNumber){
            setPageNumber(currentPage + 1);
        }
    }

    function decreaseCurrentPageNumber(){
        if (currentPage > 1){
            setPageNumber(currentPage - 1);
        }
    }

    return (
        <div className="d-flex flex-row justify-content-center">
            <Button
                variant="dark"
                onClick={decreaseCurrentPageNumber}
                className="mr-2"
            >
                &#8592;
            </Button>

            <Button
                variant="dark"
                onClick={increaseCurrentPageNumber}
            >
                &#8594;
            </Button>
        </div>
    );
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPageNumber: PropTypes.number.isRequired,
    setPageNumber: PropTypes.func.isRequired,
};

export default Pagination;
