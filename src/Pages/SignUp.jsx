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

        console.log(user);

        Swal.fire({
          title: "User created successfully. (firebase)",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        fetch("https://mahogany-furniture-server-7ud2cl8nd.vercel.app/users", {
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

              /* navigate after Registration */
              return location?.state && navigate(location?.state);
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

          {/* <div className="toast toast-top toast-center">
            <div className="alert alert-info">
              <span>New mail arrived.</span>
            </div>
            <div className="alert alert-success">
              <span>Message sent successfully.</span>
            </div>
          </div> */}
        </div>
      </div>
      <Helmet>
        <title>{"Mahogany | Sign Up"}</title>
      </Helmet>
    </section>
  );
};

export default SignUp;

// const SignUp = () => {

//   const handleSignUp = (e) => {
//

//     const form = e.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     createUser(email, password)
//       .then((res) => {
//         console.log(res.user);
//         /* New user has been created */

//   const handleSignInGoogle = () => {
//     signInGoogle()
//       .then((res) => console.log(res.user))
//       .catch(console.error);
//   };
//   return (
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//           <form onSubmit={handleSignUp} className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="name"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control mt-6">
//               <button className="btn bg-primary capitalize text-white">
//                 Sign Up
//               </button>
//             </div>
//             <div className="form-control mt-6">
//               <button
//                 onClick={handleSignInGoogle}
//                 className="btn border-primary capitalize text-primary">
//                  Sign In With Google
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default SignUp;
