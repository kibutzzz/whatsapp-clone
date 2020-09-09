import React from 'react';
import styled from 'styled-components';

const Container = styled.div<Props>`
    
    position: relative;
    padding: 8px;

    background-color: ${props => props.isMine ? "#dcf8c6" : "#FFF"};
    max-width: 60%;

    width: ${ props => props.imageUrl ? "350px" : "initial"};

    align-self: ${props => props.isMine ? "flex-end" : "flex-start"};

    border-radius: 6px;
    margin-top: 8px;

    box-shadow: 0 3px 8px -2px black;

    line-height: 1.4rem;

    img {
        width: 100%;
        display: block;
        margin-bottom: 16px;
    }
    
    ::before {
        content: "";
        position: absolute;
        top: 0px;
        width: 0; 
        height: 0; 
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        
        border-bottom: 16px solid ${props => props.isMine ? "#dcf8c6" : "#FFF"};
        transform: rotate(${props => props.isMine ? -180 : 180}deg);
        ${props => props.isMine ? "right: -10px;" : "left: -10px;"}
        
    }

    @media(max-width: 1400px) {
        max-width: 70%;
    }
        
    @media(max-width: 1000px) {
        max-width: 80%;
    }

    @media(max-width: 800px) {
        max-width: 90%;
    }
     
`;

interface Props {
    isMine?: boolean
    imageUrl?: string
}

function Message(props: Props) {
    return (
        <Container {...props} >
            {
                props.imageUrl ? <img src={props.imageUrl} /> : ""
            }
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim repudiandae perferendis eaque vero dolore hic, modi incidunt facilis illum! Explicabo reiciendis itaque obcaecati aperiam maiores odit quia at pariatur magnam?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, vitae accusamus hic consectetur, corrupti omnis quisquam sequi voluptatem obcaecati cum dolor illo accusantium unde, officiis fugiat est quasi voluptas enim.
        </Container>
    )
}


export default Message;