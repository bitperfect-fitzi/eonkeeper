import React from "react";
import ReactDOM from "react-dom/client";
import {theme} from "./theme.ts";
import {MantineProvider} from "@mantine/core";
import {App} from "./App.tsx";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MantineProvider theme={theme}><App/></MantineProvider>
    </React.StrictMode>
);
