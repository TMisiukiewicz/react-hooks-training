import React from 'react';

interface Props {
    text: string
};

function Header(props: Props) {
    return (
        <h1>
            {props.text}
        </h1>
    )
}

export default Header;
