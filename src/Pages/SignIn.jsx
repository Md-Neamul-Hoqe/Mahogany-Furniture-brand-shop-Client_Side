import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
  const { setUser, signIn, signInGoogle } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        /* User logged in successfully */
        setUser(res.user);

        /* data to be updated */
        const user = {
          email,
          lastSignInAt: res.user?.metadata?.lastSignInTime,
        };

        /* Update user information */
        fetch("https://mahogany-furniture-server-7ud2cl8nd.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              Swal.fire({
                title: "User information updated to the database successfully.",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignInGoogle = () => {
    signInGoogle()
      .then((res) => console.log(res.user))
      .catch(console.error);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-primary capitalize text-white">
                Sign In
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleSignInGoogle}
                className="btn text-primary border-primary capitalize">
                Sign In With Google
              </button>
            </div>
          </form>
        </div>
      </div>

      <Helmet>
        <title>{"Mahogany | Sign In"}</title>
      </Helmet>
    </div>
  );
};

export default SignIn;
