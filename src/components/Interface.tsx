import styled from "styled-components";
import { pages } from "../pages";

const Interface = () => {
  return (
    <>
      {pages.map(({ content }, index) => (
        <Container key={index}>
          {content.length > 0 && (
            <Info>
              <Content>{content}</Content>
            </Info>
          )}
        </Container>
      ))}
    </>
  );
};
export default Interface;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Info = styled.div`
  margin-left: 60px;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.p`
  max-width: 80%;
  line-height: 1.5;
  font-size: 1.9rem;
  color: #fff;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;
