import React from 'react';
import {Slide, Heading, Text} from "spectacle";


const WhatIsOscar = id => (
    <Slide key={id}>
        <Heading size={2} fit lineHeight={1}>
            What is Oscar?
        </Heading>
        <Text textSize="1em" textColor="secondary">
            Open-source eCommerce framework
        </Text>
    </Slide>
);

export default WhatIsOscar;
