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

  try {
    await worker.start({ onUnhandledRequest: "bypass" });
    console.log("[MSW] Worker started");
  } catch (err) {
    console.warn("[MSW] Failed to start worker:", err);
  }

  console.warn("[MSW] Worker not started: insecure context");



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
