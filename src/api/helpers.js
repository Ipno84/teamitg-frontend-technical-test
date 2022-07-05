/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}
