import React from "react";
import Contact from "./Contact";
import About from "./About"
import Feedback from "./Feedback"
import { Route,Routes,Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <ul>
        <li>
          <Link to="About">Click Me</Link>
        </li>
        <li>
          <Link to="Contact">Contact Us</Link>
        </li>
        <li>
          <Link to="Feedback"> Feedback</Link>
        </li>
      </ul>
    </nav>
  );
}
