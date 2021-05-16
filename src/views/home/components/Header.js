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
    Button,
} from 'reactstrap';
import {FiChevronDown, FiArrowRight} from 'react-icons/fi'
import { loginUser } from '../../../infrastructure/services/firebase/auth';

const MoviesHeaderItems=()=>{
    return(
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>
            Movies <FiChevronDown />
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
        <DropdownToggle nav >TV Shows<FiChevronDown /> </DropdownToggle>
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
        <DropdownToggle nav >
            People <FiChevronDown />
</DropdownToggle>
        <DropdownMenu right>
            <DropdownItem href="/people/popular">
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
            <Navbar style={{backgroundColor:"#24282d"}} expand="md"  >
                <NavbarBrand href="/">Movies Site</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" >
                     <MoviesHeaderItems />
                       <ShowsHeaderItems />
                      <PeopleHeaderItems />
                    </Nav>
                    <Nav className="ml-auto" navbar>
                    {/* <NavbarText className="mx-2"> <a href="/signin"><FiSearch size={32}/></a></NavbarText> */}
                    {/* <NavbarText className="mx-2"> <a href="/signin"><FiBookmark size={32}/></a></NavbarText> */}
                    <Button color="info" onClick={() =>loginUser()} > Sign In </Button>
                    </Nav>
                </Collapse>
            </Navbar>
    );
}

export default Header;