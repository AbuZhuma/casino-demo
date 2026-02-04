import React from "react";
import { createRoot } from "react-dom/client";

import "./shared/i18n/i18n";
import { App } from "./app/App";
import { AppProviders } from "./shared/providers/AppProvider/AppProvider";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
  </React.StrictMode>
);

