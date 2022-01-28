import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Restaurant from "../Pages/Restaurant";
export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Restaurant/>} path="/restaurante"/>
            </Routes>
        </BrowserRouter>
    )
}