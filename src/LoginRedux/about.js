// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Aboutus() {
  const foundUser = useSelector((state) => state.user.foundUser);

  localStorage.setItem("userdata", JSON.stringify(foundUser));
  const userdata = localStorage.getItem("userdata");
  const data = JSON.parse(userdata);

  console.log(data);

  const redirect = useNavigate();

  const logoutbtn = () => {
    localStorage.clear();
    redirect("/");
    window.location.reload();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2% 10%",
      }}
    >
      <div>
        <h1>You are logged in </h1>
        Your Details are:
        <ul style={{ listStyle: "none" }}>
          <li>{foundUser.name}</li>
          <li>{foundUser.email}</li>
          <li>{foundUser.password}</li>
          <li>{foundUser.gender}</li>
          <li>{foundUser.city}</li>
          <li>{foundUser.address}</li>
          <li>{foundUser.state}</li>
          <li>{foundUser.phoneNo}</li>
        </ul>
      </div>
      <div>
        <button onClick={logoutbtn}>Logout</button>
      </div>
    </div>
  );
}

export default Aboutus;
