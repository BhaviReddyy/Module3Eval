import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
functiom Login() {
    const [email, setEmail] = useState("";
        const [password, setPassword] = useState("");
        const { login } = useContext(AuthContext);
        const navigate = useNavigate();
        const handleLogin = () => {
            if (email === "admin@gmail.com" && Password === "admin1234") {
                login("admin");
                navigate("/admin/dashboard");
            } else if (email === "customer@gmail.com" && password === "customer1234") {
                login("customer");
                navigate("/customers/dashboard");
            }else {
                alert("Invalid credentials");
            }
        };
        return (
            <div>
                <h2>Login</h2>
                <input placeholder="Email"onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
            </div>
        );

}
export default Login;