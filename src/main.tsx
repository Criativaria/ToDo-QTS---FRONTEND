import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { ToDoPage } from "./pages/todo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToDoPage />
  </React.StrictMode>
);
