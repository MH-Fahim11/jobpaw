"use client"
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
import logo from '../assets/logo.png'
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <Navbar expand="lg">
            <div className="container">
                <Link href="/">
                    <Image src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto ">
                        <Nav.Link style={{ fontWeight: 'bold', color: '#140B37' }} href="/">Enterprises</Nav.Link>
                        <Nav.Link style={{ fontWeight: 'bold', color: '#140B37' }} href="/about">Professionals</Nav.Link>
                        <Nav.Link style={{ fontWeight: 'bold', color: '#140B37' }} href="/about">Professionals</Nav.Link>
                        <Nav.Link style={{ fontWeight: 'bold', color: '#140B37' }} href="/about">Contact</Nav.Link>
                    </Nav>
                    <Button className="rounded-pill text-white" variant="info">Sign Up</Button>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;