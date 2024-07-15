// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";
// import logo from "../../../Images/icon-header-light.png";
// import "./Header.css";

// const Header = () => {
//   const { user, logout } = useAuth();

//   return (
//     <div className="head-bg">
//       <Navbar className="navbar" collapseOnSelect expand="lg">
//         <Container className="container-head" >
//           <Navbar.Brand href="/home">
//             <img src={logo} alt="logo" width="179px"/>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto align-items-center">
//               <Link to="/home" className="list-item text-decoration-none">
//                 Home
//               </Link>
//               <Link to="/about" className="list-item text-decoration-none">
//                 About
//               </Link>
//               <Link to="/service" className="list-item text-decoration-none">
//                 Service
//               </Link>
//               <Link to="/drvandna" className="list-item text-decoration-none">
//               Dr. Vandna
//               </Link>
//               <Link to="/contact" className="list-item text-decoration-none" style={{marginRight:"5px"}}>
//                 Contact
//               </Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;
// {/* {user.email ? (
//   <button
//     type="button"
//     className="btn btn-danger"
//     onClick={logout}
//   >
//     Log Out
//   </button>
// ) : (
//   <Link to="/login" type="button" className="btn btn-danger">
//     Login
//   </Link>
// )}
// {user.email && (
//   <Navbar.Text>
//     <FontAwesomeIcon icon={faUser} />
//     <span className="userName">{user.displayName}</span>
//   </Navbar.Text>
// )} */}

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../Images/icon-header-light.png";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="head-bg">
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Container className="container-head">
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" width="179px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Link to="/home" className="list-item text-decoration-none">
                Home
              </Link>
              <Link to="/about" className="list-item text-decoration-none">
                About
              </Link>
              <a
                href="https://drvandnahomeopathy.com/blogs/"
                className="list-item text-decoration-none"
              >
                Blog
              </a>
              {/* <Link to="/service" className="list-item text-decoration-none">
                Service
              </Link> */}
              <NavDropdown
                title="Treatments"
                id="basic-nav-dropdown"
                className="nav-dropdown-title list-item text-decoration-none"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/option1"
                  className="dropdown-item"
                >
                  Option 1
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/option2"
                  className="dropdown-item"
                >
                  Option 2
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/option3"
                  className="dropdown-item"
                >
                  Option 3
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/drvandna" className="list-item text-decoration-none">
                Dr. Vandna
              </Link>
              <Link
                to="/contact"
                className="list-item text-decoration-none"
                style={{ marginRight: "5px" }}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
