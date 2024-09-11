import { useEffect, memo, Fragment, useContext } from "react";
import { useLocation, Outlet } from "react-router-dom";


// react-bootstrap
import { Button } from "react-bootstrap";
// footer

import * as SettingSelector from '../../lib/global-constant/selectors';

import { useSelector } from "react-redux";
import Loader from "../../utils/loader";
import Sidebar from "../dashboard/sidebar/sidebar";
import Footer from "../dashboard/sidebar/footer";
import Header from "../dashboard/sidebar/header";
import SubHeader from "../dashboard/sidebar/sub-header";

// Define the type for the ShepherdTourContext
interface TourContext {
  start: () => void;
}

// const Tour: React.FC = () => {
//   const tour = useContext(ShepherdTourContext:any);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     if (
//       pathname === "/dashboard" &&
//       sessionStorage.getItem("tour") !== "true"
//     ) {
//       tour?.start();
//     }
//   }, [pathname, tour]);

//   return <Fragment></Fragment>;
// };

const home: React.FC = memo(() => {
  const appName = useSelector(SettingSelector.app_name);

  return (
    <Fragment>
      <Loader />
      <Sidebar app_name={appName} />
      {/* <Tour /> */}
      <main className="main-content">
        <div className="position-relative">
          <Header />
          <SubHeader />
        </div>
        <div className="py-0 conatiner-fluid content-inner mt-n5">
        
          <Outlet />
        </div>
        <Footer />
      </main>
      {/* <SettingOffCanvas /> */}
    </Fragment>
  );
});

home.displayName = "home";
export default home;
