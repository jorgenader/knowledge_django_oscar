import React from 'react';
import {Slide, Heading, Appear, List, ListItem} from "spectacle";


const OscarVsTgShop = id => (
    <Slide key={id}>
        <Heading size={2} fit lineHeight={1}>
            Oscar vs Tg-Shop
        </Heading>
        <List>
            <ListItem>Oscar is feature complete</ListItem>
            <ListItem>Various modules to support different payment methods</ListItem>
        </List>
    </Slide>
);

export default OscarVsTgShop;
