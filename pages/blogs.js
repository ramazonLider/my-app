import Image from "next/image"
import "@/styles/Home.module";w

export default function Blogs() {
    return (
        <>
            <header className="navbar navbar-top navbar-expand-lg navbar-fixed">
                <div className="container justify-content-between">
                    <a className="navbar-brand" href="/">
                        <Image width="107" src="assets/images/logo.svg" height={100} alt="" />
                    </a>
                    <a className="navbar-toggle" href="#navbar-mobile-style-2" data-fancybox data-base-className="fancybox-navbar" data-keyboard="false" data-auto-focus="false" data-touch="false" data-close-existing="true" data-small-btn="false" data-toolbar="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <ul className="nav navbar-nav">
                        <li className="nav-item navbar-dropdown navbar-dropdown-mega">
                            <a href="/" className="nav-link">
                                <span className="nav-link-name">home</span>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item navbar-dropdown">
                            <a href="{% url 'projects' %}" className="nav-link">
                                <span className="nav-link-name">projects</span>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item navbar-dropdown active">
                            <a href="{% url 'blogs' %}" className="nav-link">
                                <span className="nav-link-name">blogs</span>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav nav-gap-sm navbar-nav nav-social align-items-center">
                        <li className="nav-item">
                            <a href="https://facebook.com/runwebrun" className="nav-link">
                                <svg width="7" height="15" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.17421 3.65234H9.99996V0.154687C9.68557 0.107422 8.60224 0 7.34088 0C4.70831 0 2.90529 1.82188 2.90529 5.16914V8.25H0V12.1602H2.90529V22H6.46588V12.1602H9.25375L9.69693 8.25H6.46588V5.55586C6.46588 4.42578 6.7424 3.65234 8.17421 3.65234Z" fill="currentColor" />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://twitter.com/runwebrun" className="nav-link">
                                <svg width="17" height="14" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.0706 5.51356C22.086 5.73504 22.086 5.95656 22.086 6.17804C22.086 12.9334 17.0783 20.7172 7.92575 20.7172C5.10601 20.7172 2.48661 19.8787 0.283203 18.4232C0.683835 18.4707 1.069 18.4865 1.48505 18.4865C3.81167 18.4865 5.95347 17.6797 7.6638 16.3033C5.47581 16.2558 3.64221 14.7845 3.01046 12.7594C3.31865 12.8069 3.6268 12.8385 3.9504 12.8385C4.39723 12.8385 4.84411 12.7752 5.2601 12.6645C2.97968 12.1898 1.2693 10.1332 1.2693 7.64935V7.58609C1.93183 7.96579 2.70231 8.20309 3.5189 8.2347C2.17837 7.31709 1.30013 5.75086 1.30013 3.97894C1.30013 3.02972 1.54661 2.15959 1.97807 1.40019C4.42801 4.50103 8.11063 6.52604 12.24 6.74756C12.163 6.36787 12.1168 5.97239 12.1168 5.57687C12.1168 2.76076 14.3356 0.466797 17.0937 0.466797C18.5266 0.466797 19.8209 1.0838 20.73 2.0805C21.8548 1.85902 22.9334 1.43184 23.8887 0.846495C23.5189 2.03307 22.7331 3.02977 21.7008 3.66255C22.7023 3.55186 23.673 3.26702 24.5667 2.87155C23.8888 3.88403 23.0413 4.78577 22.0706 5.51356Z" fill="currentColor" />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://instagram.com/runwebrun" className="nav-link">
                                <svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2827 5.3166C8.24087 5.3166 5.78732 7.8148 5.78732 10.912C5.78732 14.0092 8.24087 16.5074 11.2827 16.5074C14.3245 16.5074 16.7781 14.0092 16.7781 10.912C16.7781 7.8148 14.3245 5.3166 11.2827 5.3166ZM11.2827 14.5497C9.31698 14.5497 7.70998 12.9183 7.70998 10.912C7.70998 8.90563 9.3122 7.27425 11.2827 7.27425C13.2532 7.27425 14.8554 8.90563 14.8554 10.912C14.8554 12.9183 13.2484 14.5497 11.2827 14.5497ZM18.2846 5.08772C18.2846 5.81331 17.7107 6.39282 17.0029 6.39282C16.2902 6.39282 15.7211 5.80844 15.7211 5.08772C15.7211 4.36699 16.295 3.78261 17.0029 3.78261C17.7107 3.78261 18.2846 4.36699 18.2846 5.08772ZM21.9243 6.4123C21.843 4.66404 21.4508 3.11545 20.1929 1.83956C18.9399 0.563678 17.419 0.164355 15.7019 0.0766992C13.9323 -0.0255664 8.62827 -0.0255664 6.85865 0.0766992C5.14643 0.159486 3.62552 0.558809 2.36766 1.83469C1.10979 3.11058 0.722392 4.65917 0.636302 6.40743C0.535865 8.20925 0.535865 13.6098 0.636302 15.4117C0.717609 17.1599 1.10979 18.7085 2.36766 19.9844C3.62552 21.2603 5.14165 21.6596 6.85865 21.7473C8.62827 21.8495 13.9323 21.8495 15.7019 21.7473C17.419 21.6645 18.9399 21.2652 20.1929 19.9844C21.446 18.7085 21.8382 17.1599 21.9243 15.4117C22.0247 13.6098 22.0247 8.21412 21.9243 6.4123ZM19.6381 17.345C19.2651 18.2995 18.5429 19.0348 17.6007 19.4195C16.1898 19.9893 12.8419 19.8578 11.2827 19.8578C9.72352 19.8578 6.37081 19.9844 4.96469 19.4195C4.02727 19.0397 3.30507 18.3043 2.92724 17.345C2.36766 15.9084 2.49679 12.4995 2.49679 10.912C2.49679 9.32443 2.37244 5.91071 2.92724 4.47899C3.30029 3.52451 4.02248 2.78917 4.96469 2.40446C6.37559 1.83469 9.72352 1.96618 11.2827 1.96618C12.8419 1.96618 16.1946 1.83956 17.6007 2.40446C18.5381 2.7843 19.2603 3.51964 19.6381 4.47899C20.1977 5.91558 20.0686 9.32443 20.0686 10.912C20.0686 12.4995 20.1977 15.9133 19.6381 17.345Z" fill="currentColor" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div className="navbar navbar-mobile navbar-mobile-style-2" id="navbar-mobile-style-2">
                <div className="shape justify-content-end">
                    <svg data-rellax-speed="0" width="544" height="362" viewBox="0 0 544 362" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="320.5" cy="41.5" r="320.5" fill="#ececec" />
                    </svg>
                </div>
                <div className="navbar-head">
                    <div className="container justify-content-between">
                        <a className="navbar-brand" href="index.html">
                            <Image width="107" src="assets/images/logo.svg" height={100} alt="" />
                        </a>
                        <a className="navbar-toggle" href="#" data-fancybox-close>
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                </div>
                <div className="container">
                    <div className="row gh-1 justify-content-center">
                        <div className="col-12 col-md-7 col-lg-5 col-xl-4">
                            <div className="navbar-body">
                                <ul className="nav navbar-nav navbar-nav-collapse">
                                    <li className="nav-item navbar-collapse">
                                        <a href="#navbarCollapseHome" className="nav-link collapsed" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="navbarCollapseHome">
                                            <span className="nav-link-name">home</span>
                                            <svg className="collapse-icon" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="nav-item navbar-collapse active">
                                        <a href="#navbarCollapseProjects" className="nav-link collapsed" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="navbarCollapseProjects">
                                            <span className="nav-link-name">projects</span>
                                            <svg className="collapse-icon" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="nav-item navbar-collapse">
                                        <a href="#navbarCollapsePages" className="nav-link collapsed" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="navbarCollapsePages">
                                            <span className="nav-link-name">pages</span>
                                            <svg className="collapse-icon" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-1 d-none d-md-block"></div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                            <div className="navbar-footer">
                                <div className="mb-60">
                                    <p className="lead mb-17 fw-medium">Contact info:</p>
                                    <ul className="list-group borderless font-size-17">
                                        <li className="list-group-item">Email: <a href="mailto:hello@themebau.com?subject=Test%20Address%20Email" className="text-decoration-none">hello@themebau.com</a></li>
                                        <li className="list-group-item">Phone: <a href="callto:+1 202-358-0309" className="text-decoration-none">+1 202-358-0309</a></li>
                                    </ul>
                                </div>
                                <div className="mb-60">
                                    <p className="lead mb-17 fw-medium">Address:</p>
                                    <ul className="list-group borderless font-size-17">
                                        <li className="list-group-item">2260 Lady Bug Drive,</li>
                                        <li className="list-group-item">New York, NY 10011</li>
                                    </ul>
                                </div>
                                <ul className="nav nav-gap-sm navbar-nav nav-social align-items-center mt-n10">
                                    <li className="nav-item">
                                        <a href="https://facebook.com/runwebrun" className="nav-link">
                                            <svg width="8" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.17421 3.65234H9.99996V0.154687C9.68557 0.107422 8.60224 0 7.34088 0C4.70831 0 2.90529 1.82188 2.90529 5.16914V8.25H0V12.1602H2.90529V22H6.46588V12.1602H9.25375L9.69693 8.25H6.46588V5.55586C6.46588 4.42578 6.7424 3.65234 8.17421 3.65234Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://twitter.com/runwebrun" className="nav-link">
                                            <svg width="20" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.0706 5.51356C22.086 5.73504 22.086 5.95656 22.086 6.17804C22.086 12.9334 17.0783 20.7172 7.92575 20.7172C5.10601 20.7172 2.48661 19.8787 0.283203 18.4232C0.683835 18.4707 1.069 18.4865 1.48505 18.4865C3.81167 18.4865 5.95347 17.6797 7.6638 16.3033C5.47581 16.2558 3.64221 14.7845 3.01046 12.7594C3.31865 12.8069 3.6268 12.8385 3.9504 12.8385C4.39723 12.8385 4.84411 12.7752 5.2601 12.6645C2.97968 12.1898 1.2693 10.1332 1.2693 7.64935V7.58609C1.93183 7.96579 2.70231 8.20309 3.5189 8.2347C2.17837 7.31709 1.30013 5.75086 1.30013 3.97894C1.30013 3.02972 1.54661 2.15959 1.97807 1.40019C4.42801 4.50103 8.11063 6.52604 12.24 6.74756C12.163 6.36787 12.1168 5.97239 12.1168 5.57687C12.1168 2.76076 14.3356 0.466797 17.0937 0.466797C18.5266 0.466797 19.8209 1.0838 20.73 2.0805C21.8548 1.85902 22.9334 1.43184 23.8887 0.846495C23.5189 2.03307 22.7331 3.02977 21.7008 3.66255C22.7023 3.55186 23.673 3.26702 24.5667 2.87155C23.8888 3.88403 23.0413 4.78577 22.0706 5.51356Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://instagram.com/runwebrun" className="nav-link">
                                            <svg width="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.2827 5.3166C8.24087 5.3166 5.78732 7.8148 5.78732 10.912C5.78732 14.0092 8.24087 16.5074 11.2827 16.5074C14.3245 16.5074 16.7781 14.0092 16.7781 10.912C16.7781 7.8148 14.3245 5.3166 11.2827 5.3166ZM11.2827 14.5497C9.31698 14.5497 7.70998 12.9183 7.70998 10.912C7.70998 8.90563 9.3122 7.27425 11.2827 7.27425C13.2532 7.27425 14.8554 8.90563 14.8554 10.912C14.8554 12.9183 13.2484 14.5497 11.2827 14.5497ZM18.2846 5.08772C18.2846 5.81331 17.7107 6.39282 17.0029 6.39282C16.2902 6.39282 15.7211 5.80844 15.7211 5.08772C15.7211 4.36699 16.295 3.78261 17.0029 3.78261C17.7107 3.78261 18.2846 4.36699 18.2846 5.08772ZM21.9243 6.4123C21.843 4.66404 21.4508 3.11545 20.1929 1.83956C18.9399 0.563678 17.419 0.164355 15.7019 0.0766992C13.9323 -0.0255664 8.62827 -0.0255664 6.85865 0.0766992C5.14643 0.159486 3.62552 0.558809 2.36766 1.83469C1.10979 3.11058 0.722392 4.65917 0.636302 6.40743C0.535865 8.20925 0.535865 13.6098 0.636302 15.4117C0.717609 17.1599 1.10979 18.7085 2.36766 19.9844C3.62552 21.2603 5.14165 21.6596 6.85865 21.7473C8.62827 21.8495 13.9323 21.8495 15.7019 21.7473C17.419 21.6645 18.9399 21.2652 20.1929 19.9844C21.446 18.7085 21.8382 17.1599 21.9243 15.4117C22.0247 13.6098 22.0247 8.21412 21.9243 6.4123ZM19.6381 17.345C19.2651 18.2995 18.5429 19.0348 17.6007 19.4195C16.1898 19.9893 12.8419 19.8578 11.2827 19.8578C9.72352 19.8578 6.37081 19.9844 4.96469 19.4195C4.02727 19.0397 3.30507 18.3043 2.92724 17.345C2.36766 15.9084 2.49679 12.4995 2.49679 10.912C2.49679 9.32443 2.37244 5.91071 2.92724 4.47899C3.30029 3.52451 4.02248 2.78917 4.96469 2.40446C6.37559 1.83469 9.72352 1.96618 11.2827 1.96618C12.8419 1.96618 16.1946 1.83956 17.6007 2.40446C18.5381 2.7843 19.2603 3.51964 19.6381 4.47899C20.1977 5.91558 20.0686 9.32443 20.0686 10.912C20.0686 12.4995 20.1977 15.9133 19.6381 17.345Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-wrap">
                <div className="container">
                    <div className="pt-60 pb-60 mt-10 mb-2 text-center">
                        <h1 className="mt-10 show-on-scroll" data-show-duration="600" data-show-distance="10">Our blog</h1>
                    </div>
                    <div className="isotope">
                        <ul className="nav justify-content-center isotope-options mb-60 pb-30 show-on-scroll" data-show-duration="500" data-show-delay="50">
                            <li className="nav-item active show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="100">
                                <a href="#" data-filter="all" className="nav-link">
                                    <div className="nav-link-name">all posts</div>
                                </a>
                            </li>
                            <li className="nav-item show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="150">
                                <a href="" data-filter="{{ part.name }}" className="nav-link">
                                    <div className="nav-link-name">dfsgvds</div>
                                </a>
                            </li>
                        </ul>
                        <div className="row justify-content-center gh-1 show-on-scroll" data-show-duration="700" data-show-delay="250">
                            <div className="col-12 col-lg-10 isotope-grid">
                                <div className="card card-blog card-horizontal card-md isotope-item" data-filters="{{blog.part.name}}">
                                    <a href="/" className="card-img">
                                    </a>
                                    <div className="card-body">
                                        <a href="/" className="card-title h5">fdsfss</a>
                                    <div className="card-date">sdfafsd</div>
                                    <p className="card-text">dasdf</p>
                                    <a href="/" className="btn btn-clean">read more<svg className='icon-arrow icon-arrow-right' width='25' height='10' viewBox='0 0 25 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M20 1L24 5L20 9' stroke='currentColor' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' />
                                        <path d='M7 5L24 5' stroke='currentColor' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' />
                                    </svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-100">
                </div>
            </div>
            <footer className="footer bg-dark text-white shape-parent overflow-hidden text-center pt-160 pb-60">
                <div className="shape align-items-end justify-content-center">
                    <svg data-rellax-speed="2" width="641" height="371" viewBox="0 0 641 371" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="320.5" cy="320.5" r="320.5" fill=" #202020" />
                    </svg>
                </div>
                <div className="container pt-4">
                    <ul className="nav align-items-center flex-column text-white mb-100">
                        <li className="nav-item">
                            <a href="mailto:hello@themebau.com?subject=Test%20Address%20Email" className="nav-link h2 mb-8 mb-md-30 d-none d-md-flex">hello@themebau.com</a>
                            <a href="mailto:hello@themebau.com?subject=Test%20Address%20Email" className="nav-link h4 mb-8 mb-md-30 d-md-none">hello@themebau.com</a>
                        </li>
                        <li className="nav-item">
                            <a href="callto:+99 758-97-89" className="nav-link h4 mt-8 mt-md-0">+99 758-97-89</a>
                        </li>
                    </ul>
                    <ul className="nav nav-social nav-gap-sm align-items-center justify-content-center mb-30 text-white">
                        <li className="nav-item">
                            <a href="https://facebook.com/runwebrun" className="nav-link">
                                <svg width="7" height="15" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.17421 3.65234H9.99996V0.154687C9.68557 0.107422 8.60224 0 7.34088 0C4.70831 0 2.90529 1.82188 2.90529 5.16914V8.25H0V12.1602H2.90529V22H6.46588V12.1602H9.25375L9.69693 8.25H6.46588V5.55586C6.46588 4.42578 6.7424 3.65234 8.17421 3.65234Z" fill="currentColor" />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://twitter.com/runwebrun" className="nav-link">
                                <svg width="17" height="15" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.0706 5.51356C22.086 5.73504 22.086 5.95656 22.086 6.17804C22.086 12.9334 17.0783 20.7172 7.92575 20.7172C5.10601 20.7172 2.48661 19.8787 0.283203 18.4232C0.683835 18.4707 1.069 18.4865 1.48505 18.4865C3.81167 18.4865 5.95347 17.6797 7.6638 16.3033C5.47581 16.2558 3.64221 14.7845 3.01046 12.7594C3.31865 12.8069 3.6268 12.8385 3.9504 12.8385C4.39723 12.8385 4.84411 12.7752 5.2601 12.6645C2.97968 12.1898 1.2693 10.1332 1.2693 7.64935V7.58609C1.93183 7.96579 2.70231 8.20309 3.5189 8.2347C2.17837 7.31709 1.30013 5.75086 1.30013 3.97894C1.30013 3.02972 1.54661 2.15959 1.97807 1.40019C4.42801 4.50103 8.11063 6.52604 12.24 6.74756C12.163 6.36787 12.1168 5.97239 12.1168 5.57687C12.1168 2.76076 14.3356 0.466797 17.0937 0.466797C18.5266 0.466797 19.8209 1.0838 20.73 2.0805C21.8548 1.85902 22.9334 1.43184 23.8887 0.846495C23.5189 2.03307 22.7331 3.02977 21.7008 3.66255C22.7023 3.55186 23.673 3.26702 24.5667 2.87155C23.8888 3.88403 23.0413 4.78577 22.0706 5.51356Z" fill="currentColor" />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://instagram.com/runwebrun" className="nav-link">
                                <svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2827 5.3166C8.24087 5.3166 5.78732 7.8148 5.78732 10.912C5.78732 14.0092 8.24087 16.5074 11.2827 16.5074C14.3245 16.5074 16.7781 14.0092 16.7781 10.912C16.7781 7.8148 14.3245 5.3166 11.2827 5.3166ZM11.2827 14.5497C9.31698 14.5497 7.70998 12.9183 7.70998 10.912C7.70998 8.90563 9.3122 7.27425 11.2827 7.27425C13.2532 7.27425 14.8554 8.90563 14.8554 10.912C14.8554 12.9183 13.2484 14.5497 11.2827 14.5497ZM18.2846 5.08772C18.2846 5.81331 17.7107 6.39282 17.0029 6.39282C16.2902 6.39282 15.7211 5.80844 15.7211 5.08772C15.7211 4.36699 16.295 3.78261 17.0029 3.78261C17.7107 3.78261 18.2846 4.36699 18.2846 5.08772ZM21.9243 6.4123C21.843 4.66404 21.4508 3.11545 20.1929 1.83956C18.9399 0.563678 17.419 0.164355 15.7019 0.0766992C13.9323 -0.0255664 8.62827 -0.0255664 6.85865 0.0766992C5.14643 0.159486 3.62552 0.558809 2.36766 1.83469C1.10979 3.11058 0.722392 4.65917 0.636302 6.40743C0.535865 8.20925 0.535865 13.6098 0.636302 15.4117C0.717609 17.1599 1.10979 18.7085 2.36766 19.9844C3.62552 21.2603 5.14165 21.6596 6.85865 21.7473C8.62827 21.8495 13.9323 21.8495 15.7019 21.7473C17.419 21.6645 18.9399 21.2652 20.1929 19.9844C21.446 18.7085 21.8382 17.1599 21.9243 15.4117C22.0247 13.6098 22.0247 8.21412 21.9243 6.4123ZM19.6381 17.345C19.2651 18.2995 18.5429 19.0348 17.6007 19.4195C16.1898 19.9893 12.8419 19.8578 11.2827 19.8578C9.72352 19.8578 6.37081 19.9844 4.96469 19.4195C4.02727 19.0397 3.30507 18.3043 2.92724 17.345C2.36766 15.9084 2.49679 12.4995 2.49679 10.912C2.49679 9.32443 2.37244 5.91071 2.92724 4.47899C3.30029 3.52451 4.02248 2.78917 4.96469 2.40446C6.37559 1.83469 9.72352 1.96618 11.2827 1.96618C12.8419 1.96618 16.1946 1.83956 17.6007 2.40446C18.5381 2.7843 19.2603 3.51964 19.6381 4.47899C20.1977 5.91558 20.0686 9.32443 20.0686 10.912C20.0686 12.4995 20.1977 15.9133 19.6381 17.345Z" fill="currentColor" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-copyright mb-5">© 2020-2022 | Themebau by RunWebRun.</div>
                </div>
            </footer>
        </>
    )
}