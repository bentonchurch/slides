import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import { ImportPage } from "./routes/import/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: null,
    children: [
      {
        path: "import/",
        element: <ImportPage />,
      },
    ],
  },
]);

export { router };