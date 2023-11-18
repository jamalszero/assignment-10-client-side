import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className=" w-5/6 lg:w-2/4">
                    <h1 className="font-semibold text-4xl text-center mb-5">Sign Up</h1>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo_url" placeholder="photo url" className="input input-bordered" required />
                            </div>

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
                                <button className="btn bg-[#AE445A] text-white hover:text-[#AE445A]">Sign Up</button>
                            </div>
                            <Link to="/sign-in" className="btn btn-sm text-center text-blue-600 underline text-base mt-5 w-3/12 mx-auto">
                                Sign In
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;