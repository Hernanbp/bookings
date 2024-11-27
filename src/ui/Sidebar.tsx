import styled from "styled-components";
import Heading from "./Heading";
import MainNav from "./MainNav";

const StyledAside = styled.main`
  padding: 4rem;
  border-right: 1px solid #c1c1c1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Sidebar = () => {
  return (
    <StyledAside>
      <Heading as="h2">Hotels Booking</Heading>
      <MainNav />
    </StyledAside>
  );
};

export default Sidebar;
