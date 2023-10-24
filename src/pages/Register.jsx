import { Link, useNavigate  } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState} from "react";
import { AuthContext } from "../provider/Authprovider";

const Register = () => {
  const backGroundImg = {
    backgroundImage: `url('https://i.ibb.co/NpkBYCJ/Moon.png')`,
  };

  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log(email, name, password);


    // Password validation
    if (password.length < 6) {
        setRegisterError("Password should be 6 characters or more");
        return;
      } else if (!/[A-Z]/.test(password)) {
        setRegisterError(
          "Your password should have at least one uppercase letter"
        );
        return;
      } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~]/.test(password)) {
        setRegisterError(
          "Your password should have at least one special character"
        );
        return;
      }


    //reset success
    setRegisterSuccess('');
    //reset error
    setRegisterError("");

    //create user using email and password
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegisterSuccess("User created successfully");
        e.target.reset();
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  //google sign in with popup
  const handleGoogleSignIn = ()=>{
    signInWithGoogle()
    .then(result => console.log(result.user))
    .catch(error => console.error(error))
  }

  return (
    <div
      className="hero min-h-screen bg-base-200 flex flex-col"
      style={backGroundImg}
    >
      {/* Show successfully added user message  */}

      {registerSuccess && (
        <div className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{registerSuccess}</span>
        </div>
      )}
      {/* show error  */}

      {registerError && (
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{registerError}</span>
        </div>
      )}
      <h1 className="mx-auto text-2xl md:text-4xl font-serif font-bold py-10 text-white">
        Register Now!
      </h1>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered"
              name="password"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover hover:font-semibold"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-primary">Register</button>
          </div>
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-800 cursor-pointer hover:underline font-semibold"
            >
              Login Now!
            </Link>
          </p>
        </form>
        <FcGoogle className="text-5xl mx-auto mb-5 hover:cursor-pointer" onClick={handleGoogleSignIn}></FcGoogle>
      </div>
    </div>
  );
};

export default Register;
