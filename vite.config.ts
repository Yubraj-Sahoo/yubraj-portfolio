import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
    return {
        plugins: [react()],
        base: process.env.GITHUB_ACTIONS
            ? "/yubraj-portfolio/"
            : "/",
        test: {
            globals: true,
            environment: "jsdom",
            setupFiles: "./src/test/setup.ts",
            css: true,
        },
    };
});