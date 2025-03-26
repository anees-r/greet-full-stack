import React from "react";
import "./Register.scss";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Your Greet!</h1>
          <p>
            Greet greets you back. You have been missed!. Greet everyone. <br />{" "}
            Greet!
          </p>
          <span>Do have an account? Login Now!</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
