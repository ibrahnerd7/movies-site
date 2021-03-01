import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const MoviesHeaderItems=()=>{
    return(
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            Movies
</DropdownToggle>
        <DropdownMenu right>
            <DropdownItem  href="/movies/popular">
            Popular
                
</DropdownItem>
            <DropdownItem href="/movies/now-playing">
                Now Playing
</DropdownItem>
            <DropdownItem href="/movies/upcoming">
                Upcoming
</DropdownItem>
            <DropdownItem href="/movies/top-rated">
                Top rated
</DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
    )
}

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
            <Navbar color="light" light expand="md" >
                <NavbarBrand href="/">Movies Site</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                     <MoviesHeaderItems />
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>TV Shows </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Popular
                </DropdownItem>
                                <DropdownItem>
                                    Airing Today
                </DropdownItem>
                                <DropdownItem>
                                    On TV
                </DropdownItem>
                                <DropdownItem>
                                    Top rated
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                People
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Popular people
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Search</NavLink>
                    <NavbarText>Login</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;