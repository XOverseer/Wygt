/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Shop } from "@/pages/Shop";
import { Consign } from "@/pages/Consign";
import { Updates } from "@/pages/Updates";
import { About } from "@/pages/About";
import { Visit } from "@/pages/Visit";
import { FAQ } from "@/pages/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "consign", element: <Consign /> },
      { path: "updates", element: <Updates /> },
      { path: "about", element: <About /> },
      { path: "visit", element: <Visit /> },
      { path: "faq", element: <FAQ /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
