import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {

    const authentications = useContext(AuthContext);
    const {handleSignOut, currentUser} = authentications;

    return (
        <div className="bg-[#451952]">
            <div className="flex flex-col lg:flex-row py-3 items-center justify-between bg-[#451952] container mx-auto">
                <div className="flex flex-col items-center lg:flex-row gap-4">
                    <img src="https://i.ibb.co/f1KLzw8/logo.png" alt="logo" className="w-28" />
                    <h3 className="font-bold text-3xl text-white font-rajdhani mb-3 lg:mb-0">
                        Gadget Burst
                    </h3>
                </div>

                <div className="flex flex-wrap justify-center lg:flex-row gap-4">
                    <NavLink className="text-white" to="/">Home</NavLink>
                    <NavLink className="text-white" to="/add-product">Add Product</NavLink>
                    <NavLink className="text-white" to="/my-cart">My Cart</NavLink>
                    <NavLink className="text-white" to="/sign-in">Sign In</NavLink>
                    <NavLink className="text-white" to="/sign-up">Sign Up</NavLink>
                </div>

                {
                    currentUser && <div className="flex">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full  mt-4 lg:mt-0">
                                <img alt="Tailwind CSS Navbar component" src={currentUser?.photoURL} />
                            </div>
                        </label>
                        <p className="font-semibold text-white">{currentUser?.displayName}</p>
                        <button onClick={handleSignOut} className="btn border-none ml-2 bg-[#AE445A] text-white hover:text-[#AE445A] hover:bg-white">Sign out</button>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default NavBar;