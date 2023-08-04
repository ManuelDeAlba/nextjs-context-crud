"use client";

import Link from "next/link";

function Navbar(){
    return(
        <nav className="nav">
            <div className="nav__container container">
                <h1 className="nav__title">Task App</h1>
                <div className="nav__links">
                    <Link className="nav__link" href="/">Home</Link>
                    <Link className="nav__link" href="/new">New Task</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;