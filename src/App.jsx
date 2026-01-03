import { Form } from "react-router-dom";
import Login from, "./pages/Login":
import AdminDashboard from  "./pages/AdminDashboard";
import CustomerDashboard from  "./pages/CustomerDashboard";
import UpdateRestaurant from  "./pages/UpdateRestaurant";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/admin/dashboard"
            element={<AdminDashboard/>}/>
            <Route path="/customers/dashboard"
            element={<CustomerDashboard/>}/>
            <Route path="/admin/restaurant"
            element={<UpdateRestaurant/>}/>
        </Routes>
    );
    }
export default App;