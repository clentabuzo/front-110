import React from 'react';

function BankCard({ color, background, width, height }) {
    return (
        <svg
            width={width ? width : '30px'}
            height={height ? height : '30px'}
            fill={color ? color : '#757779'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                d="M3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3ZM20.0049 11H4.00488V19H20.0049V11ZM20.0049 9V5H4.00488V9H20.0049ZM14.0049 15H18.0049V17H14.0049V15Z"
            ></path>
        </svg>
    );
}

export default BankCard;
