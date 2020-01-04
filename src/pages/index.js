import React, { useMemo } from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import AppHealthcare from "../images/sponsors/app-healthcare.png"
import Piedmont from "../images/sponsors/piedmont.png"
import FarmBureau from "../images/sponsors/farm-bureau.png"
import HighCountryDisaster from "../images/sponsors/hcdisaster.png"

import HomeRunIcon from '../images/home-run.svg'
import TripleIcon from '../images/triple.svg'
import DoubleIcon from '../images/double.svg'

import ValuesBlock from "../components/values-block"
import ValueCard from "../components/value-card"
import CarouselItem from "../components/carousel-item"
import SponsorItem from "../components/sponsor-item"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {useMemo(() => {
        return (
          <div className="relative">
            <Carousel infinite animationSpeed={2000} autoPlay={6000} >
              <CarouselItem
                image={`home-img-2`}
              />
              <CarouselItem
                top={`WE FOCUS ON...`}
                bottom={`FUN`}
                image={`home-img-3`}
              />
              <CarouselItem
                top={`WE FOCUS ON...`}
                bottom={`TEAMWORK`}
                image={`home-img-4`}
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
                bottom={`PRACTICE`}
                image={`home-img-7`}
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
              <h1 className="text-white text-center">Welcome to the HAVOC!</h1>
            </div>
          </div>
          <h5 className="px-8 container-text m-center text-white text-center">
            The High Country Havoc is a non-profit youth baseball organization
            located in Boone, NC. We are an affiliate of the <a className="text-white" href="https://www.bigleaguecamp.com/" target="_blank" rel="noopener noreferrer">Big League Camp</a>,
            enabling us to leverage the extensive knowledge provided by a
            network of college coaches, professional coaches, and Major League
            Baseball scouts.
          </h5>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <div className="p-4 md:py-12 md:px-8">
              <ValueCard
                title={"Our Purpose"}
                body={`Create lifelong memories for our kids, teach
                valuable lessons through competitive baseball, and develop better
                athletes that can go on to live active, healthy, and productive lives.`}
              />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="p-4 md:py-12 md:px-8">
              <ValueCard
                title={"Our Mission"}
                body={`Complement and partner with other youth
                sports organizations in our area, offering additional competitive
                opportunities for kids in the High Country while adopting the most
                innovative practices in youth athlete development.`}
              />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="p-4 md:py-12 md:px-8">
              <ValueCard
                title={"Our Vision"}
                body={`Create a model youth sports organization in the High Country that
                fosters an environment where kids deepen their love of baseball, build
                lifelong friendships, and learn valuable life lessons and skills.`}
              />
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
                  header: "Community Centered",
                  icon: "user-friends",
                  body: `Sports is a powerful mechanism for bringing people
    together from diverse backgrounds and strengthening communities. We
    strive to strengthen our community through all that we do and work to
    ensure that social or economic barriers don’t inhibit any child from
    growing through competitive sports.`,
                }}
                image={`community-img`}
              />
              <ValuesBlock
                values={{
                  header: "Continuous Learning",
                  icon: "chalkboard-teacher",
                  body: <span>We stay connected to the most innovative thinking
          in youth sports through organizations like <a href="https://www.aspeninstitute.org/tag/youth-sports/" target="_blank" rel="noopener noreferrer">The Aspen Institute</a>, <a href="https://sportdev.org/USAB/Education/Long_Term_Athlete_Development_Plan/USAB/Education/LTAD.aspx?hkey=0b2b2c04-3ed0-43b3-a12d-0c6b73ab7efd" rel="noopener noreferrer" target="_blank">USA
                    Baseball</a>, and <a href="https://changingthegameproject.com/about/" target="_blank" rel="noopener noreferrer">Changing the Game Project</a>. Our affiliation with <a href="https://www.bigleaguecamp.com/" rel="noopener noreferrer" target="_blank">Big League
                    Camp</a> affords us a constant source of the most innovative thinking in
          youth baseball player development.</span>,
                }}
                image={`community-img`}
              />
              <ValuesBlock
                values={{
                  header: "Player Development",
                  icon: "bullseye",
                  body: `Our goals are to create experiences where kids
          have a ton of fun, learn valuable life skills, and become better
          athletes. We don’t view these as conflicting goals, rather, they support
          and reinforce each other if done well. At young ages, fun and enjoyment
          are the catalyst to player development.`,
                }}
                image={`community-img`}
              />
              <ValuesBlock
                values={{
                  header: "Long-term Focus",
                  icon: "crosshairs",
                  body: <span>We strive to be competitive today, but we focus on
            growing each child’s love for the game, building a solid foundation of
            fundamentals, and helping them become better people and athletes. We are
            diligent about issues of arm care and are guided by USA Baseball’s <a rel="noopener noreferrer" target="_blank" href="https://www.mlb.com/pitch-smart/pitching-guidelines">Pitch
            Smart Framework</a>. We emphasize practice over competition while seeking
            insight from <a href="https://sportdev.org/images/USAB/Education/3.%20LTAD%20Periodization%20and%20Competition.png" target="_blank" rel="noopener noreferrer">USA Baseball Guidelines</a>.</span>,
                }}
                image={`community-img`}
              />
              <ValuesBlock
                values={{
                  header: "Collaborative Approach",
                  icon: "people-carry",
                  body: `We are a network of parents and professionals who
            care deeply about youth sports and these kids. We tap into our distinct
            knowledge and experiences to create collective insight that helps us build
            great experiences for our kids. It’s truly a team effort.`,
                }}
                image={`community-img`}
              />
            </div>
            <div className="hidden md:block md:w-1/2">
              <div className="flex flex-col justify-between" style={{ height: '100%' }}>
                <div className="flex flex-col" style={{ height: '31%' }}>
                  <div className="home-card-1" style={{ height: '100%' }} />
                  <i className="text-white">Big League Camp</i>
                </div>
                <div className="flex flex-col" style={{ height: '31%' }}>
                  <div className="home-card-2" style={{ height: '100%' }} />
                  <i className="text-white">Big League Camp</i>
                </div>
                <div className="flex flex-col" style={{ height: '31%' }}>
                  <div className="home-card-3" style={{ height: '100%' }} />
                  <i className="text-white">Big League Camp</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alternative-bg py-8 sm:py-12">
        <div className="container mx-auto overflow-hidden">
          <div className="flex flex-col flex-wrap items-center justify-center -mx-4 mb-6">
            <div className="mx-4">
              <h2 className="text-white text-center">Our Sponsors</h2>
            </div>
            <div className="px-8 container-text m-center text-white text-center">
              <h5 >
                We would like to thank our dedicated sponsors for supporting our
                program!
            </h5>
            </div>
          </div>


          <div className="flex flex-wrap">

            <div className="flex items-center flex-col py-4 w-full sm:w-1/3">
              <div className="flex flex-wrap justify-center items-center">
                <div className="px-4">
                  <img className="sm-img" src={HomeRunIcon} />
                </div>
                <h3 className="text-center text-white">Home Run ($1000+)</h3>
              </div>
              <a href="http://piedmontdentalassociates.com/" rel="noopener noreferrer" target="_blank">
                <SponsorItem src={Piedmont} alt={"Piedmont"} height={'hr'} />
              </a>
            </div>
            <div className="flex items-center flex-col py-4 w-full sm:w-1/3">
              <div className="flex flex-wrap justify-center items-center">
                <div className="px-4">
                  <img className="sm-img" src={TripleIcon} />
                </div>
                <h4 className="text-center text-white">Triple ($500+)</h4>
              </div>
              <a href="https://apprhs.org/" rel="noopener noreferrer" target="_blank">
                <SponsorItem src={AppHealthcare} alt={"App Healthcare"} height={'triple'} />
              </a>
            </div>
            <div className="flex items-center flex-col py-4 w-full sm:w-1/3">
              <div className="flex flex-wrap justify-center items-center">
                <div className="px-4">
                  <img className="sm-img" src={DoubleIcon} />
                </div>
                <h5 className="text-center text-white font-bold">Double ($250+)</h5>
              </div>
              <a href="https://www.ncfb.org/" rel="noopener noreferrer" target="_blank">
                <SponsorItem height={'double'} alt={"Farm Bureau"} src={FarmBureau} />
              </a>
              <a href="https://www.facebook.com/highcountrydisasterpros/" rel="noopener noreferrer" target="_blank">
                <SponsorItem height={'double'} alt={"High Country Disaster"} src={HighCountryDisaster} />
              </a>
              <SponsorItem height={'double'} text={"Frank & Debbie Plotts"} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
