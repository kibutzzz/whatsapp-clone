import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 420px;
    height: 100%;

    background-color: #AAA;
`;


function Sidebar() {
    return (
        <Container>
            Sidebar
        </Container>
    );
}

export default Sidebar;