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
        return false;
    } catch (error) {
        return false;
    }
};
