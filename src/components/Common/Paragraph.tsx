import React from 'react';

interface Props {
    text: string;
}

function Paragraph(props: Props) {
    return <p>{props.text}</p>
}

export default Paragraph;
