// eslint-disable-next-line no-unused-vars
import { request } from "./helpers";

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
    try {
        const initialVehicles = await request("/api/vehicles.json");
        const vehicles = await Promise.all(
            initialVehicles.map(async (vehicle) => {
                try {
                    const vehicleDetails = await request(vehicle.apiUrl);
                    return {
                        ...vehicle,
                        ...vehicleDetails,
                    };
                } catch (error) {
                    return vehicle;
                }
            })
        );
        return vehicles.filter((vehicle) => vehicle.price);
    } catch (error) {
        throw error;
    }
}
