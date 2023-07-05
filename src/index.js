import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import Videos from "./components/Videos/Videos";

const queryClient = new QueryClient();

const App = lazy(() => import("./App"));
const VideoDetail = lazy(() => import("./components/VideoDetail/VideoDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Videos /> },
      {
        path: "videos/:keyword",
        element: <Videos />,
      },
      {
        path: "videos/watch/:id",
        element: <VideoDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={<div className="h-screen w-screen bg-yt-black"></div>}
      >
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
