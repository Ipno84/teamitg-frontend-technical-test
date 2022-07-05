import {
    ThemeProvider as EmotionProvider,
    Global,
    Theme,
    Interpolation,
} from "@emotion/react";
import React, { memo, useMemo } from "react";

import { RFCC } from "~/typings/generic";
import { black } from "~/components/containers/providers/theme/colors";

/**
 * Theme provider, it allow to inject all theme variables.
 * This component contains also global styles.
 *
 * @param {*} { children }
 * @return {*} 
 */
const ThemeProviderComponent: RFCC = ({ children }) => {
    const theme = useMemo<Theme>(
        () => ({
            colors: { black },
        }),
        []
    );

    const globalStyle = useMemo<Interpolation<Theme>>(
        () => ({
            "*": {
                boxSizing: "border-box",
            },
            body: {
                margin: 0,
                fontFamily: "'Quicksand', sans-serif",
                fontSize: 16,
                lineHeight: "16px",
            },
            ".root": {
                zIndex: 12,
                "@media (min-width: 481px)": {
                    margin: 14,
                    padding: 12,
                },
            },
        }),
        []
    );

    return (
        <EmotionProvider theme={theme}>
            <Global styles={globalStyle} />
            {children}
        </EmotionProvider>
    );
};

export const ThemeProvider = memo(ThemeProviderComponent);
