import styled from '@emotion/styled';
import { Trello } from '@geist-ui/icons';
import { Card } from 'components/card/card';

export const Board = () => (
    <Wrapper>
        <Header>
            <Trello size={48}/>
            <HeaderTitle>Kanban Board</HeaderTitle>
            <Card/>
        </Header>
    </Wrapper>
);

const Wrapper = styled.div`
    overflow: hidden;
    padding: 60px;
    width: 100%;
    height: 100vh;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
`;

const HeaderTitle = styled.h1`
    font-size: 50px;
    color: #000;
`;
