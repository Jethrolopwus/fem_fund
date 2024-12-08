/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_APPKIT_PROJECT_ID: string;
    // Add other environment variables as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
