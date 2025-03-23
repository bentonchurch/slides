import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "./routes/index.js";
import { ImportPage } from "./routes/import/index.js";

const router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "import/",
        element: <ImportPage />,
      },
    ],
  },
]);

export { router };