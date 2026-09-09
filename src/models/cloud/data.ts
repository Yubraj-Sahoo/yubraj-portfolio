import type {CloudFile} from "./types.ts";

export const CLOUD_FILES_DATA: CloudFile[] = [
    {
        "fileName": "avatar.png",
        "type": "IMAGE",
        "access": "PUBLIC",
        "application": "portfolio",
        "url": "https://res.cloudinary.com/ojlrwmxy/image/upload/v1788809099/portfolio/upload/image/avatar.png"
    },
    {
        "fileName": "logo.png",
        "type": "IMAGE",
        "access": "PUBLIC",
        "application": "portfolio",
        "url": "https://res.cloudinary.com/ojlrwmxy/image/upload/v1788809179/portfolio/upload/image/logo.png"
    },
    {
        "fileName": "Yubraj-Resume.pdf",
        "type": "IMAGE",
        "access": "PRIVATE",
        "application": "portfolio",
        "url": ""
    },
]

export const cloudUrls: Record<string, string> = CLOUD_FILES_DATA.reduce((acc, file) => {
    acc[file.fileName] = file.url;
    return acc;
}, {} as Record<string, string>);