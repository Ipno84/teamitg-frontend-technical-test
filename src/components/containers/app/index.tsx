import React, { memo } from "react";

import VehicleList from "~/components/VehicleList";
import { Providers } from "~/components/containers/providers";
import { VehicleModal } from "../vehicle-modal";

/**
 * The main application container.
 * It renders the VehicleList and the VehicleModal.
 * All the application components are wrapper in the Providers component and a main tag
 *
 * @return {*} 
 */
const AppComponent: React.FC = () => {
    return (
        <Providers>
            <main role="main">
                <VehicleList />
                <VehicleModal />
            </main>
        </Providers>
    );
};

export const App = memo(AppComponent);
