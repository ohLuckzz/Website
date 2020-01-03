import React, { useEffect, useLayoutEffect, useState, useMemo } from "react"
import Carousel from "@brainhubeu/react-carousel"
import Gallery from "react-photo-gallery"
import "@brainhubeu/react-carousel/lib/style.css"

import Logo from "../images/logo.png"
import Logo2 from "../images/logo_2.png"
import Teamwork from "../images/teamwork.jpg"
import Desire from "../images/desire.jpg"
import Fun from "../images/fun.jpg"
import AppHealthcare from "../images/sponsors/app-healthcare.png"
import Piedmont from "../images/sponsors/piedmont.png"
import FarmBureau from "../images/sponsors/farm-bureau.png"
import HighCountryDisaster from "../images/sponsors/hcdisaster.png"
import ValuesBlock from "../components/values-block"
import ValueCard from "../components/value-card"
import CarouselItem from "../components/carousel-item"
import SponsorItem from "../components/sponsor-item"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const photos = [
    {
      src: Teamwork,
      width: 2,
      height: 1,
    },
    {
      src: Desire,
      width: 1,
      height: 1,
    },
    {
      src: Fun,
      width: 1,
      height: 1,
    },
  ]

  return (
    <Layout>
      <SEO title="Home" />
      {useMemo(() => {
        return (
          <div className="relative">
            <Carousel infinite animationSpeed={4000} autoPlay={6000}>
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
                bottom={`COMPETING`}
                image={`home-img-5`}
              />
            </Carousel>
          </div>
        )
      }, [])}
      <div className="alternative-bg py-8 sm:py-12">
        <div className="container m-center overflow-hidden">
          <div className="flex flex-wrap items-center justify-center -mx-4 mb-6">
            <div className="mx-4">
              <h1 className="text-white text-center">Welcome to the HAVOC!</h1>
            </div>
          </div>
          <h5 className="px-8 container-text m-center text-white text-center">
            The High Country Havoc is a non-profit youth baseball organization
            located in Boone, NC. We are an affiliate of the <a className="text-white" href="https://www.bigleaguecamp.com/" target="_blank" rel="noopener">Big League Camp</a>,
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
            <div className="md-img mx-4">
              <img src={Logo2} />
            </div>
            <div className="mx-4">
              <h2 className="text-white text-center">Our Values</h2>
            </div>
          </div>
          <div className={`flex flex-wrap -mx-6 pb-8`}>
            <div className="w-full sm:w-1/2">
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
          in youth sports through organizations like <a href="https://www.aspeninstitute.org/tag/youth-sports/" target="_blank" rel="noopener">The Aspen Institute</a>, <a href="https://sportdev.org/USAB/Education/Long_Term_Athlete_Development_Plan/USAB/Education/LTAD.aspx?hkey=0b2b2c04-3ed0-43b3-a12d-0c6b73ab7efd" rel="noopener" target="_blank">USA
                    Baseball</a>, and <a href="https://changingthegameproject.com/about/" target="_blank" rel="noopener">Changing the Game Project</a>. Our affiliation with <a href="https://www.bigleaguecamp.com/" rel="noopener" target="_blank">Big League
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
            diligent about issues of arm care and are guided by USA Baseball’s <a rel="noopener" target="_blank" href="https://www.mlb.com/pitch-smart/pitching-guidelines">Pitch
            Smart Framework</a>. We emphasize practice over competition while seeking
            insight from <a href="https://sportdev.org/images/USAB/Education/3.%20LTAD%20Periodization%20and%20Competition.png" target="_blank" rel="noopener">USA Baseball Guidelines</a>.</span>,
                }}
                image={`community-img`}
              />
              <ValuesBlock
                values={{
                  header: "Collaborative Approach",
                  icon: "people-carry",
                  body: `Collaborative Approach – We are a network of parents and professionals who
            care deeply about youth sports and these kids. We tap into our distinct
            knowledge and experiences to create collective insight that helps us build
            great experiences for our kids. It’s truly a team effort.`,
                }}
                image={`community-img`}
              />
            </div>
            <div className="hidden sm:block sm:w-1/2">
              <Gallery photos={photos} />
            </div>
          </div>
        </div>
      </div>

      <div className="alternative-bg py-8 sm:py-12">
        <div className="container mx-auto overflow-hidden">
          <div className="flex flex-wrap items-center justify-center -mx-4 mb-6">
            <div className="md-img mx-4">
              <img src={Logo} />
            </div>
            <div className="mx-4">
              <h2 className="text-white text-center">Our Sponsors</h2>
            </div>
          </div>
          <div className="px-8 container-text m-center text-white text-center">
            <h5 >
              We would like to thank our dedicated sponsors for supporting our
              program!
            </h5>
          </div>

          <div className="flex flex-wrap">

            <div className="flex items-center flex-col py-4 w-full sm:w-1/3">
              <h3 className="text-center text-white">Home Run ($1000+)</h3>
              <SponsorItem src={Piedmont} height={'hr'} />
            </div>
            <div className="flex items-center flex-col py-4 w-full sm:w-1/3">
              <h4 className="text-center text-white">Triple ($500+)</h4>
              <SponsorItem src={AppHealthcare} height={'triple'} />
            </div>
            <div className="flex items-center flex-col py-4 w-full sm:w-1/3">
              <h5 className="text-center text-white font-bold">Double ($250+)</h5>
              <SponsorItem height={'double'} src={FarmBureau} />
              <SponsorItem height={'double'} src={HighCountryDisaster} />
              <SponsorItem height={'double'} text={"Frank & Debbie Plottz"} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
