import React, { useMemo } from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import AppHealthcare from "../images/sponsors/app-healthcare.png"
import Piedmont from "../images/sponsors/piedmont.png"
import FarmBureau from "../images/sponsors/farm-bureau.png"
import HighCountryDisaster from "../images/sponsors/hcdisaster.png"

import HomeRunIcon from "../images/home-run.svg"
import TripleIcon from "../images/triple.svg"
import DoubleIcon from "../images/double.svg"
import SingleIcon from "../images/single.svg"

import Product1 from "../images/product-1.png"
import Product2 from "../images/product-2.png"
import Product3 from "../images/product-3.png"
import Product4 from "../images/product-4.png"

import ValuesBlock from "../components/values-block"
import ValueCard from "../components/value-card"
import CarouselItem from "../components/carousel-item"
import SponsorItem from "../components/sponsor-item"
import Layout from "../components/layout"
import SectionTitle from "../components/section-title"
import SEO from "../components/seo"

import Data from "../content/home"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {useMemo(() => {
        return (
          <div className="relative">
            <Carousel infinite animationSpeed={2000} autoPlay={6000}>
              <CarouselItem image={`home-img-2`} />
              <CarouselItem
                top={`WE FOCUS ON...`}
                bottom={`TEAMWORK`}
                image={`home-img-4`}
              />
              <CarouselItem
                top={`WE FOCUS ON...`}
                bottom={`EFFORT`}
                image={`effort-img`}
              />
              <CarouselItem
                top={`WE FOCUS ON...`}
                bottom={`PRACTICE`}
                image={`home-img-7`}
              />
              <CarouselItem
                top={`WE FOCUS ON...`}
                bottom={`COMPETITION`}
                image={`home-img-5`}
              />
              <CarouselItem
                top={`WE FOCUS ON...`}
                bottom={`FRIENDSHIP`}
                image={`home-img-6`}
              />
              <CarouselItem
                top={`WE FOCUS ON...`}
                bottom={`FUN`}
                image={`home-img-3`}
              />
              <CarouselItem
                top={`WE FOCUS ON...`}
                bottom={`FAMILY`}
                image={`home-img-8`}
              />
            </Carousel>
          </div>
        )
      }, [])}
      <div className="alternative-bg py-8">
        <div className="container m-center overflow-hidden">
          <div className="flex flex-wrap items-center justify-center -mx-4 mb-6">
            <div className="mx-4">
              <h1 className="text-white text-center">{Data.siteTitle}</h1>
            </div>
          </div>
          <h5 className="px-8 container-text m-center text-white text-center">
            {Data.siteTitleBody}
          </h5>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <div className="p-4 md:py-12 md:px-8">
              <ValueCard title={Data.purpose.title} body={Data.purpose.body} />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="p-4 md:py-12 md:px-8">
              <ValueCard title={Data.mission.title} body={Data.mission.body} />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="p-4 md:py-12 md:px-8">
              <ValueCard title={Data.vision.title} body={Data.vision.body} />
            </div>
          </div>
        </div>
      </div>

      <div className="secondary-bg py-8 sm:py-12">
        <div className="container mx-auto overflow-hidden">
          <div className="flex flex-wrap items-center justify-center -mx-4 mb-6">
            <div className="mx-4">
              <h2 className="text-white text-center">Our Values</h2>
            </div>
          </div>
          <div className={`flex flex-wrap -mx-6`}>
            <div className="w-full md:w-1/2 -my-4 sm:-my-6">
              <ValuesBlock
                values={{
                  header: Data.value1.title,
                  icon: "user-friends",
                  body: Data.value1.body,
                }}
              />
              <ValuesBlock
                values={{
                  header: Data.value2.title,
                  icon: "chalkboard-teacher",
                  body: Data.value2.body,
                }}
              />
              <ValuesBlock
                values={{
                  header: Data.value3.title,
                  icon: "bullseye",
                  body: Data.value3.body,
                }}
              />
              <ValuesBlock
                values={{
                  header: Data.value4.title,
                  icon: "crosshairs",
                  body: Data.value4.body,
                }}
              />
              <ValuesBlock
                values={{
                  header: Data.value5.title,
                  icon: "people-carry",
                  body: Data.value5.body,
                }}
              />
            </div>
            <div className="hidden md:block md:w-1/2">
              <div
                className="flex flex-col justify-between"
                style={{ height: "100%" }}
              >
                <div className="flex flex-col" style={{ height: "31%" }}>
                  <div className="home-card-1" style={{ height: "100%" }} />
                  <i className="text-white">Big League Camp</i>
                </div>
                <div className="flex flex-col" style={{ height: "31%" }}>
                  <div className="home-card-2" style={{ height: "100%" }} />
                  <i className="text-white">Big League Camp</i>
                </div>
                <div className="flex flex-col" style={{ height: "31%" }}>
                  <div className="home-card-3" style={{ height: "100%" }} />
                  <i className="text-white">Big League Camp</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12">
        <div className="container mx-auto overflow-hidden flex flex-col">
          <SectionTitle title={`Gear`} />
          <div className="mb-8 px-8 -py-2 sm:px-0 flex flex-wrap items-center justify-between">
            <div className="p-2 mx-auto">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="text-white no-underline"
                href="https://teamlocker.squadlocker.com/#/lockers/havoc-14/styles/15805060?_k=kl84dd"
              >
                <img
                  className="xl-img"
                  src={Product1}
                  alt={"High Country Havoc Hat"}
                />
              </a>
            </div>
            <div className="p-2 mx-auto">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="text-white no-underline"
                href="https://teamlocker.squadlocker.com/#/lockers/havoc-14/styles/15805299?_k=1b7h8t"
              >
                <img
                  className="xl-img"
                  src={Product2}
                  alt={"High Country Havoc Woman Tank"}
                />
              </a>
            </div>
            <div className="p-2 mx-auto">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="text-white no-underline"
                href="https://teamlocker.squadlocker.com/#/lockers/havoc-14/styles/15805115?_k=k5t6ia"
              >
                <img
                  className="xl-img"
                  src={Product3}
                  alt={"High Country Havoc Polo"}
                />
              </a>
            </div>
            <div className="p-2 mx-auto">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="text-white no-underline"
                href="https://teamlocker.squadlocker.com/#/lockers/havoc-14/styles/15805120?_k=eb4nef"
              >
                <img
                  className="xl-img"
                  src={Product4}
                  alt={"High Country Havoc Ladies Bionic Jacket"}
                />
              </a>
            </div>
          </div>
          <button className="mx-auto primary-bg">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="text-white no-underline"
              href="https://teamlocker.squadlocker.com/#/lockers/havoc-14?_k=bt8e8f"
            >
              Shop Gear
            </a>
          </button>
        </div>
      </div>

      <div className="alternative-bg py-8 sm:py-12">
        <div className="container mx-auto overflow-hidden">
          <div className="flex flex-col flex-wrap items-center justify-center -mx-4 mb-6">
            <div className="mx-4">
              <h2 className="text-white text-center">Our Sponsors</h2>
            </div>
            <div className="px-8 container-text m-center text-white text-center">
              <h5>
                We would like to thank our dedicated sponsors for supporting our
                program!
              </h5>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="flex items-center flex-col py-4 w-full sm:w-1/4">
              <div className="flex flex-wrap justify-center items-center">
                <div className="px-4">
                  <img
                    className="xsm-img"
                    alt="Homerun Icon"
                    src={HomeRunIcon}
                  />
                </div>
                <h3 className="text-center text-white">Home Run ($1000+)</h3>
              </div>
              <a
                href="http://piedmontdentalassociates.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SponsorItem src={Piedmont} alt={"Piedmont"} height={"hr"} />
              </a>
            </div>
            <div className="flex items-center flex-col py-4 w-full sm:w-1/4">
              <div className="flex flex-wrap justify-center items-center">
                <div className="px-4">
                  <img className="xsm-img" alt="Triple Icon" src={TripleIcon} />
                </div>
                <h4 className="text-center text-white">Triple ($500+)</h4>
              </div>
              <a
                href="https://apprhs.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SponsorItem
                  src={AppHealthcare}
                  alt={"App Healthcare"}
                  height={"triple"}
                />
              </a>
            </div>
            <div className="flex items-center flex-col py-4 w-full sm:w-1/4">
              <div className="flex flex-wrap justify-center items-center">
                <div className="px-4">
                  <img className="xsm-img" alt="Double Icon" src={DoubleIcon} />
                </div>
                <h5 className="text-center text-white font-bold">
                  Double ($250+)
                </h5>
              </div>
              <a
                href="https://www.ncfb.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SponsorItem
                  height={"double"}
                  alt={"Farm Bureau"}
                  src={FarmBureau}
                />
              </a>
              <a
                href="https://www.facebook.com/highcountrydisasterpros/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SponsorItem
                  height={"double"}
                  alt={"High Country Disaster"}
                  src={HighCountryDisaster}
                />
              </a>
              <SponsorItem height={"double"} text={"Frank & Debbie Plotts"} />
            </div>
            <div className="flex items-center flex-col py-4 w-full sm:w-1/4">
              <div className="flex flex-wrap justify-center items-center">
                <div className="px-4">
                  <img className="xsm-img" alt="Single Icon" src={SingleIcon} />
                </div>
                <h5 className="text-center text-white font-bold">
                  Single ($100+)
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
