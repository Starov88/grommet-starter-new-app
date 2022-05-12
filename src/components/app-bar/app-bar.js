import React from "react";
import { Button, Header, Image, Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import { useNavigate } from "react-router-dom";

import "./app-bar.css";

const AppBar = ({ showSidebar, enableSidebar, onSidebarBtnClick, userInfo, onLogout }) => {

    const navigate = useNavigate();

    let menuItems = [
        { label: 'Profile', color: 'light-1', onClick: () => { } },
        { label: 'Sign Out', color: 'light-1', onClick: () => { onLogout() } },
    ];
    if (!userInfo.loggedIn) {
        menuItems = [
            { label: 'Sign In', color: 'light-1', onClick: () => { navigate("/auth/login") } }
        ];
    }

    return (
        <Header
            className="app-header"
            direction='row'
            align='center'
            background='brand'
            gap='medium'
            pad='small'
            elevation='medium'
            style={{ zIndex: '1' }}
        >
            {
                enableSidebar ?
                    (<Button
                        icon={<MenuIcon />}
                        onClick={() => onSidebarBtnClick(!showSidebar)}
                    />) : null
            }

            {/* <Heading level='2' alignSelf='center' color="brand-1" margin='none'>Sweets & Flowers</Heading> */}
            <Image height={"120px"} fit="contain" src="../images/logo/logo-web.png" />
            <Menu
                className="menu-collapse-btn"
                color="light-1"
                dropBackground="brand-1"
                label="Menu"
                items={menuItems}
            />
        </Header>
    )
};

export default AppBar;