import React from "react"
import { NavLink } from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-gray-800">
        <div className="container mx-auto flex justify-between">
            <nav className="flex">
                <NavLink to="/" exact 
                activeClassName="text-gray-800 "
                className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-red-200 text-4xl  font-bold monospace tracking-widest">
                    Aditya A. Phalod
                </NavLink>
                <NavLink to="/post" 
                activeClassName="text-red-100 bg-blue-100"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-600 hover:text-gray-100">
                    Blog Post
                </NavLink>
                <NavLink to="/resume" 
                activeClassName="text-red-100 bg-blue-100"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-600 hover:text-gray-100">
                    Resume
                </NavLink>
                <NavLink to="/project"
                activeClassName="text-red-100 bg-blue-100"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-600 hover:text-gray-100">
                    Projects
                </NavLink>
                <NavLink to="/about" 
                activeClassName="text-red-100 bg-blue-100"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-600 hover:text-gray-100">
                    About Me
        </NavLink>
            </nav>
            <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url="https://twitter.com/aka_tonystark19" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                <SocialIcon url="https://www.linkedin.com/in/aditya-phalod-02a84919a/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                {/* <SocialIcon url="https://www.instagram.com/aka.tonystark19/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/> */}
                <SocialIcon url="https://github.com/aka-tonystark19" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                {/* <SocialIcon url="adityaphalod@gmail.com" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/> */}
            </div>
        </div>
        </header>    
    )
}
