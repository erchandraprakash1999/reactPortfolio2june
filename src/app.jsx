import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/styles.css";
import myimg from "./assets/vinaynight.jpg";
import tictac from "./assets/tdownload.jfif";
import rest from "./assets/download (1).png";
import todo from "./assets/download.png";
import html from "./assets/html2.png"
import css from "./assets/css.png"
import js from "./assets/js.png"
import react from "./assets/react.png"
import github from "./assets/github.png"
import node from "./assets/node.png"
import express from "./assets/express.png"
import mongodb from "./assets/mongodb.png"
import sql from "./assets/sql.png"
import python from "./assets/python.png"
import java from "./assets/java.png"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const App = () => {
 
  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top" id="navbar">
        <a href="/" className="navbar-brand text-dark pl-5">
          <h4 className="heading">ER Vinay Kumar</h4>
        </a>
        <i
          className="fa fa-bars navbar-toggler"
          style={{ fontSize: "30px", color: "red" }}
          data-toggle="collapse"
          data-target="#menu"
        ></i>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ml-auto pr-5" id="navbarNav">
            <li className="nav-item text-dark">
              <a href="#" className="nav-link tabs active">
                HOME
              </a>
            </li>
            <li className="nav-item text-dark">
              <a href="#about" className="nav-link tabs">
                ABOUT US
              </a>
            </li>
            <li className="nav-item text-dark">
              <a href="#services" className="nav-link tabs">
                SERVICES
              </a>
            </li>
            <li className="nav-item text-dark">
              <a href="#portfolio" className="nav-link tabs">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item text-dark">
              <a href="#contact" className="nav-link tabs">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section style={{ backgroundColor: "red" }}>
        <div className="jumbotron jb">
          <div className="row">
            <div
              className="col-md-5 d-flex justify-content-center pl-4"
              style={{ marginTop: "15vh" }}
            >
              <img src={myimg} alt="" width="50%" id="self" />
            </div>
            <div className="col-md-6 pl-3" style={{ marginTop: "10vh" }}>
              <h5 className="smallh">INTRODUCTION</h5>
              <h1 className="largeh">I am Er Vinay Kumar</h1>
              <h1 className="largeh gradient-text">a Creative Software</h1>
              <h1 className="largeh gradient-text">Developer</h1>
              <p className="desch pr-5">
                As a Creative Software Developer, I combine my technical
                expertise with a deep understanding of design principles to
                create engaging digital solutions. My services include
              </p>
              <button
                className="introbtn text-light"
                style={{
                  background:
                    "linear-gradient(101.2deg, rgb(247, 0, 0) -21.9%, rgb(164, 50, 237) 92.2%)",
                  border: "none",
                }}
              >
                Browse Resume
              </button>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>

      <hr />

      <section id="about">
        <div className="jumbotron jb">
          <div className="row">
            <div className="col-md-6" style={{ paddingLeft: "60px" }}>
              <h1
                className="largeh"
                style={{
                  borderBottom: "2px solid transparent",
                  borderImage:
                    "linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0))",
                  borderImageSlice: "1",
                  width: "20%",
                }}
              >
                ABOUT_ME
              </h1>
              <p className="tabs pt-2" style={{ wordSpacing: "4px" }}>
                Full Stack & MERN Stack Developer based in <b>INDIA.</b>
              </p>
              <img src={myimg} alt="" width="80%" className="selfb mt-4" />
              <div className="pt-2">
                <span>
                  <i
                    className="fa-brands fa-facebook p-3 mr-1"
                    aria-hidden="true"
                    style={{
                      borderRadius: "50%",
                      border: "2px red solid",
                      color: "white",
                      backgroundColor: "lightcoral",
                    }}
                  ></i>
                </span>
                <span>
                  <i
                    className="fa-brands fa-instagram p-3 mr-1"
                    aria-hidden="true"
                    style={{
                      borderRadius: "50%",
                      border: "2px red solid",
                      color: "white",
                      backgroundColor: "lightcoral",
                    }}
                  ></i>
                </span>
                <span>
                  <i
                    className="fa-brands fa-twitter p-3 mr-1"
                    aria-hidden="true"
                    style={{
                      borderRadius: "50%",
                      border: "2px red solid",
                      color: "white",
                      backgroundColor: "lightcoral",
                    }}
                  ></i>
                </span>
                <span>
                  <i
                    className="fa-brands fa-linkedin p-3 mr-1"
                    aria-hidden="true"
                    style={{
                      borderRadius: "50%",
                      border: "2px red solid",
                      color: "white",
                      backgroundColor: "lightcoral",
                    }}
                  ></i>
                </span>
                <span>
                  <i
                    class="fa-brands fa-github p-3 mr-1"
                    aria-hidden="true"
                    style={{
                      borderRadius: "50%",
                      border: "2px red solid",
                      color: "white",
                      backgroundColor: "lightcoral",
                    }}
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-md-6" style={{ marginTop: "150px" }}>
              <h1 className="largeh">I am Vinay Kumar</h1>
              <h6 className="smallh">
                A Lead{" "}
                <span className="gradient-text">
                  Stack & Mern Stack Developer
                </span>{" "}
                based in <span className="gradient-text">INDIA</span>
              </h6>
              <p className="desch">
                As a Creative Software Developer, I combine my technical
                expertise with a deep understanding of design principles to
                create engaging digital solutions. My services include:
              </p>
              <div className="row">
                <div className="col-md-6 border">
                  <div className="desch m-3">
                    <span
                      style={{
                        fontSize: "medium",
                        fontWeight: 600,
                        paddingRight: "10px",
                        borderRight: "0.5px black solid",
                      }}
                    >
                      Birthday
                    </span>
                    <p style={{ display: "inline" }} className="mr-4">
                      18 July 2002
                    </p>
                  </div>
                  <div className="desch m-3">
                    <span
                      style={{
                        fontSize: "medium",
                        fontWeight: 600,
                        paddingRight: "10px",
                        borderRight: "0.5px black solid",
                      }}
                    >
                      Age
                    </span>
                    <p style={{ display: "inline" }} className="mr-4">
                      22 Yr
                    </p>
                  </div>
                  <div className="desch m-3">
                    <span
                      style={{
                        fontSize: "medium",
                        fontWeight: 600,
                        paddingRight: "10px",
                        borderRight: "0.5px black solid",
                      }}
                    >
                      Residence
                    </span>
                    <p style={{ display: "inline" }} className="mr-4">
                      INDIA
                    </p>
                  </div>
                  <div className="desch m-3">
                    <span
                      style={{
                        fontSize: "medium",
                        fontWeight: 600,
                        paddingRight: "10px",
                        borderRight: "0.5px black solid",
                      }}
                    >
                      Address
                    </span>
                    <p style={{ display: "inline" }} className="mr-4">
                      Lucknow Uttar Pradesh, INDIA
                    </p>
                  </div>
                  <div className="desch m-3">
                    <span
                      style={{
                        fontSize: "medium",
                        fontWeight: 600,
                        paddingRight: "10px",
                        borderRight: "0.5px black solid",
                      }}
                    >
                      Freelance
                    </span>
                    <p style={{ display: "inline" }} className="mr-4">
                      Available
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      className="introbtn text-light"
                      style={{
                        background:
                          "linear-gradient(101.2deg, rgb(247, 0, 0) -21.9%, rgb(164, 50, 237) 92.2%)",
                        border: "none",
                      }}
                    >
                      Browse Resume
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border">
                  <div className="desch m-3">
                    <span
                      style={{
                        fontSize: "medium",
                        fontWeight: 600,
                        paddingRight: "10px",
                        borderRight: "0.5px black solid",
                      }}
                    >
                      E-mail
                    </span>
                    <p style={{ display: "inline" }} className="mr-2">
                      vinay15381@gmail.com
                    </p>
                  </div>
                  <div className="desch m-3">
                    <span
                      style={{
                        fontSize: "medium",
                        fontWeight: 600,
                        paddingRight: "10px", 
                        borderRight: "0.5px black solid",
                      }}
                    >
                      Phone
                    </span>
                    <p style={{ display: "inline" }} className="mr-4">
                      +91 9336713280
                    </p>
                  </div>
                  <div className="desch m-3">
                    <span
                      style={{
                        fontSize: "medium",
                        fontWeight: 600,
                        paddingRight: "10px",
                        borderRight: "0.5px black solid",
                      }}
                    >
                      Skype
                    </span>
                    <p style={{ display: "inline" }} className="mr-4">
                      vinay15381
                    </p>
                  </div>
                  <div className="desch m-3">
                    <span
                      style={{
                        fontSize: "medium",
                        fontWeight: 600,
                        paddingRight: "10px",
                        borderRight: "0.5px black solid",
                      }}
                    >
                      Experience
                    </span>
                    <p style={{ display: "inline" }} className="mr-4">
                      1+ years
                    </p>
                  </div>
                  <div className="desch m-3">
                    <span
                      style={{
                        fontSize: "medium",
                        fontWeight: 600,
                        paddingRight: "10px",
                        borderRight: "0.5px black solid",
                      }}
                    >
                      Hourly Rate
                    </span>
                    <p style={{ display: "inline" }} className="mr-4">
                      4$
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      
      <section >
        <div className="jumbotron jb">
          <div className="row">
            <div className="col-md-6" style={{ paddingLeft: "60px" }}>
              <h1
                className="largeh"
                style={{
                  borderBottom: "2px solid transparent",
                  borderImage:
                    "linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0))",
                  borderImageSlice: "1",
                  width: "20%",
                }}
              >
                MY_SKILLS
              </h1>
              <p className="tabs pt-2" style={{ wordSpacing: "4px" }}>
                Full Stack & MERN Stack Developer based in <b>INDIA.</b>
              </p>
              <p>
                <h6 style={{ display: "inline" }}>HTML</h6>
                <span style={{ marginLeft: "70px" }}>25%</span>
                <div className="progress">
                  <h4></h4>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style="width: 25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </p>
              <p>
                <h6 style={{ display: "inline" }}>CSS</h6>
                <span style={{ marginLeft: "220px" }}>50%</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style="width: 50%"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </p>
              <p>
                <h6 style={{ display: "inline" }}>HTML</h6>
                <span style={{ marginLeft: "270px" }}>70%</span>
                <div className="progress">
                  <h4></h4>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style="width: 60%"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </p>
              <p>
                <h6 style={{ display: "inline" }}>Javascript</h6>
                <span style={{ marginLeft: "390px" }}>25%</span>
                <div className="progress">
                  <h4></h4>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style="width: 85%"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </p>
              <p>
                <h6 style={{ display: "inline" }}>Node js</h6>
                <span style={{ marginLeft: "360px" }}>25%</span>
                <div className="progress">
                  <h4></h4>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style="width: 75%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </p>
              <p>
                <h6 style={{ display: "inline" }}>Express js</h6>
                <span style={{ marginLeft: "270px" }}>25%</span>
                <div className="progress">
                  <h4></h4>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 65%"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </p>
            </div>
            <div className="col-md-6">
              <p className="card-row " style={{ marginTop: "150px" }}>
                <div
                  className="card text-dark bg-light mb-3"
                  style="max-width: 12rem;border-radius:20px"
                >
                  <div className="card-body">
                    <h6
                      className="card-title text-center"
                      style={{ fontSize: "large" }}
                    >
                      80 Albums Listened
                    </h6>
                  </div>
                </div>
                <div
                  className="card text-dark bg-light mb-3"
                  style="max-width: 12rem;border-radius:20px"
                >
                  <div className="card-body ">
                    <h6
                      className="card-title text-center"
                      style={{ fontSize: "large", textAlign: "center" }}
                    >
                      15 Awards Won
                    </h6>
                  </div>
                </div>
              </p>
              <p className="card-row mt-3">
                <div
                  className="card text-dark bg-light mb-3"
                  style="max-width: 12rem;border-radius:20px"
                >
                  <div className="card-body">
                    <h6
                      className="card-title text-center"
                      style={{ fontSize: "large" }}
                    >
                      1,000 Cups of Coffee
                    </h6>
                  </div>
                </div>
                <div
                  className="card text-dark bg-light mb-3"
                  style="max-width: 12rem;border-radius:20px"
                >
                  <div className="card-body">
                    <h6
                      className="card-title text-center"
                      style={{ fontSize: "large" }}
                    >
                      10 Countries Visited
                    </h6>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section id="services">
        <div className="jumbotron jb">
          <div className="row">
            <div className="col-md-12" style={{ paddingLeft: "60px" }}>
              <h1
                className="largeh"
                style={{
                  borderBottom: "2px solid transparent",
                  borderImage:
                    "linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0))",
                  borderImageSlice: "1",
                  width: "20%",
                }}
              >
                MY_SERVICES
              </h1>
              <p className="tabs pt-2" style={{ wordSpacing: "4px" }}>
                Full Stack & MERN Stack Developer based in <b>INDIA.</b>
              </p>

              <div className="col-md-12">
                <div className="container-fluid">
                  <div className="row gy-3 gy-md-4">
                    <div className="col-12 col-lg-4">
                      <div className="card border-dark" id="cardbg">
                        <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center ">
                          <div className="me-3 mt-2 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              fill="currentColor"
                              className="bi bi-basket2-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                            </svg>
                          </div>
                          <div>
                            <h6 className="mb-1">UI/UX Design</h6>
                            
                            <p className="m-0 text-secondary">
                              Our UI/UX design service focuses on creating
                              intuitive and visually appealing user interfaces
                              that enhance user experience. We combine
                              creativity with user-centered design principles to
                              deliver engaging and effective designs tailored to
                              your target audience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <div className="card border-dark" id="cardbg">
                        <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center">
                          <div className="me-3 text-primary mt-2 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              fill="currentColor"
                              className="bi bi-chat-left-heart-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="mb-1">Website Development</h4>
                            <p className="m-0 text-secondary">
                              Our website development service offers custom
                              solutions to bring your vision to life on the web.
                              We specialize in creating responsive,
                              fast-loading, and SEO-friendly websites that help
                              you achieve your business goals.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4 mb-4">
                      <div className="card border-dark" id="cardbg">
                        <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center ">
                          <div className="me-3 text-primary mt-2 ">
                            <i
                              className="fa fa-code"
                              style={{ fontSize: "3vw" }}
                            ></i>
                          </div>
                          <div>
                            <h4 className="mb-1">Open AI Development</h4>
                            <p className="m-0 text-secondary">
                              Explore the possibilities of AI with our Open AI
                              development service. Whether it's natural language
                              processing, computer vision, or machine learning,
                              we leverage cutting-edge AI technologies to build
                              intelligent solutions for your business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 ">
                <div className="container-fluid">
                  <div className="row gy-3 gy-md-4">
                    <div className="col-12 col-lg-4">
                      <div className="card border-dark" id="cardbg">
                        <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center ">
                          <div className="me-3 text-primary mt-2 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              fill="currentColor"
                              className="bi bi-basket2-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                            </svg>
                          </div>
                          <div>
                            <h6 className="mb-1">UI/UX Design</h6>
                            <p className="m-0 text-secondary">
                              Our UI/UX design service focuses on creating
                              intuitive and visually appealing user interfaces
                              that enhance user experience. We combine
                              creativity with user-centered design principles to
                              deliver engaging and effective designs tailored to
                              your target audience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <div className="card border-dark" id="cardbg">
                        <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center ">
                          <div className="text-primary mr-3  mt-2 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              fill="currentColor"
                              className="bi bi-chat-left-heart-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="mb-1">Website Development</h4>
                            <p className="m-0 text-secondary">
                              Our website development service offers custom
                              solutions to bring your vision to life on the web.
                              We specialize in creating responsive,
                              fast-loading, and SEO-friendly websites that help
                              you achieve your business goals.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4 ">
                      <div className="card border-dark" id="cardbg">
                        <div className="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center ">
                          <div className="me-3 text-primary mt-2 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              fill="currentColor"
                              className="bi bi-folder-symlink-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3M2.19 3q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="mb-1">Open AI Development</h4>
                            <p className="m-0 text-secondary">
                              Explore the possibilities of AI with our Open AI
                              development service. Whether it's natural language
                              processing, computer vision, or machine learning,
                              we leverage cutting-edge AI technologies to build
                              intelligent solutions for your business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="portfolio">
        <div className="jumbotron jb">
          <div className="row">
            <div className="col-md-12" style={{ paddingLeft: "60px" }}>
              <h1
                className="largeh"
                style={{
                  borderBottom: "2px solid transparent",
                  borderImage:
                    "linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0))",
                  borderImageSlice: "1",
                  width: "20%",
                }}
              >
                MY_PORTFOLIO
              </h1>
              <p className="tabs pt-2" style={{ wordSpacing: "4px" }}>
                Full Stack & MERN Stack Developer based in <b>INDIA.</b>
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100"  style={{borderRadius:"40px"}}>
                <img className="card-img-top m-auto" src={rest} alt="Design" style={{width:"80%"}}></img>
                <div className="card-body bgc">
                  <h4
                    className="card-title gradient-text text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Restaurent FullStack web-app
                  </h4>
                  <h3 className="h5 text-left" style={{ fontWeight: "bold" }}>
                    Description of the your application
                  </h3>
                  <p className="card-text desch">
                    Deliver the best user experience with our carefully designed
                    responsive websites and applications! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil nisi dignissimos assumenda consequatur perspiciatis sapiente, aspernatur reiciendis repellat in! Dolorum deleniti cum cupiditate quaerat ipsum laboriosam expedita facere pariatur.
                  </p>
                </div>
                <div className="bgc py-1">
                  <a href="#" className="btn h4 hv" style={{fontWeight:"600",wordSpacing:"2px"}}>
                   View Project 
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 "  style={{borderRadius:"40px"}}>
                <img
                  className="card-img-top m-auto mt-3 pb-2"
                  src={tictac}
                  alt="Development"
                  style={{ width: "55%" }}
                ></img>
                <div className="card-body bgc">
                  <h4
                    className="card-title gradient-text"
                    style={{ fontWeight: "bold" }}
                  >
                    Tic-Tac-Toe Game
                  </h4>
                  <h3 className="h5 text-left" style={{ fontWeight: "bold" }}>
                    Description of the your application
                  </h3>

                  <p className="card-text desch">
                    You need software that works on every device. Leverage the
                    latest technologies and the most powerful tools! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laudantium ipsum explicabo maiores quidem quaerat veritatis, ea, praesentium eius libero optio, mollitia quasi. Magni non, quisquam soluta unde aperiam vel.
                  </p>
                </div>
                <div className="bgc py-1">
                  <a href="#" className="btn h4 hv" style={{fontWeight:"600",wordSpacing:"2px"}}>
                   View Project 
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4" >
              <div className="card h-100" style={{borderRadius:"40px"}}  >
                <img className="card-img-top m-auto" src={todo} alt="Analytics" style={{width:"80%"}} ></img>
                <div className="card-body bgc">
                  <h4
                    className="card-title gradient-text"
                    style={{ fontWeight: "bold" }}
                  >
                    To-Do App
                  </h4>
                  <h3 className="h5 text-left" style={{ fontWeight: "bold" }}>
                    Description of the your application
                  </h3>
                  <p className="card-text  desch">
                    Consult our experts to set up proper goals and find the best
                    stack for your next application! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis architecto qui, id rerum nostrum obcaecati adipisci aspernatur laudantium nihil! Pariatur corporis corrupti dolore nihil soluta. Aperiam deserunt aspernatur reiciendis quisquam.
                  </p>
                </div>
                <div className=" py-1 bgc">
                  <a href="#" className="btn h4 hv" style={{fontWeight:"600",wordSpacing:"2px"}}>
                   View Project 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="services">
        <div className="jumbotron jb">
          <div className="row">
            <div className="col-md-12" style={{ paddingLeft: "60px" }}>
              <h1
                className="largeh"
                style={{
                  borderBottom: "2px solid transparent",
                  borderImage:
                    "linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0))",
                  borderImageSlice: "1",
                  width: "20%",
                }}
              >
                MY_TESTIMONALS
              </h1>
              <p className="tabs pt-2" style={{ wordSpacing: "4px" }}>
                Full Stack & MERN Stack Developer based in <b>INDIA.</b>
              </p>
              </div>
              </div>
             
    
      <div id="carouselExampleControls" data-mdb-carousel-init class="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="rounded-circle shadow-1-strong mb-4"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
        style="width: 150px;" />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">Maria Kate</h5>
          <p>Photographer</p>
          <p class="text-muted">
            <i class="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="far fa-star fa-sm"></i></li>
      </ul>
    </div>
    <div class="carousel-item">
      <img class="rounded-circle shadow-1-strong mb-4"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
        style="width: 150px;" />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">John Doe</h5>
          <p>Web Developer</p>
          <p class="text-muted">
            <i class="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis.
          </p>
        </div>
      </div>
      <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="far fa-star fa-sm"></i></li>
      </ul>
    </div>
    <div class="carousel-item">
      <img class="rounded-circle shadow-1-strong mb-4"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style="width: 150px;" />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">Anna Deynah</h5>
          <p>UX Designer</p>
          <p class="text-muted">
            <i class="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="far fa-star fa-sm"></i></li>
      </ul>
    </div>
  </div>
  <button data-mdb-button-init class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
    data-mdb-slide="prev">
    <span class="carousel-control-prev-icon text-body" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button data-mdb-button-init class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
    data-mdb-slide="next">
    <span class="carousel-control-next-icon text-body" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</section>
<hr />


<section id="services">
        <div className="jumbotron jb">
          <div className="row">
            <div className="col-md-12" style={{ paddingLeft: "60px" }}>
              <h1
                className="largeh"
                style={{
                  borderBottom: "2px solid transparent",
                  borderImage:
                    "linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0))",
                  borderImageSlice: "1",
                  width: "20%",
                }}
              >
                TECHNOLOGIES
              </h1>
              <p className="tabs pt-2" style={{ wordSpacing: "4px" }}>
              Transforming conceptual ideas into touchable realities
              </p>
              </div>
              <Swiper className="mt-5"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="lastc text-center p-3"><img src={html} alt="" style={{height:"15vh",width:"10vw"}} className="pt-1" /> <h5 className="mt-4">HTML</h5>  </SwiperSlide>
      <SwiperSlide className="lastc text-center p-3"><img src={css} alt="" style={{height:"15vh",width:"10vw"}}  className="pt-1"/><h5 className="mt-4">CSS</h5></SwiperSlide>
      <SwiperSlide className="lastc text-center p-3"><img src={js} alt="" style={{height:"15vh",width:"10vw"}} className="pt-1" /><h5 className="mt-4">Javascript</h5></SwiperSlide>
      <SwiperSlide className="lastc text-center p-3"><img src={react} alt="" style={{height:"15vh",width:"10vw"}} className="pt-1" /><h5 className="mt-4">React js</h5></SwiperSlide>
      

   <SwiperSlide className="lastc text-center p-3"><img src={node} alt="" style={{height:"15vh",width:"10vw"}} className="pt-1" /><h5 className="mt-4">Node JS</h5></SwiperSlide>
   <SwiperSlide className="lastc text-center p-3"><img src={express} alt="" style={{height:"15vh",width:"10vw"}} className="pt-1" /><h5 className="mt-4">Express JS</h5></SwiperSlide>
      <SwiperSlide className="lastc text-center p-3"><img src={mongodb} alt="" style={{height:"15vh",width:"10vw"}}className="pt-1" /><h5 className="mt-4">Mongo DB</h5></SwiperSlide>
      <SwiperSlide className="lastc text-center p-3"><img src={python} alt="" style={{height:"15vh",width:"10vw"}}  className="pt-1"/><h5 className="mt-4">Python</h5></SwiperSlide>
   <SwiperSlide className="lastc text-center p-3"><img src={java} alt="" style={{height:"15vh",width:"10vw"}} className="pt-1" /><h5 className="mt-4">Java</h5></SwiperSlide>
   <SwiperSlide className="lastc text-center p-3"><img src={github} alt="" style={{height:"15vh",width:"10vw"}} className="pt-1" /><h5 className="mt-4">Github</h5></SwiperSlide>
      
      ...
    </Swiper>
              </div>
              
      
      </div>
     
    </section>
    <hr />
    <section id="contact">
        <div className="jumbotron jb">
          <div className="row">
            <div className="col-md-12" style={{ paddingLeft: "60px" }}>
              <h1
                className="largeh"
                style={{
                  borderBottom: "2px solid transparent",
                  borderImage:
                    "linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0))",
                  borderImageSlice: "1",
                  width: "20%",
                }}
              >
                GET_IN_TOUCH
              </h1>
              <p className="tabs pt-2" style={{ wordSpacing: "4px" }}>
              I am available 24/7. Get in touch!
              </p>
              </div>
              
    <div className="container">
      <div className="contact__wrapper shadow-lg mt-n9">
        <div className="row no-gutters">
          <div className="col-md-5 contact-info__wrapper gradient-brand-color pr-5 order-lg-2">
            <h3 className="color--white mb-5">GET_IN_TOUCH</h3>

            <ul className="contact-info__list list-style--none position-relative z-index-101 ">
              <li className="mb-4 pl-4">
                <span className="position-absolute"><i className="fas fa-envelope"></i></span> support@bootdey.com
              </li>
              <li className="mb-4 pl-4">
                <span className="position-absolute"><i className="fas fa-phone"></i></span> (021)-241454-545
              </li>
              <li className="mb-4 pl-4">
                <span className="position-absolute"><i className="fas fa-map-marker-alt"></i></span> bootdey Technologies Inc.
                <br /> 2694 Queen City Rainbow Drive
                <br /> Florida 99161

                <div className="mt-3 ">
                  <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-link link--right-icon text-white">
                    Get directions <i className="link__icon fa fa-directions"></i>
                  </a>
                </div>
              </li>
            </ul>

            <figure className="figure position-absolute m-0 opacity-06 z-index-100" style={{ bottom: 0, right: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="444px" height="626px">
                <defs>
                  <linearGradient id="PSgrad_1" x1="0%" x2="81.915%" y1="57.358%" y2="0%">
                    <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="1"></stop>
                    <stop offset="100%" stopColor="rgb(0,54,207)" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path fillRule="evenodd" opacity="0.302" fill="rgb(72, 155, 248)" d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"></path>
                <path fill="url(#PSgrad_1)" d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"></path>
              </svg>
            </figure>
          </div>

          <div className="col-md-7 contact-form__wrapper p-5 order-lg-1">
            <form action="#" className="contact-form form-validate" noValidate>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label className="required-field" htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Wendy" />
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Appleseed" />
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label className="required-field" htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="wendy.apple@seed.com" />
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="(021)-454-545" />
                  </div>
                </div>

                <div className="col-sm-12 mb-3">
                  <div className="form-group">
                    <label className="required-field" htmlFor="message">How can we help?</label>
                    <textarea className="form-control" id="message" name="message" rows="4" placeholder="Hi there, I would like to....."></textarea>
                  </div>
                </div>

                <div className="col-sm-12 mb-3">
                  <button type="submit" name="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form Wrapper */}
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
          <iframe style={{width:"80vw",border:"5px white solid",height:"70vh"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229394.7311069099!2d79.70642634238283!3d26.056689819530465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719998989538!5m2!1sen!2sin"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>
              </div>
              </section>
              <hr />
              <footer className="bg-body-tertiary text-center">
      {/* Grid container */}
      <div className="container p-2 pb-0 ">
        {/* Section: Social media */}
        <section className="mb-4 pt-3">
          {/* Facebook */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#3b5998' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#55acee' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#dd4b39' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Linkedin */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#0082ca' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* Github */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#333333' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2020 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">VinayOG</a>
      </div>
      {/* Copyright */}
    </footer>
    </>
  );
};

export default App;
