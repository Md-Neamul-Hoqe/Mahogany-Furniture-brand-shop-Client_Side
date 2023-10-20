import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, error, setError, signInGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const Form = new FormData(e.currentTarget);
    const email = Form.get("email");
    const password = Form.get("password");
    const name = Form.get("name");
    // const photo = Form.get("photo");
    const check = Form.get("check");

    /* Verifications */
    if (!check) {
      return setError("Please check our Terms & Conditions.");
    } else if (password.length < 6)
      return setError("Give a password with minimum 6 characters long.");
    else if (!/[A-Z]/.test(password))
      return setError("Please use at lease a uppercase character.");
    else if (!/[^a-zA-Z0-9]/.test(password))
      return setError("Please use at least a special character.");

    createUser(email, password)
      .then((res) => {
        e.target.reset();
        setError("");

        const createdAt = res.user?.metadata?.creationTime;

        // console.log(name, email, password, createdAt);

        /* store data to the database */
        const user = { name, email, createdAt };

        setTimeout(() => {
          Swal.fire({
            title: "User created successfully.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }, 2000);

        /* navigate after Registration */
        location?.state ? navigate(location?.state) : navigate("/");

        fetch("https://mahogany-furniture-server-4lb6ne450.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.insertedId) {
              console.log("User info stored in database successfully.");
            } else {
              console.log("Database connection lost.");
            }
          });
      })
      .catch((error) => setError(error));
  };

  return (
    <section>
      <div className="hero min-h-screen">
        <div className="card w-full max-w-xl lg:bg-white">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-2xl text-center text-dark font-semibold">
              Register a new account
            </h2>
            <hr className="my-5 text-light" />
            <div className="form-control">
              <label className="label">
                <span className="label-text max-md:text-white font-semibold">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered bg-light mt-4 mb-6"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text max-md:text-white font-semibold">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered bg-light mt-4 mb-6"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text max-md:text-white font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered bg-light mt-4 mb-6"
                required
              />
            </div>
            <div className="form-control mt-6 flex flex-row gap-2 text-base">
              <input
                type="checkbox"
                name="check"
                className="toggle toggle-warning"
                required
              />
              <span className=" text-gray">Accept Terms & Conditions</span>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-primary text-white capitalize w-full">
                Register
              </button>
            </div>

            <div className="form-control mt-6 flex flex-row gap-2 text-base">
              Already have an account?{" "}
              <Link className="text-primary font-bold" to="/SignIn">
                Sign In
              </Link>
            </div>

            <div className="divider">OR</div>
            <Link
              onClick={signInGoogle}
              className="flex justify-center items-center w-full border rounded-2xl py-3 text-3xl">
              <FcGoogle className="text-2xl" />{" "}
              <span className="text-xl ms-3 font-semibold capitalize">
                Sign in with google
              </span>
            </Link>
            {error ? (
              <p className="text-red-800 bg-red-300 p-3 rounded-lg">{error}</p>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
      <Helmet>
        <title>{"Mahogany | Sign Up"}</title>
      </Helmet>
    </section>
  );
};

export default SignUp;
