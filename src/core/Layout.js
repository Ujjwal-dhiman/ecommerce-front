import React from "react";
import Menu from "./Menu";
import "../styles.css";

const Layout = ({
    title = "Mooonfox",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
        <div className="jumbotron">
            <h2 className="text-center">{title}</h2>
            <p className="lead text-center">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
