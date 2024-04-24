import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ClassifiersList from "../components/classifiers/classifiers.list";

export default function ClassifiersPage({ type }) {
    const [isTypes, setIsTypes] = useState(type === "catalog"); // Default value for isTypes
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/catalog") {
            setIsTypes(true);
        } else if (location.pathname === "/brands") {
            setIsTypes(false);
        }
    }, [location]);

    return (
        <>
            <h1>{isTypes ? "CATALOG" : "BRANDS"}</h1>
            <ClassifiersList isTypes={isTypes} />
        </>
    );
}