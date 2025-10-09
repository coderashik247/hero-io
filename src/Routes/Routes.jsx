import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppsDetails/AppDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import { getApps } from "../utils";

export const installationLoader = async () => {
    const apps = getApps();
    return apps;
}



export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader:() => fetch('/appsData.json')
            },
            {
                path:'apps',
                element: <Apps></Apps>,
                loader:() => fetch('/appsData.json')
            },
            {
                path:'apps/:appsId',
                element: <AppDetails></AppDetails>,
                loader:() => fetch('/appsData.json')
            },
            {
                path:'/installation',
                element:<Installation></Installation>,
                loader: installationLoader,
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])