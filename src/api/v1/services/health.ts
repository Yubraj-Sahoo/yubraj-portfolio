import {API_ENDPOINTS} from "../constants/endpoints.ts";

export const checkHealthAPI = async (): Promise<boolean> => {
    try {
        const baseUrl = import.meta.env.VITE_API_URL || '';
        const response = await fetch(`${baseUrl}${API_ENDPOINTS.HEALTH}`);

        if (response.ok) {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("json")) {
                const data = await response.json();
                return data.status === 'UP';
            }
        }
        console.log(`Health check failed with status: ${response.status} and url : ${baseUrl}${API_ENDPOINTS.HEALTH} with response: ${await response.text()}`);
        return false;
    } catch (error) {
        console.log(`Health check failed with error: ${error}`);
        return false;
    }
};
