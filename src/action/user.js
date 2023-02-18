import axios from "axios";

// axios.defaults.baseURL = "https://petly-mmyb.onrender.com/api";
axios.defaults.baseURL = "http://localhost:5000/api/";

export const registration = async (values) => {
  try {
    console.log("values in post", values);
    const response = await axios.post("auth/register", {
      ...values,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e);
  }
};
export const login = async (email, password) => {
  try {
    const response = await axios.post("auth/login", {
      email,
      password,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e);
  }
};
