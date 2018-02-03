/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {render} from "react-dom";
import {AppContainer} from 'react-hot-loader';

import Presentation from "./presentation";


const renderApp = Component => (
    render(
        <AppContainer>
            <Component />
        </AppContainer>, document.getElementById("root"),
    )
);

renderApp(Presentation);


if (module.hot) {
    module.hot.accept('./presentation', () => {
        render(Presentation);
    });
}
