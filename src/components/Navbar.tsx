import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from 'flowbite-react';

const TopNav: React.FC = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Active Edge</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/tweets">
          Tweets
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
