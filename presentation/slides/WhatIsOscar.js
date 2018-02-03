import React from 'react';
import {Slide, Heading, Appear, Text} from "spectacle";


const WhatIsOscar = id => (
    <Slide key={id}>
        <Heading size={2} fit lineHeight={1}>
            What is Oscar?
        </Heading>
        <Appear>
            <Text textSize="1em" textColor="secondary">
                Open-source eCommerce framework
            </Text>
        </Appear>
    </Slide>
);


export default WhatIsOscar;
