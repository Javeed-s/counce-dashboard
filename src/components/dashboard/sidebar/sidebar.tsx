import React, { useEffect, memo, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import * as SettingSelector from '../../../lib/global-constant/selectors';
import topHeader5 from '../../../assets/images/dashboard/CI.webp';
import { useSelector } from 'react-redux';
import VerticalNav from './vertical-nav';

// Define the props interface
interface SidebarProps {
    app_name:any
}

const Sidebar: React.FC<SidebarProps> = memo(() => {
  // Type the selectors
  const sidebarColor = useSelector(SettingSelector.sidebar_color);
    const sidebarHide = useSelector(SettingSelector.sidebar_show); // array
    const sidebarType = useSelector(SettingSelector.sidebar_type); // array
    const sidebarMenuStyle = useSelector(SettingSelector.sidebar_menu_style);
  

  const minisidebar = (): void => {
    const asideElement = document.getElementsByTagName('ASIDE')[0];
    if (asideElement) {
      asideElement.classList.toggle('sidebar-mini');
    }
  };
 
  useEffect(() => {
    const scrollbarElement :any = document.querySelector('#my-scrollbar');
    if (scrollbarElement) {
      Scrollbar.init(scrollbarElement);
    } else {
      console.error('#my-scrollbar element not found');
    }

    const handleResize = (): void => {
        const tabs = document.querySelectorAll('.nav');
        const sidebarResponsive = document.querySelector('[data-sidebar="responsive"]');
        if (window.innerWidth < 1025) {
          tabs.forEach((elem) => {
            if (
              !elem.classList.contains('flex-column') &&
              elem.classList.contains('nav-tabs') &&
              elem.classList.contains('nav-pills')
            ) {
              elem.classList.add('flex-column', 'on-resize');
            }
          });
          if (sidebarResponsive && !sidebarResponsive.classList.contains('sidebar-mini')) {
            sidebarResponsive.classList.add('sidebar-mini', 'on-resize');
          }
        } else {
          tabs.forEach((elem) => {
            if (elem.classList.contains('on-resize')) {
              elem.classList.remove('flex-column', 'on-resize');
            }
          });
          if (sidebarResponsive && sidebarResponsive.classList.contains('sidebar-mini')) {
            sidebarResponsive.classList.remove('sidebar-mini', 'on-resize');
          }
        }
      };
    
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <Fragment>
      <aside
        className={`${sidebarColor} ${sidebarType ? sidebarType.join(' ') : ''} ${sidebarMenuStyle} ${
            sidebarHide && sidebarHide.length > 0 ? 'sidebar-none' : 'sidebar'
          } sidebar-base`}
          data-sidebar="responsive"
      >
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <Link to="/dashboard" className="navbar-brand">
            <img src={topHeader5} alt="logo" width="80%" />
          </Link>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={minisidebar}
          >
            <i className="icon">
              <svg
                width="20"
                className="icon-20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 12.2744L19.25 12.2744"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </i>
          </div>
        </div>
        <div className="pt-0 sidebar-body data-scrollbar" data-scroll="1" id="my-scrollbar">
          <div className="sidebar-list navbar-collapse" id="sidebar">
            <VerticalNav />
          </div>
        </div>
        <div className="sidebar-footer"></div>
      </aside>
    </Fragment>
  );
});

export default Sidebar;
