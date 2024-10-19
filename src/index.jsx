import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme.js";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      gcTime: 10 * (60 * 1000)
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
    <ReactQueryDevtools/>
  </QueryClientProvider>
);
