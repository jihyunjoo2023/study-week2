import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import React from "react";

const Router = () => {
    return (
        // routing 설정
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;