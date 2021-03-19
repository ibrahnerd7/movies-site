import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
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

const ShowsHeaderItems=()=>{
    return(
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>TV Shows </DropdownToggle>
        <DropdownMenu right>
            <DropdownItem href="/shows/popular">
                Popular
</DropdownItem>
            <DropdownItem href="/shows/airing-today">
                Airing Today
</DropdownItem>
            <DropdownItem href="/shows/on_the_air">
                On TV
</DropdownItem>
            <DropdownItem href="/shows/top-rated">
                Top rated
</DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
    )
}

const PeopleHeaderItems=()=>{
    return(
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
    )
}

const Header = () => {
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
                       <ShowsHeaderItems />
                      <PeopleHeaderItems />
                    </Nav>
                    <NavbarText>Login</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;