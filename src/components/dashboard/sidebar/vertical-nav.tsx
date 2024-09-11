import React, {useState, useContext,memo,Fragment} from 'react'
import { Link, useLocation} from 'react-router-dom'
import {Accordion, useAccordionButton, AccordionContext} from 'react-bootstrap'


const VerticalNav = memo((props) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [active, setActive] = useState('')
    //location
    let location = useLocation();
    return (
       <Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
                <li className="nav-item static-item">
                   
                </li>
                <li className={`${location.pathname === '/dashboard' ? 'active' : ''} nav-item `}>
                    <Link className={`${location.pathname === '/dashboard' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard" onClick={() => {}}>
                        <i className="icon">
                            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="currentColor"></path>
                            </svg>
                        </i>
                        <span className="item-name">Dashboard</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/dashboard/service/service' ? 'active' : ''} nav-item `} >
                    <Link className={`${location.pathname === '/dashboard/service/service' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/service/service" onClick={() => {}}>
                        <i className="icon">
                        <svg  width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-20"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.4023 13.58C20.76 13.77 21.036 14.07 21.2301 14.37C21.6083 14.99 21.5776 15.75 21.2097 16.42L20.4943 17.62C20.1162 18.26 19.411 18.66 18.6855 18.66C18.3278 18.66 17.9292 18.56 17.6022 18.36C17.3365 18.19 17.0299 18.13 16.7029 18.13C15.6911 18.13 14.8429 18.96 14.8122 19.95C14.8122 21.1 13.872 22 12.6968 22H11.3069C10.1215 22 9.18125 21.1 9.18125 19.95C9.16081 18.96 8.31259 18.13 7.30085 18.13C6.96361 18.13 6.65702 18.19 6.40153 18.36C6.0745 18.56 5.66572 18.66 5.31825 18.66C4.58245 18.66 3.87729 18.26 3.49917 17.62L2.79402 16.42C2.4159 15.77 2.39546 14.99 2.77358 14.37C2.93709 14.07 3.24368 13.77 3.59115 13.58C3.87729 13.44 4.06125 13.21 4.23498 12.94C4.74596 12.08 4.43937 10.95 3.57071 10.44C2.55897 9.87 2.23194 8.6 2.81446 7.61L3.49917 6.43C4.09191 5.44 5.35913 5.09 6.38109 5.67C7.27019 6.15 8.425 5.83 8.9462 4.98C9.10972 4.7 9.20169 4.4 9.18125 4.1C9.16081 3.71 9.27323 3.34 9.4674 3.04C9.84553 2.42 10.5302 2.02 11.2763 2H12.7172C13.4735 2 14.1582 2.42 14.5363 3.04C14.7203 3.34 14.8429 3.71 14.8122 4.1C14.7918 4.4 14.8838 4.7 15.0473 4.98C15.5685 5.83 16.7233 6.15 17.6226 5.67C18.6344 5.09 19.9118 5.44 20.4943 6.43L21.179 7.61C21.7718 8.6 21.4447 9.87 20.4228 10.44C19.5541 10.95 19.2475 12.08 19.7687 12.94C19.9322 13.21 20.1162 13.44 20.4023 13.58ZM9.10972 12.01C9.10972 13.58 10.4076 14.83 12.0121 14.83C13.6165 14.83 14.8838 13.58 14.8838 12.01C14.8838 10.44 13.6165 9.18 12.0121 9.18C10.4076 9.18 9.10972 10.44 9.10972 12.01Z" fill="currentColor"></path>                            </svg>                        
                        </i>
                        <span className="item-name">Service</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/dashboard/events/events' ? 'active' : ''} nav-item `} >
                    <Link className={`${location.pathname === '/dashboard/events/events' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/events/events" onClick={() => {}}>
                        <i className="icon">
                        <svg  width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-20"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.9 2H15.07C17.78 2 19.97 3.07 20 5.79V20.97C20 21.14 19.96 21.31 19.88 21.46C19.75 21.7 19.53 21.88 19.26 21.96C19 22.04 18.71 22 18.47 21.86L11.99 18.62L5.5 21.86C5.351 21.939 5.18 21.99 5.01 21.99C4.45 21.99 4 21.53 4 20.97V5.79C4 3.07 6.2 2 8.9 2ZM8.22 9.62H15.75C16.18 9.62 16.53 9.269 16.53 8.83C16.53 8.39 16.18 8.04 15.75 8.04H8.22C7.79 8.04 7.44 8.39 7.44 8.83C7.44 9.269 7.79 9.62 8.22 9.62Z" fill="currentColor"></path></svg>                        
                        </i>
                        <span className="item-name">Events</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/dashboard/timeline/timeline' ? 'active' : ''} nav-item `} >
                    <Link className={`${location.pathname === '/dashboard/timeline/timeline' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/timeline/timeline" onClick={() => {}}>
                        <i className="icon">
                        <svg  width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-20"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C6.48 22 2 17.53 2 12C2 6.48 6.48 2 12 2C17.53 2 22 6.48 22 12C22 17.53 17.53 22 12 22ZM15.19 15.71C15.31 15.78 15.44 15.82 15.58 15.82C15.83 15.82 16.08 15.69 16.22 15.45C16.43 15.1 16.32 14.64 15.96 14.42L12.4 12.3V7.68C12.4 7.26 12.06 6.93 11.65 6.93C11.24 6.93 10.9 7.26 10.9 7.68V12.73C10.9 12.99 11.04 13.23 11.27 13.37L15.19 15.71Z" fill="currentColor"></path>                            </svg>                        
                        </i>
                        <span className="item-name">Timeline</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/dashboard/upload/upload' ? 'active' : ''} nav-item `} >
                    <Link className={`${location.pathname === '/dashboard/upload/upload' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/upload/upload" onClick={() => {}}>
                        <i className="icon">
                        <svg  width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-20">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9455 12.89C14.2327 13.18 14.698 13.18 14.9851 12.89C15.2822 12.6 15.2822 12.13 14.995 11.84L12.1535 8.96C12.0842 8.89 12.005 8.84 11.9158 8.8C11.8267 8.76 11.7376 8.74 11.6386 8.74C11.5396 8.74 11.4406 8.76 11.3515 8.8C11.2624 8.84 11.1832 8.89 11.1139 8.96L8.28218 11.84C7.99505 12.13 7.99505 12.6 8.28218 12.89C8.56931 13.18 9.03465 13.18 9.32178 12.89L10.896 11.29V16.12C10.896 16.53 11.2228 16.86 11.6386 16.86C12.0446 16.86 12.3713 16.53 12.3713 16.12V11.29L13.9455 12.89ZM19.3282 9.02561C19.5609 9.02292 19.8143 9.02 20.0446 9.02C20.2921 9.02 20.5 9.22 20.5 9.47V17.51C20.5 19.99 18.5 22 16.0446 22H8.17327C5.58911 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.4901 2 7.96535 2H13.2525C13.5 2 13.7079 2.21 13.7079 2.46V5.68C13.7079 7.51 15.1931 9.01 17.0149 9.02C17.4313 9.02 17.801 9.02315 18.1258 9.02591C18.3801 9.02807 18.6069 9.03 18.8069 9.03C18.9479 9.03 19.1306 9.02789 19.3282 9.02561ZM19.6047 7.566C18.7908 7.569 17.8324 7.566 17.1423 7.559C16.0472 7.559 15.1452 6.648 15.1452 5.542V2.906C15.1452 2.475 15.6621 2.261 15.9581 2.572C16.7204 3.37179 17.8872 4.59739 18.8736 5.63346C19.2735 6.05345 19.6437 6.44229 19.9452 6.759C20.2334 7.062 20.0215 7.565 19.6047 7.566Z" fill="currentColor"></path>                            </svg>                        
                        </i>
                        <span className="item-name">Upload</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/dashboard/knowledge/knowledge' ? 'active' : ''} nav-item `} >
                    <Link className={`${location.pathname === '/dashboard/knowledge/knowledge' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/knowledge/knowledge" onClick={() => {}}>
                        <i className="icon">
                        <svg  width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-20">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81 2H16.191C19.28 2 21 3.78 21 6.83V17.16C21 20.26 19.28 22 16.191 22H7.81C4.77 22 3 20.26 3 17.16V6.83C3 3.78 4.77 2 7.81 2ZM8.08 6.66V6.65H11.069C11.5 6.65 11.85 7 11.85 7.429C11.85 7.87 11.5 8.22 11.069 8.22H8.08C7.649 8.22 7.3 7.87 7.3 7.44C7.3 7.01 7.649 6.66 8.08 6.66ZM8.08 12.74H15.92C16.35 12.74 16.7 12.39 16.7 11.96C16.7 11.53 16.35 11.179 15.92 11.179H8.08C7.649 11.179 7.3 11.53 7.3 11.96C7.3 12.39 7.649 12.74 8.08 12.74ZM8.08 17.31H15.92C16.319 17.27 16.62 16.929 16.62 16.53C16.62 16.12 16.319 15.78 15.92 15.74H8.08C7.78 15.71 7.49 15.85 7.33 16.11C7.17 16.36 7.17 16.69 7.33 16.95C7.49 17.2 7.78 17.35 8.08 17.31Z" fill="currentColor"></path></svg>                        
                        </i>
                        <span className="item-name">Knowledge</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/dashboard/avalibale-credits/avaliableCredits' ? 'active' : ''} nav-item `} >
                    <Link className={`${location.pathname === '/dashboard/avalibale-credits/avaliableCredits' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/avalibale-credits/avaliableCredits" onClick={() => {}}>
                        <i className="icon">
                        <svg  width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-20">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33049 2.00049H16.6695C20.0705 2.00049 21.9905 3.92949 22.0005 7.33049V16.6705C22.0005 20.0705 20.0705 22.0005 16.6695 22.0005H7.33049C3.92949 22.0005 2.00049 20.0705 2.00049 16.6705V7.33049C2.00049 3.92949 3.92949 2.00049 7.33049 2.00049ZM12.0495 17.8605C12.4805 17.8605 12.8395 17.5405 12.8795 17.1105V6.92049C12.9195 6.61049 12.7705 6.29949 12.5005 6.13049C12.2195 5.96049 11.8795 5.96049 11.6105 6.13049C11.3395 6.29949 11.1905 6.61049 11.2195 6.92049V17.1105C11.2705 17.5405 11.6295 17.8605 12.0495 17.8605ZM16.6505 17.8605C17.0705 17.8605 17.4295 17.5405 17.4805 17.1105V13.8305C17.5095 13.5095 17.3605 13.2105 17.0895 13.0405C16.8205 12.8705 16.4805 12.8705 16.2005 13.0405C15.9295 13.2105 15.7805 13.5095 15.8205 13.8305V17.1105C15.8605 17.5405 16.2195 17.8605 16.6505 17.8605ZM8.21949 17.1105C8.17949 17.5405 7.82049 17.8605 7.38949 17.8605C6.95949 17.8605 6.59949 17.5405 6.56049 17.1105V10.2005C6.53049 9.88949 6.67949 9.58049 6.95049 9.41049C7.21949 9.24049 7.56049 9.24049 7.83049 9.41049C8.09949 9.58049 8.25049 9.88949 8.21949 10.2005V17.1105Z" fill="currentColor"></path></svg>                        
                        </i>
                        <span className="item-name">Avaliable credit</span>
                    </Link>
                </li>
 
            </Accordion>
       </Fragment>
    )
})

export default VerticalNav
