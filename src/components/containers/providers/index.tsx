import React, { memo } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { RFCC } from "~/typings/generic";
import { ThemeProvider } from "~/components/containers/providers/theme";
import { store } from "~/state";

/**
 * Providers container, it allow to inject all the providers needed by the application.
 * Actually, it only injects the Redux store and ThemeProvider by emotionjs event if it's not still in use.
 *
 * @param {*} { children }
 * @return {*}
 */
const ProvidersComponent: RFCC = ({ children }) => {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
    );
};

export const Providers = memo(ProvidersComponent);
