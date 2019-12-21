import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LandingImage from '../images/pitching.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="relative mb-16">
      <div className="absolute z-10 home-img-text-container rounded shadow">
        <h1 className="text-white px-4 ">Welcome to HAVOC</h1>
      </div>
      <div className="home-img-overlay" />
      <div className="w-full home-img" />
    </div>
    <h3>Welcome to the HAVOC! The High Country Havoc is a non-profit youth baseball organization located in Boone, NC. We are an affiliate of the Big League Camp, enabling us to leverage the extensive knowledge provided by a network of college coaches, professional coaches, and Major League Baseball scouts. </h3>
    <p><i>Our Vision…</i>is to create a model youth sports organization in the High Country that fosters an environment where kids deepen their love of baseball, build lifelong friendships, and learn valuable life lessons and skills. </p>
    <p><i>Our Mission…</i>is to complement and partner with other youth sports organizations in our area, offering additional competitive opportunities for kids in the High Country while adopting the most innovative practices in youth athlete development. </p>
    <p><i>Our Purpose…</i>is to create lifelong memories for our kids, teach valuable lessons through competitive baseball, and develop better athletes that can go on to live active, healthy, and productive lives.</p>
    <p><i>Our Values…</i></p>
    <ul>
      <li>Community Centered – Sports is a powerful mechanism for bringing people together from diverse backgrounds and strengthening communities. We strive to strengthen our community through all that we do and work to ensure that social or economic barriers don’t inhibit any child from growing through competitive sports. </li>
      <li>Continuous Learning - We stay connected to the most innovative thinking in youth sports through organizations like The Aspen Institute, USA Baseball, and Changing the Game Project. Our affiliation with Big League Camp affords us a constant source of the most innovative thinking in youth baseball player development. </li>
      <li>Complementary Objectives- Our goals are to create experiences where kids have a ton of fun, learn valuable life skills, and become better athletes. We don’t view these as conflicting goals, rather, they support and reinforce each other if done well. At young ages, fun and enjoyment are the catalyst to player development. </li>
      <li>Long-term Focus –We strive to be competitive today, but we focus on growing each child’s love for the game, building a solid foundation of fundamentals, and helping them become better people and athletes. We are diligent about issues of arm care and are guided by USA Baseball’s Pitch Smart Framework. We emphasize practice over competition while seeking insight from USA Baseball Guidelines.</li>
      <li>Collaborative Approach – We are a network of parents and professionals who care deeply about youth sports and these kids. We tap into our distinct knowledge and experiences to create collective insight that helps us build great experiences for our kids. It’s truly a team effort. </li>
    </ul>
    <p><i>Our Sponsors</i></p>
    <p>We would like to thank our dedicated sponsors for supporting our program!</p>
    <p>Platinum ($1000+), Silver ($500+), Bronze ($250+), Non-Disclosed</p>
  </Layout>
)

export default IndexPage
