import React, { useEffect, lazy } from "react";
import { createBrowserRouter, Navigate, useLocation, useRoutes } from "react-router-dom";
import Loadable from "../utils/Loadable";
import { Dashboard } from "../WebApp/Dashboard";
import { ColumnChart } from "../WebApp/Dashboard/column-chart";
import { LineChart } from "../WebApp/Dashboard/line-chart";
import { PostsManagement } from "../WebApp/PostsManagement";
import { Setting } from "../WebApp/Setting";
import { path } from "./path";
import Layout1 from "../WebApp/Layout"

const Routes = ({}) => {
  const location = useLocation();

  const Layout = Loadable(lazy(() => import("../WebApp/Layout")));

  return useRoutes([
    {
      path: path.root,
      element: <Layout />,
      errorElement: <h1>Eror</h1>,
      children: [
        {
          path: path.dashboard,
          // index: true,
          element: <Dashboard />,
          errorElement: <h1>Eror</h1>,
          children: [
            {
              index: true,
              path: path.dasboard_sub,
              errorElement: <h1>Eror</h1>,
              element: <LineChart />,
            },
            {
              // index: true,
              path: path.dashboard_rev,
              errorElement: <h1>Eror</h1>,
              element: <ColumnChart />,
            },
          ],
        },
        {
          path: path.tab_post_mng,
          errorElement: <h1>Eror</h1>,
          index: true,
          element: <PostsManagement />,
        },
        {
          path: path.tab_settings,
          errorElement: <h1>Eror</h1>,
          index: true,
          element: <Setting />,
        },
      ],
    },
  ]);
};
export default Routes;

export const router = createBrowserRouter([
  {
    path: path.root,
    element: <Layout1 />,
    errorElement: <h1>Eror</h1>,
    children: [
      {
        path: path.dashboard,
        // index: true,
        element: <Dashboard />,
        errorElement: <h1>Eror</h1>,
        children: [
          {
            index: true,
            path: path.dasboard_sub,
            errorElement: <h1>Eror</h1>,
            element: <LineChart />,
          },
          {
            // index: true,
            path: path.dashboard_rev,
            errorElement: <h1>Eror</h1>,
            element: <ColumnChart />,
          },
        ],
      },
      {
        path: path.tab_post_mng,
        index: true,
        errorElement: <h1>Eror</h1>,
        element: <PostsManagement />,
      },
      {
        path: path.tab_settings,
        index: true,
        errorElement: <h1>Eror</h1>,
        element: <Setting />,
      },
    ],
  },
])