import styled from "styled-components";

export const NavbarStyled = styled.div`
  .container {
    width: 1140px;
    margin: 0 auto;
    display: flex;
  }

  .navbar {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;

    &__header {
      margin-left: 10px;
      font-size: 24px;
      font-weight: 700;
    }

    &__login {
      margin-left: auto;
      margin-right: 20px;
    }
  }
`;
