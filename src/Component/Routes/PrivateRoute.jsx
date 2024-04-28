import { useContext } from "react";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import { Navigate } from "react-router-dom";


const Privateroute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user){
        return children;
    }
    return <Navigate to = "/Login"></Navigate>
};

export default Privateroute;