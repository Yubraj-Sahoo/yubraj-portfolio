import {API_ENDPOINTS} from "../constants/endpoints.ts";
import {FileNames} from "../constants/fileNames.ts";
import {AccessType} from "../enums/accessType.ts";

export const downloadResume = async () => {
    try {
        const fileUrl = `${API_ENDPOINTS.FILE(FileNames.RESUME)}?access=${AccessType.PRIVATE}`;

        // 1. Open a blank window synchronously to avoid popup blockers
        const pdfWindow = window.open("", "_blank");

        // 2. Fetch the actual Cloudinary URL from the backend
        const response = await fetch(fileUrl);

        if (!response.ok) {
            if (pdfWindow) pdfWindow.close();
            throw new Error(`Failed to fetch resume: ${response.status}`);
        }

        // The backend returns a JSON string, which is the Cloudinary URL
        const cloudinaryUrl = await response.json();

        // 3. Open the actual PDF in the new tab
        if (pdfWindow) {
            pdfWindow.location.href = cloudinaryUrl;
        }

        // 4. Fetch the PDF data from Cloudinary to force a download with the custom filename
        const pdfResponse = await fetch(cloudinaryUrl);
        if (!pdfResponse.ok) {
            throw new Error(`Failed to fetch PDF data: ${pdfResponse.status}`);
        }

        const blob = await pdfResponse.blob();
        const pdfBlob = new Blob([blob], { type: "application/pdf" });
        const pdfUrl = URL.createObjectURL(pdfBlob);

        const downloadLink = document.createElement("a");
        downloadLink.href = pdfUrl;
        downloadLink.download = FileNames.RESUME;
        
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        // Cleanup
        const ttl = import.meta.env.VITE_BLOB_URL_TTL 
            ? parseInt(import.meta.env.VITE_BLOB_URL_TTL, 10) 
            : 60000;

        setTimeout(() => {
            URL.revokeObjectURL(pdfUrl);
        }, ttl);

    } catch (error) {
        console.error("Error opening resume:", error);
    }
};