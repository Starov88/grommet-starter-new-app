import React from "react";
import { Button, Header, Heading } from 'grommet';
import { BladesVertical } from 'grommet-icons';

const AppBar = (props) => (
    <Header
        direction='row'
        align='center'
        justify='start'
        background='brand'
        gap='medium'
        // pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        pad='small'
        elevation='medium'
        style={{ zIndex: '1' }}
    >
        <Button
            icon={<BladesVertical />}
            onClick={() => props.onSidebarBtnClick((sb) => !sb)}
        />
        <Heading level='3' margin='none'>Sweets & Flowers</Heading>
    </Header>
);

export default AppBar;