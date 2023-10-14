import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import loadingGif from "./assets/loading/boxes-loader.gif"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense fallback={
    <div
    className="d-flex justify-center align-center" 
    style={{ 
      height: "100vh", 
      width:"100%",
      position:'fixed',
      left:"0",
      top:"0", 
    }}
    >
      {/* <Spin indicator={antIcon} /> */}
      <img src={loadingGif} width={60}  alt="" />
    </div>
  }>
    <Component {...props} />
  </Suspense>
);
const MainLayout = Loadable(lazy(() => import("./layout/mainLayout")));
const LandingPage = Loadable(lazy(() => import("./pages/dashboard")));
const SignIn = Loadable(lazy(() => import("./pages/signIn")));
const SignUp = Loadable(lazy(() => import("./pages/signUp")));


const Packages = Loadable(lazy(() => import("./pages/sqPackages")));
const UserProfile = Loadable(lazy(() => import("./pages/userProfile")));
const UploadKYC = Loadable(lazy(() => import("./pages/uploadKYC")));



export const routes: any = [
  { path: "/", element: <Navigate to="home" /> },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <LandingPage />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "user-Profile",
        element: <UserProfile />,
      },
      {
        path: "upload-kyc",
        element: <UploadKYC />,
      },
    ],
  },
];
