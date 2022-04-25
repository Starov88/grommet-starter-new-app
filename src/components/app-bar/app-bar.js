import React from "react";
import { Button, Header, Heading, Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

const AppBar = ({ showSidebar, enableSidebar, onSidebarBtnClick, loggedin }) => {

    let menuItems = [
        { label: 'Profile', color: 'light-1', onClick: () => { } },
        { label: 'Sign Out', color: 'light-1', onClick: () => { } },
    ];
    if (!loggedin) {
        menuItems = [
            { label: 'Sign In', color: 'light-1', onClick: () => { } }
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
            {
                enableSidebar ?
                    (<Button
                        icon={<MenuIcon />}
                        onClick={() => onSidebarBtnClick(!showSidebar)}
                    />) : null
            }

            <Heading level='2' alignSelf='center' color="brand-1" margin='none'>Sweets & Flowers</Heading>
            <Menu
                color="light-1"
                label="Menu"
                items={menuItems}
            />
        </Header>
    )
};

export default AppBar;