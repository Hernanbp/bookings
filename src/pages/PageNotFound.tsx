import styled from "styled-components";

const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #cecece;
  font-size: 5rem;
  font-weight: bold;
`;

const PageNotFound = () => {
  return <NotFound>Error 404</NotFound>;
};

export default PageNotFound;
