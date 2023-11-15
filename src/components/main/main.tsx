import styled from '@emotion/styled';

export const Main = () => (
    <Wrapper>
        <HeaderTitle>Kanban Board</HeaderTitle>
    </Wrapper>
);

const Wrapper = styled.div`
    overflow: hidden;
    padding: 60px;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(../../shared/assets/background.jpg);
    background-size: cover;
`;

const HeaderTitle = styled.h1`
    font-size: 58px;
    color: white;
`;
