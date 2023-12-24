import React, { useEffect } from "react";
import {
    Navigate,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LoginView from "./components/login";
import { routes } from "./util/constant";
import Logout from "./components/Logout";
import Dashboard from "./components/dashboard";
import EventDetails from "./components/events/EventDetails"
import EventList from "./components/events/EventList";

const CustomRoutes = () => {

    const [token, setToken] = React.useState(localStorage.getItem("token"));
    const navigate = useNavigate();

    useEffect(() => {

    }, [token]);

    if (token === null) {
        return (
            <Routes>
                <Route path={routes.login} element={<LoginView setToken={setToken} />} />
                <Route path={routes.logout} element={<Logout setToken={setToken} />} />
                <Route path="*" element={<Navigate to={routes.login} setToken={setToken} replace />} />
            </Routes>
        );
    } else {
        return (
            <Routes>
                <Route path={routes.dashboard} element={<Dashboard />} />
                <Route path={routes.allEvents} element={<EventList />} />
                <Route path={routes.eventDetials} element={<EventDetails />} />
                <Route path="*" element={<Navigate to={routes.dashboard} replace />} />
            </Routes>
        );
    }
};
export default CustomRoutes;