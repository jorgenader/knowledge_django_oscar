/* eslint-disable global-require */
import React from "react";

import {Appear, Deck, Slide, Heading, Link, Text, Image, CodePane, List, ListItem} from "spectacle";

import createTheme from "spectacle/lib/themes/default";

import slides from './slides';

require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const theme = createTheme({
    primary: '#000',
    secondary: '#999999',
    tertiary: "#FFFFFF",
    quartenary: "#89D96D",
}, {
    primary: "Montserrat",
    secondary: "Helvetica",
});


const Presentation = () => (
    <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500} progress="none">
        {slides.map(({id, render}) => (
            render(id)
        ))}
    </Deck>
);


export default Presentation;
