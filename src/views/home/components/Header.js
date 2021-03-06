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
    Dropdown,
    Row,
} from 'reactstrap';
import {FiChevronDown, FiLogOut, FiUser, FiHeart, FiMenu} from 'react-icons/fi'
import { loginUser } from '../../../infrastructure/services/firebase/auth';
import { authentication } from '../../../infrastructure/services/firebase/config';
import {useHistory} from 'react-router-dom';

const menuStyles={textDecoration:"none", color:"#25a2b8", backgroundColor:"#24282d",borderColor:"#24282d"}

const MoviesHeaderItems=()=>{
    return(
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav style={menuStyles}>
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
        <UncontrolledDropdown nav inNavbar >
        <DropdownToggle nav style={menuStyles}>TV Shows<FiChevronDown /> </DropdownToggle>
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
        <DropdownToggle nav  style={menuStyles}>
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

const Header = ({user}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const userToggle = () => setDropdownOpen(prevState => !prevState);
    const history=useHistory();

    return ( 
            <Navbar style={{backgroundColor:"#24282d"}} expand="md"  fixed="top">
                <NavbarBrand href="/" style={menuStyles}>Movies Site</NavbarBrand>
                <NavbarToggler> <FiMenu color="#25a2b8" size={24} onClick={toggle} /></NavbarToggler>
                <Collapse  isOpen={isOpen} navbar>
                    <Nav className="mr-auto" >
                     <MoviesHeaderItems />
                       <ShowsHeaderItems />
                      <PeopleHeaderItems />
                    </Nav>
                    <Nav className="ml-auto" navbar>
                 {user? 
                 <Dropdown isOpen={dropdownOpen} toggle={userToggle} >
                     <DropdownToggle  nav style={menuStyles}>
                         <Row>
                <img  src={user.photoURL} alt="User Profile" className="rounded-circle" style={{width:30,height:30,borderRadius:15,marginRight:8,marginLeft:8}} />
                <p className="mr-4">Hello, {user.displayName}</p>
                </Row>
                </DropdownToggle>
                 <DropdownMenu style={{borderColor:"white"}}>
                   <DropdownItem  href="/favourites"><FiHeart /> Favourites</DropdownItem>
                   <DropdownItem><FiUser /> Profile</DropdownItem>
                   <DropdownItem onClick={()=>{
                       const shouldSignOut=window.confirm("Do you really want to sign out");
                       shouldSignOut&& authentication.signOut()
                       history.replace('/')
                   }}><FiLogOut/> Sign out</DropdownItem>
                 </DropdownMenu>
               </Dropdown>
                  : <Button color="info" onClick={() =>loginUser()} > Sign In </Button>}
                    </Nav>
                </Collapse>
            </Navbar>
    );
}

export default Header;