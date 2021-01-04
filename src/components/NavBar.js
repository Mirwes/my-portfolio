import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-blue-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to='/' exact activeClassName="text-red"
                     className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest">
                        Mirwes
                    </NavLink>
                    <NavLink to='/post' className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-purple-900"
                    activeClassName="text-blue-100 bg-blue-700">
                        Blog Posts
                    </NavLink>
                    <NavLink to='/project'  className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-purple-900"
                    activeClassName="text-blue-100 bg-blue-700">
                        Projects
                    </NavLink>
                    <NavLink to='/about' className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-purple-900"
                    activeClassName="text-blue-100 bg-blue-700">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                   <SocialIcon url="https://www.facebook.com/mir.safi.71/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                   <SocialIcon url="https://www.linkedin.com/in/mirwes-hakimi-065b651b7" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />

                </div>
            </div>
        </header>
    )
}