import React from 'react';
import {Slide, Heading, Link, Text, Image} from "spectacle";

import images from "../images";


const IntroductionSlide = id => (
    <Slide key={id} textColor="secondary">
        <Heading size={1} fit lineHeight={1}>
            Introduction to
        </Heading>
        <Link href="https://github.com/django-oscar/django-oscar">
            <Image src={images.oscar} />
        </Link>
        <Text textSize="1em" marginTop="20px" textColor="secondary">
            Jorgen Ader
        </Text>
        <Text textSize="1em" textColor="secondary">
            06.02.2018
        </Text>
    </Slide>
);


export default IntroductionSlide;
