import React from 'react';
import {Slide, Heading, Link, List, ListItem, Text} from "spectacle";


const References = id => (
    <Slide key={id}>
        <Heading size={2} fit lineHeight={1}>
            References
        </Heading>
        <List>
            <ListItem>
                <Link href="http://oscarcommerce.com/">
                    <Text textSize="1em" textColor="secondary">
                        Oscar eCommerce
                    </Text>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://github.com/django-oscar/django-oscar-api">
                    <Text textSize="1em" textColor="secondary">
                        Oscar API
                    </Text>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://django-oscar.readthedocs.io/en/latest/">
                    <Text textSize="1em" textColor="secondary">
                        Oscar Documentation
                    </Text>
                </Link>
            </ListItem>
        </List>
    </Slide>
);

export default References;
