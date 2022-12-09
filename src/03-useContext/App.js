import React from "react";
import { AppProvider } from "./appContext";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";

export const App = () => {
  return (
    <AppProvider>
      <div>
        <Content />
        <Sidebar />
      </div>
    </AppProvider>
  );
};
