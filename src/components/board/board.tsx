import styled from '@emotion/styled';
import { Trello } from '@geist-ui/icons';
import { Cards } from 'components/cards/cards';
import React from 'react';

export const Board = () => {
    return (
    <Wrapper>
        <Header>
            <Trello size={48}/>
            <HeaderTitle>Kanban Board</HeaderTitle>
        </Header>
        <Cards/>
    </Wrapper>
    )
};

const Wrapper = styled.div`
    padding: 60px;
    height: 100vh;
`;

const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
`;

const HeaderTitle = styled.h1`
    font-size: 50px;
    color: #000;
`;
