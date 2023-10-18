import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {

    const backGroundImg = {
        backgroundImage: `url('https://i.ibb.co/NpkBYCJ/Moon.png')`
    };
  return (
    <div className="hero min-h-screen bg-base-200 flex flex-col" style={backGroundImg}>
      <h1 className="mx-auto text-2xl md:text-4xl font-serif font-bold py-10 text-white">
        Please Login!
      </h1>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
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
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover hover:font-semibold">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-primary">Login</button>
          </div>
          <p>
            Do not have an account?{" "}
            <Link
              to="/register"
              className="text-blue-800 cursor-pointer hover:underline font-semibold"
            >
              Register Now
            </Link>
          </p>
        </form>
        <FcGoogle className="text-5xl mx-auto mb-5"></FcGoogle>
      </div>
    </div>
  );
};

export default LogIn;
