import React, {useEffect, useState} from 'react'
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {FaBars, FaTwitter} from 'react-icons/fa';
import {BsFillFlagFill} from 'react-icons/bs';

import {
    Nav, NavbarContainer, NavLogoRouter, MobileIcon, NavMenu, NavItem,
    NavLinks, NavLinkRouter, NavBtn, Text, NavBtnLink, DropdownIcon, NavLogo
} from "./NavbarElements";
import {
    Button, RedirectButton,GlowingButton, FilledButton
} from "../../MixComponents/Buttons/ButtonElements";

import Dropdown from '../Dropdowns/Dropdown';
import SideDropdown from '../Dropdowns/SideDropdown';
import logo from "../../../assets/ThecyberhubLogo.png"

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [drop, setDrop] = useState(false);

    const dropHandler = (title) => {
        if(title === 'resources'){
            setDrop(true);
        }else setDrop(false);
    }

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav onMouseLeave={() => setDrop(false)} scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogoRouter to={"/"} onClick={toggleHome}>
                            <NavLogo src={logo}/>
                        </NavLogoRouter>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            {[
                                {to: 'resources', title: <><p>Learn</p> <DropdownIcon/></>},
                                {to: 'events', title: 'Events',},
                                {to: 'blogs', title: 'Blogs',},
                                {to: 'projects', title: 'Projects',},
                                {to: 'community', title: 'Community',},
//                                 {to: 'about', title: 'About',},
                            ].map(({to, title}) => (
                                <NavItem onMouseEnter={()=>dropHandler(to)} onMouseLeave={()=>dropHandler(to)} key={to}>
                                    <NavLinks
                                        to={to}
                                    >
                                        {title}
                                    </NavLinks>
                                    {to === 'resources' && drop && <Dropdown sidebar={false}/>}
                                </NavItem>
                            ))}
                        </NavMenu>

                        <NavBtn>
                            <GlowingButton to={"CyberGames"}>
                                <i> Cyber Games </i>
                            </GlowingButton>
                            {/*<RedirectButton href={"https://twitter.com/intent/tweet?text=Hi%20Everyone,%20%0D%0AFound%20the%20best%20website%20to%20learn%20Cybersecurity%20for%20free%20by%20@thecyberw0rld%20community.%20%0D%0A%0D%0AWebsite:%20https://thecyberhub.org%20%0D%0AResources:%20https://thecyberhub.org/resources%20%0D%0A%0D%0AMore%20features%20are%20on%20the%20way...%20%0D%0Afollow%20@thecyberw0rld%20for%20getting%20updates%20and%20for%20cyber%20security%20content."} rel="noopener" target="_blank" smooth={true} duration={500} spy={true} exact="true" offset={-80}>*/}
                            {/*    <FaTwitter/>*/}
                            {/*    <Text> Share </Text>*/}
                            {/*</RedirectButton>*/}
                            {/*<FilledButton to="register">*/}
                            {/*    Register                                                                */}
                            {/*</FilledButton>*/}
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
