import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Loading } from "./pages/Loading";
import { Feed } from "./pages/Feed";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/carregando" element={<Loading />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
        </BrowserRouter>

    );
}