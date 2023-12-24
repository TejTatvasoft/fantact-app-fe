import React, { useEffect } from "react";

export default function Logout({ setToken }) {


    useEffect(()=>{
        setToken(null);
        localStorage.removeItem("token");
    },[])

    return (
        <div></div>
    );
}