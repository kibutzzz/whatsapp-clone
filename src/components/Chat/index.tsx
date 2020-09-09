import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Message from '../Message';

const Container = styled.div`
    flex-grow: 1;
    background-image: url("https://images.unsplash.com/photo-1598330748374-20f7bcbae670?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=689&q=80");
    background-repeat: none;
    background-size: cover;
    padding: 16px 64px;
    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    @media(max-width: 1000px) {
        padding: 16px 32px;
    }

    @media(max-width: 800px) {
        padding: 16px;
    }
`;

function Chat() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, [containerRef]);

    return (
        <Container ref={containerRef}>
            <Message />
            <Message isMine={true} />
            <Message isMine={true} />

            <Message isMine={true} />
            <Message isMine={true} />
            <Message isMine={true} />
            <Message />
            <Message isMine={true} />
            <Message isMine={true} />
            <Message isMine={true} />
            <Message isMine={true} />
            <Message isMine={true} />
            <Message />
            <Message />
            <Message />
            <Message isMine={true} />
            <Message isMine={true} />
            <Message />
            <Message isMine={true} imageUrl={"https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"}/>
        </Container>
    )
}


export default Chat;