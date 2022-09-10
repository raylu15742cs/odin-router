import { Routes, Route} from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const RouteSwitch = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default RouteSwitch