import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
// @ts-ignore
import { SmoothScroll } from 'mf2/ThemeProvider';
// @ts-ignore
import Navbar from 'mf2/Navbar';
// @ts-ignore
import CherrytopFramework from 'mf2/CherrytopFramework';
// @ts-ignore
import Stonetowerpizza from 'stonetowerpizza/App';
// @ts-ignore
import Openfitness from 'openfitness/App';
// @ts-ignore
import SmartiCamera from 'camera/App';
// @ts-ignore
import AiChat from 'aichat/App';
import App from '../App';
import { 
    aichatNavbarSchema, 
    familyappsNavbarSchema, 
    openfitnessNavbarSchema
} from '../config/navbarSchema';


const NavigationWrapper = (
    { children, ...props }: 
    { children: JSX.Element, [key: string]: any }
) => {
    const navigate = useNavigate();
    const { utilityStore } = props?.stores;
    // router.go(): has to be a function referring to the navigate inside of its router context
    const router = { go: (path: string) => navigate(path) };
    return (
        <>
            <Navbar layout={props.navbarSchema({ navigate, utilityStore })} />
            {/* These "providers" have to be inside of the router */}
            {/* This is kind of like a "map-staate-to-props" for all the microfrontends */}
            <SmoothScroll>
                {React.cloneElement(children, { ...props, router })}
            </SmoothScroll>
        </>
    );
};

// const CameraTest = (props: any) => {
//     console.log("CameraTest.props: ", props);
//     return (
//         <>This {console.log("Camera.props: ", "props")} is the camera route</>
//     )
// }


function AppRouter({ data, stores }: { data?: any, stores?: any }) {

    const appRoutes = [
        {
            path: "/",
            element: (<App appConfig={data} />),
            navbarSchema: familyappsNavbarSchema
        },
        {
            path: "/openfitness",
            element: (<Openfitness />),
            navbarSchema: openfitnessNavbarSchema
        },
        {
            path: "/aichat",
            element: (<AiChat />),
            navbarSchema: aichatNavbarSchema
        },
        {
            path: "/cherrytopframework",
            element: (<CherrytopFramework />),
            navbarSchema: familyappsNavbarSchema
        },
        {
            path: "/stonetowerpizza",
            element: (<Stonetowerpizza />),
            navbarSchema: familyappsNavbarSchema
        },
        {
            path: "/camera",
            element: (<SmartiCamera />),
            navbarSchema: familyappsNavbarSchema
        },
        {
            path: "/test",
            element: (<div style={{ marginTop: "100px" }}>404</div>),
        },
    ].map((route) => ({
        id: route.path,
        ...route,
        element: (
            <NavigationWrapper navbarSchema={route?.navbarSchema || {}} stores={stores}>
                {route.element}
            </NavigationWrapper>
        )
    }));

    const appRouter = createBrowserRouter(appRoutes);

    return <RouterProvider router={appRouter} />;
};

export default AppRouter;
