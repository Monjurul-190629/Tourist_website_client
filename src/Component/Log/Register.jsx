import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../Provider.jsx/AuthProvider";



const Register = () => {
 
    const {createUser} = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false)


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photourl = e.target.photourl.value;
        const password = e.target.password.value;
        console.log(email, password, name, photourl);
        
        /// password verification

        if(!/[A-Z]/.test(password)){
             toast("Password should have one uppercase letter.")
             return
        }
        else if(!/[a-z]/.test(password)){
            toast("password should have one lowercase letter")
            return
        }
        else if(password.length < 6){
            toast("Password should be at least 6 letters")
            return
        }

        //// create user
        createUser(email, password)
          .then(result => {
            console.log(result.user)
            toast("Registered succesfullly")
          })
          .catch(error => {
            toast(error.message)
          })



    }
    return (
        <div className="hero min-h-screen bg-red-300 my-5 py-5  md:my-10 md:py-10 rounded-3xl">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">Register now!</h1>           
            </div>
            <div className="card shrink-2 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body max-w-56 md:max-w-full" onSubmit={handleRegister}> 
            <div className="form-control shadow-inner">
                
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name = "name" placeholder="name" className="input input-bordered" required />
                </div>
                
                
                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name = "email" placeholder="email" className="input input-bordered" required />
                </div>

                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" name = "photourl" placeholder="photourl" className="input input-bordered" required />
                </div>


                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                type = {showPass ? "text" : "password"}
                 placeholder="Enter your password" 
                 id = "p" name = "password" 
                 className="border-2 border-black py-2 px-3" 
                 required/>
                 <span onClick={() => setShowPass(!showPass)} className="absolute bottom-64 mb-1 md:mb-0 left-48 md:bottom-60 md:left-64 ">
                    {
                        showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                </span><br/><br/>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
                </div>
            </form>
            <p>Already Have an account ? Please <Link to = "/Login"><button className="bg-blue-700 text-white font-bold py-1 px-2 rounded-lg">Login</button></Link></p>
            </div>
        </div>
        <ToastContainer/>
        </div>
    );
};

export default Register;