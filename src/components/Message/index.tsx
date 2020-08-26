import React from 'react';
import styled from 'styled-components';

const Container = styled.div<Props>`
    
    position: relative;
    padding: 8px;

    background-color: ${props => props.isMine ? "#dcf8c6": "#FFF"};
    max-width: 60%;
    align-self: ${props => props.isMine ? "flex-end" : "flex-start"};

    border-radius: 6px;
    margin-top: 8px;

    box-shadow: 0 3px 8px -2px black;

    line-height: 1.4rem;
    
    ::before {
        content: "";
        position: absolute;
        top: 0px;
        width: 0; 
        height: 0; 
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        
        border-bottom: 16px solid ${props => props.isMine ? "#dcf8c6": "#FFF"};
        transform: rotate(${props => props.isMine ? -180 : 180}deg);
        ${props => props.isMine ? "right: -10px;" : "left: -10px;"}
        
    }
`;

interface Props {
    isMine?: boolean
}

function Message(props: Props) {
    return (
        <Container isMine={props.isMine} >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim repudiandae perferendis eaque vero dolore hic, modi incidunt facilis illum! Explicabo reiciendis itaque obcaecati aperiam maiores odit quia at pariatur magnam?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, vitae accusamus hic consectetur, corrupti omnis quisquam sequi voluptatem obcaecati cum dolor illo accusantium unde, officiis fugiat est quasi voluptas enim.
        </Container>
    )
}


export default Message;