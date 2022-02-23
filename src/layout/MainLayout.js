import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({children}) => {
    return (
        <div className="flex flex-col h-screen justify-between">
        <Header />

        {children}

        <Footer />
        </div>
    );
}

export default MainLayout;