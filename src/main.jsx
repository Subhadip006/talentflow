import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";
import { worker } from "./mocks/browser";
import { dbInit } from "./db";

const queryClient = new QueryClient();

async function init() {
  await dbInit();

const isLocalhost =
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

if (import.meta.env.DEV && isLocalhost) {
  try {
    await worker.start({ onUnhandledRequest: "bypass" });
    console.log("[MSW] Worker started");
  } catch (err) {
    console.warn("[MSW] Failed to start worker:", err);
  }
} else if (import.meta.env.DEV) {
  console.warn("[MSW] Worker not started: insecure context");
}


  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

init();
