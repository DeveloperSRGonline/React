import { toast } from "react-toastify";
import axios from "../../api/axiosConfig";
import { loaduser } from "../reducers/userSlice";

export const asyncCurrentUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else console.log("User Not Found!");
  } catch (error) {
    toast.error(error.message || "An error occurred");
  }
}; // iska kaam kya hai ki agar banda available hai toh ye localstorage se data utha lega

export const asyncLogoutUser = () => async () => {
  try {
    localStorage.removeItem("user")
    console.log("User Logged Out!")
  } catch (error) {
    toast.error(error.message || "An error occurred");
  }
}; // iska kaam kya hai logout hone par user ka data localstorage se hata dena

export const asyncLoginUser = (user) => async () => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`,
      user
    );
    console.log(data[0]);
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    toast.error(error.message || "An error occurred");
  }
}; // iska kaam kya hai check karna ki user login hai ya nahi and local storage me data daal dena

// ab dikat kya hai ki ye asyncRegisterUser agar normal funcion hota toh call kar lete par ye toh action hai
// action hamesh dispatch hota hai
// Action - Dispatch
export const asyncRegisterUser = (user) => async (dispatchEvent, getState) => {
  // getState - current state & dispatch hamare action ko dispatch karne ke liye
  // if we get in some error in case we use try catch
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    toast.error(error.message || "An error occurred");
  }
}; // iska kaam kya hai user register karna
