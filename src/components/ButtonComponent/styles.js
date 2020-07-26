import styler from '../../utils/styler';

const Button = styler('button', ({
    color
}) => ({
    ':hover': {
        transform: 'scale(1.1)'
    },
    backgroundColor: '#262626',
    border: 'none',
    borderRadius: '10px',
    color,
    cursor: 'pointer',
    minHeight: '40px',
    minWidth: '150px',
    outline: 'none',
    padding: '5px 10px'
}));

export default Button;
