import React, { useEffect, useLayoutEffect, useState, useMemo } from "react"
import Carousel from "@brainhubeu/react-carousel"
import Gallery from "react-photo-gallery"
import "@brainhubeu/react-carousel/lib/style.css"

import Logo from "../images/logo.png"
import Teamwork from "../images/teamwork.jpg"
import Desire from "../images/desire.jpg"
import Fun from "../images/fun.jpg"
import AppHealthcare from "../images/sponsors/app-healthcare.png"
import Piedmont from "../images/sponsors/piedmont.png"
import FarmBureau from "../images/sponsors/farm-bureau.png"
import HighCountryDisaster from "../images/sponsors/hcdisaster.png"
import ValuesBlock from "../components/values-block"
import PlayerCard from "../components/player-card"
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
            <Carousel infinite animationSpeed={2000} autoPlay={4000}>
              <CarouselItem
                top={`WELCOME TO THE`}
                bottom={`HAVOC`}
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
            <div className="md-img mx-4">
              <img src={Logo} />
            </div>
            <div className="mx-4">
              <h2 className="text-white text-center">Welcome to the HAVOC!</h2>
            </div>
          </div>
          <h5 className="px-8 container-text m-center text-white text-center">
            The High Country Havoc is a non-profit youth baseball organization
            located in Boone, NC. We are an affiliate of the Big League Camp,
            enabling us to leverage the extensive knowledge provided by a
            network of college coaches, professional coaches, and Major League
            Baseball scouts.
          </h5>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap">
          <PlayerCard
            id={"ourPurpose"}
            img={"home-card-1"}
            title={"Our Purpose"}
            body={`Create lifelong memories for our kids, teach
            valuable lessons through competitive baseball, and develop better
            athletes that can go on to live active, healthy, and productive lives.`}
          />
          <PlayerCard
            id={"ourMission"}
            title={"Our Mission"}
            img={"home-card-2"}
            body={`Complement and partner with other youth
            sports organizations in our area, offering additional competitive
            opportunities for kids in the High Country while adopting the most
            innovative practices in youth athlete development.`}
          />
          <PlayerCard
            id={"ourVision"}
            img={"home-card-3"}
            title={"Our Vision"}
            body={`Create a model youth sports organization in the High Country that
            fosters an environment where kids deepen their love of baseball, build
            lifelong friendships, and learn valuable life lessons and skills.`}
          />
        </div>
      </div>

      <div className="secondary-bg py-8 sm:py-12">
        <div className="container mx-auto overflow-hidden">
          <div className="flex flex-wrap items-center justify-center -mx-4 mb-6">
            <div className="md-img mx-4">
              <img src={Logo} />
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
                  body: `We stay connected to the most innovative thinking
          in youth sports through organizations like The Aspen Institute, USA
          Baseball, and Changing the Game Project. Our affiliation with Big League
          Camp affords us a constant source of the most innovative thinking in
          youth baseball player development.`,
                }}
                image={`community-img`}
              />
              <ValuesBlock
                values={{
                  header: "Complementary Objectives",
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
                  body: `We strive to be competitive today, but we focus on
            growing each child’s love for the game, building a solid foundation of
            fundamentals, and helping them become better people and athletes. We are
            diligent about issues of arm care and are guided by USA Baseball’s Pitch
            Smart Framework. We emphasize practice over competition while seeking
            insight from USA Baseball Guidelines.`,
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
          <h5 className="px-8 container-text m-center text-white text-center">
            We would like to thank our dedicated sponsors for supporting our
            program!
            <br />
            Platinum ($1000+), Silver ($500+), Bronze ($250+), Non-Disclosed
          </h5>

          <div className="flex flex-wrap items-start -mx-3 justify-center mt-4">
            <SponsorItem src={AppHealthcare} />
            <SponsorItem src={Piedmont} />
            <SponsorItem src={FarmBureau} />
            <SponsorItem src={HighCountryDisaster} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
