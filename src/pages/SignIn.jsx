import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className=" w-5/6 lg:w-2/4">
                    <h1 className="font-semibold text-4xl text-center mb-5">Sign In</h1>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#AE445A] text-white hover:text-[#AE445A]">Sign In</button>
                            </div>

                            <div className="flex flex-col lg:flex-row justify-center gap-3 items-center mt-5">
                            <Link to="" className="btn btn-sm text-center text-blue-600 underline text-base ">
                                Sign in with google
                            </Link>
                            <Link to="/sign-up" className="btn btn-sm text-center text-blue-600 underline text-base mt-2 lg:mt-0">
                                Create account
                            </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;