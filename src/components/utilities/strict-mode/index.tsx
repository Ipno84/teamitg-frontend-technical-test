import React, { memo } from "react";

import { isDev } from "~/utilities/is-dev";

/**
 * Component that allow to switch between strict mode and non-strict mode.
 * It depends on environment variable `NODE_ENV` to determine if strict mode is enabled.
 * This is necessary due to an issue in react 18 https://stackoverflow.com/a/72585970
 *
 * @param {*} {
 *     children,
 * }
 * @return {*} 
 */
const StrictModeComponent: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    if (isDev()) return <>{children}</>;
    return <React.StrictMode>{children}</React.StrictMode>;
};

export const StrictMode = memo(StrictModeComponent);
