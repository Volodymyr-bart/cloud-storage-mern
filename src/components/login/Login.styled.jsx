import styled from "styled-components";

const StyledForm = styled.form`
  margin: 50px auto 0;
  width: 600px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  background-color: #83e045;
  div {
    display: flex;
    flex-direction: column;

    margin: 0 auto;

    width: 300px;
    gap: 10px;
  }
  input {
    padding: 10px 5px;
  }
  button {
    width: 150px;
    margin: 0 auto;
  }
`;

export default StyledForm;
