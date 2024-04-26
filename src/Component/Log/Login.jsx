import { signInWithPopup } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../tailwind.config";
import { AuthContext } from "../Provider.jsx/AuthProvider";




const Login = () => {

    const { signInuser } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        /// Login
        signInuser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                toast(error.message)
            })

    }
    /// login google
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => console.log(error.message))


       
    }

    ///login with github
    const provider1 = new GithubAuthProvider();
    const handleGithubLogin = () => {
        signInWithPopup(auth, provider1)
            .then(result => {
                console.log(result.user)
                navigate('/')

            })
            .catch(error => console.log(error.message))
    }


    return (
        <div className="hero min-h-screen my-0 md:my-10 md:py-10">
            <div className="hero-content flex-col shadow-3xl bg-red-300 rounded-2xl">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl md:py-10 font-bold ">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-300 py-10">
                    <form className="card-body max-w-56 md:max-w-full" onSubmit={handleLogin}>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="flex gap-5 justify-center mb-5">
                        <button onClick={handleGoogleLogin} className="text-xl py-1 px-2 border-2 border-black rounded-lg"><FaGoogle /></button>
                        <button onClick={handleGithubLogin} className="text-xl py-1 px-2 border-2 border-black rounded-lg"><FaGithub /></button>
                    </div>
                    <p>New here ? Please <Link to="/Register"><button className="bg-blue-700 text-white font-bold py-1 px-2 rounded-lg">Register</button></Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;