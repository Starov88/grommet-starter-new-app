import React from "react";
import { Button, Header, Heading, Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

const AppBar = ({ showSidebar, onSidebarBtnClick, loggedin }) => {

    let menuItems = [
        { label: 'Profile', onClick: () => { } },
        { label: 'Sign Out', onClick: () => { } },
    ];
    if (!loggedin) {
        menuItems = [
            { label: 'Sign In', onClick: () => { } }
        ];
    }

    return (
        <Header
            direction='row'
            align='center'
            background='brand'
            gap='medium'
            pad='small'
            elevation='medium'
            style={{ zIndex: '1' }}
        >
            <Button
                icon={<MenuIcon />}
                onClick={() => onSidebarBtnClick(!showSidebar)}
            />
            <Heading level='2' margin='none'>Sweets & Flowers</Heading>
            <Menu
                label="Menu"
                items={menuItems}
            />
        </Header>
    )
};

export default AppBar;