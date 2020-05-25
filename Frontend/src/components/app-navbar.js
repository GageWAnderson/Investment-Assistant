import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                 <Container>
                     <NavbarBrand href="/">Investment Assistant</NavbarBrand>
                     <NavbarToggler onClick={this.toggle}></NavbarToggler>
                     <Collapse isOpen={this.state.isOpen} navbar></Collapse>
                         <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">
                                     Tools
                                 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                     Account
                                 </NavLink>
                            </NavItem>
                             <NavItem>
                                 <NavLink href="https://github.com/GageWAnderson/Investment-Assistant">
                                     Github
                                 </NavLink>
                             </NavItem>
                         </Nav>
                 </Container>
            </Navbar> 
         </div>
        );
    }
}

export default AppNavbar;