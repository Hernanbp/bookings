import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: #808080;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1rem 2rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #363636;
    background-color: #ebebeb;
    border-radius: 8px;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #acacac;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-500);
  }
`;

const navItems = [
  { to: "/dashboard", icon: <HiOutlineHome />, label: "Home" },
  { to: "/bookings", icon: <HiOutlineCalendarDays />, label: "Bookings" },
  { to: "/cabins", icon: <HiOutlineHomeModern />, label: "Cabins" },
  { to: "/users", icon: <HiOutlineUsers />, label: "Users" },
  { to: "/settings", icon: <HiOutlineCog6Tooth />, label: "Settings" },
];

const MainNav = () => {
  return (
    <nav>
      <ul>
        <NavList>
          {navItems.map((item, index) => (
            <li key={index}>
              <StyledLink to={item.to}>
                {item.icon}
                <span>{item.label}</span>
              </StyledLink>
            </li>
          ))}
        </NavList>
      </ul>
    </nav>
  );
};

export default MainNav;
