import React from 'react';
import {Slide, Heading, Appear, List, ListItem} from "spectacle";


const WhatMakesOscarGood = id => (
    <Slide key={id}>
        <Heading size={2} fit lineHeight={1}>
            What oscar brings?
        </Heading>
        <List>
            <ListItem>Product, product types and categories</ListItem>
            <ListItem>Dashboard for statistics</ListItem>
            <ListItem>Partners for multiple stock record</ListItem>
            <ListItem>Multiple payment sources</ListItem>
            <ListItem>Events for shipping, payments etc.</ListItem>
            <ListItem>Discounts, vouchers</ListItem>
            <ListItem>Reports</ListItem>
            <Appear><ListItem>List goes on</ListItem></Appear>
        </List>
    </Slide>
);

export default WhatMakesOscarGood;
