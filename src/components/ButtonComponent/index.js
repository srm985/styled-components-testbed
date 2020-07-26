import PropTypes from 'prop-types';
import React from 'react';

import Button from './styles';

const ButtonComponent = (props) => {
    const {
        color,
        label
    } = props;

    return (
        <Button color={color}>
            {label}
        </Button>
    );
};

ButtonComponent.displayName = 'ButtonComponent';

ButtonComponent.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string
};

ButtonComponent.defaultProps = {
    color: '',
    label: ''
};

export default ButtonComponent;
