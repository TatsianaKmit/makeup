import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ClassifiersList from "../components/classifiers/ClassifiersList";
import { Spin } from "@gravity-ui/uikit";

export default function ClassifiersPage({ type }) {
    const [isTypes, setIsTypes] = useState(type === "catalog")
    const [loading, setLoading] = useState(true);
    const location = useLocation();


    useEffect(() => {
        if (location.pathname === "/catalog") {
            setLoading(false)
            setIsTypes(true);
        } else if (location.pathname === "/brands") {
            setLoading(false)
            setIsTypes(false);
        }
    }, [location]);

    return (
        <>
            <div className="classifiers-page">
                <div className="page-container">
                    {loading ? <Spin className='spin' /> : <ClassifiersList isTypes={isTypes} />}
                </div>
            </div>
        </>
    );
}