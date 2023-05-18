import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/cards/cardStyles.css';

const Card = ({image, number, title, description}) => {
    return (
        <div className="card" id={'card-' + number}>
            <img src={image} alt="card-img" className="card-image"></img>
            <div className='info'>
                <h2>{number}</h2>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>

        </div>
    );
};


Card.propTypes = {
    image: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};


export default Card;
