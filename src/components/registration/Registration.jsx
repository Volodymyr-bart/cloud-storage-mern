import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import StyledForm from "./Registration.styled";

const Registration = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <h2>Registration</h2>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>

      <button type="submit">Submit</button>
    </StyledForm>
  );
};
export default Registration;
