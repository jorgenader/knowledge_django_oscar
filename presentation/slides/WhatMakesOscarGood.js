import React from 'react';
import {Slide, Heading, List, ListItem} from "spectacle";


const WhatMakesOscarGood = id => (
    <Slide key={id}>
        <Heading size={2} fit lineHeight={1}>
            What makes Oscar a good framework?
        </Heading>
        <List>
            <ListItem>Domain-driven</ListItem>
            <ListItem>Pluggable</ListItem>
            <ListItem>Dynamic loading</ListItem>
        </List>
    </Slide>
);

export default WhatMakesOscarGood;
