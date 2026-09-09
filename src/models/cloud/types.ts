export interface CloudFile {
    fileName: string;
    type: 'IMAGE' | 'VIDEO' | 'RAW' | 'AUTO';
    access: 'PRIVATE' | 'PUBLIC';
    application: string;
    url: string;
}