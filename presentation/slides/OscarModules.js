import React from 'react';
import {Slide, Heading, Appear, List, ListItem} from "spectacle";


const OscarModules = id => (
    <Slide key={id}>
        <Heading size={2} fit lineHeight={1}>
            Oscar modules
        </Heading>
        <List>
            <ListItem>Various payment methods</ListItem>
            <ListItem>Paypal, Amazon, Adyen, Cybersource</ListItem>
            <ListItem>Oscar API</ListItem>
        </List>
    </Slide>
);

export default OscarModules;
