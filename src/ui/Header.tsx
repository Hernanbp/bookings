import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 3rem 4rem;
  border-bottom: 1px solid #c1c1c1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <p>Header</p>
    </StyledHeader>
  );
};

export default Header;
