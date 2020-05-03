import React, { useMemo } from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1>about</h1> */}
      <div className="flex flex-wrap flex-col items-center text-green-700">
        <div className="w-1/2 text-center my-16">
          <h2>Artist Statement</h2>
          <p>
            I like to create art through graphic design because it allows me to
            turn a simple photo into something that is very elaborate and
            appealing to the audience. My creations focus on sports primarily
            with the NFL and NBA. My inspiration comes from other forms of
            digital media and adding my own style to them. The art that I make
            through graphic design gives me a creative outlet to personalize any
            photo of my choosing.
          </p>
        </div>
        <div className="w-1/2 text-center">
          <h2>Bio</h2>
          <p>
            Cade Bettinger is currently a full-time college student at Guilford
            Technical Community College obtaining an Associate in Arts. Cade
            found a passion for graphic designs through his own interaction with
            digital media. His inspiration comes from both the designs he views
            through online platforms and his passion for the sports.
          </p>
        </div>
        <div className=" w-full flex my-24">
          <div className="w-1/2 text-center">
            <h2>
              <a href="https://docs.google.com/document/d/1iyv-mmTyWpJ6Ko_LBDqN7YGwJ-0g3BFwVvBzhuASM0E/edit?usp=sharing">
                Cover Letter
              </a>
            </h2>
          </div>
          <div className="w-1/2 text-center">
            <h2>
              <a href="https://docs.google.com/document/d/1GXp574VlVApW8boAcEvOQqWezUkchAztKBAIZPk4Woo/edit?usp=sharing">
                Curriculum Vitae
              </a>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
