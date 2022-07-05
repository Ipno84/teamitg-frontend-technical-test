import "../axe";
import "../wdyr";

import React from "react";
import ReactDOM from "react-dom";
import { App } from "~/components/containers/app";
import { StrictMode } from "~/components/utilities/strict-mode";

const rootElement = document.querySelector(".root");

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
);
