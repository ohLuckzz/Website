import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Table from "../components/table"
import SectionTitle from "../components/section-title"
import { createHeaders, createRows } from "../utils/tableHelpers"

const Approach = () => {
  const teamHeaders = ["_", "Blue Group", "Red Group", "White Group"]

  const teamBody = [
    {
      _: <b>Description:</b>,
      "Blue Group": `This will be the core group that goes to all tournaments if they
        are available.`,
      "Red Group": `This group will be made of players that want to play a lighter
        tournament schedule or are not quite at the level of the blue
        group. The goal for red group players is to play in 50% of the
        tournaments/games.`,
      "White Group": `This group will be made up of highly engaged kids who want to
        improve by coming to our once a week “Skills, Drills, and
        Scrimmage” practice.`,
    },
    {
      _: <b>Practice Requirement:</b>,
      "Blue Group": `Blue group players are expected to be at all team practices.`,
      "Red Group": `Red group players are expected to attend at least the Drills,
              Skills, and Scrimmage practice 1 day a week.`,
      "White Group": `White group players attend the Drills, Skills, and Scrimmage
              practice 1 day a week.`,
    },
    {
      _: <b>Rec. Ball Suggestion:</b>,
      "Blue Group": `Not Encouraged`,
      "Red Group": `Slightly Encouraged`,
      "White Group": `Heavily Encouraged`,
    },
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container mx-auto overflow-hidden mt-8">
        <div className="mb-8">
          <SectionTitle title={"Our Approach"} />
          <p>
            Our approach is designed to…as best we can…balance a developmental
            (i.e. include more kids to reduce issues of early selection,
            encourage position rotation, equitable playing time) and competitive
            (i.e. winning is important, best players play, etc.). To address
            this tension there are three core elements to our approach.
          </p>
        </div>
        <div className="w-full">
          <div className="mb-8">
            <h3>Element 1: Build Havoc Team</h3>
            <p>
              Issues of roster size and playing time are some of the most
              challenging elements of competitive youth sports. It’s a dilemma
              between wanting to offer playing opportunities for more kids and
              being competitive in tournaments so morale stays high. To address
              these tensions, we do the following:
            </p>
            <ul style={{ padding: "20px 0 20px 40px" }}>
              <li>
                We seek to have up to 16 kids on The Havoc team. To build this
                team we start with the kids that were on the team last year. We
                then huld an assessment day for other kids interested in joining
                The Havoc team. If we feel like there are kids and families that
                align to our values and can help us be more competitive, they
                are added to the Havoc Team.
              </li>
              <li>
                The 16 kids are placed in either the blue, red, or white group
                (see table 1) based on skill, availability, and playing time
                desirability (i.e. how many tournaments they want to play).
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="primary-bg p-2 -mb-4 border-b text-white text-center">
              <h3>The Havoc Team</h3>
            </div>
            <Table
              headers={createHeaders(teamHeaders)}
              body={createRows(teamBody, "team", true)}
            />
          </div>
          <div className="mb-8">
            <p>
              We will work to ensure that each kid feels as though they are part
              of the Havoc Team. At the start of the season we will communicate
              this framework to the kids and give them an initial idea of their
              current standing. We will then communicate to them that attitude,
              commitment, effort, and their skill level will constitute their
              general placement and that they can adjust their placement by
              focusing on these key factors. Group decisions will made by
              coaching staff. Rec. ball suggestion speaks to whether or not we
              think it would be beneficial for kids to also play Rec. baseball
              to get needed game time reps.
            </p>
          </div>
        </div>
        <hr className="mb-8" />
        <div className="mb-8">
          <h3>Element 2: Build Tournament Roster</h3>
          <p>
            From our 16-person team we build each tournament roster following
            the process outlined below.
          </p>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/3">
              <div className="p-4">
                <div className="bg-white shadow rounded p-4">
                  <h4 className="mb-4">1. Assess Blue Squad Availability</h4>
                  <p>
                    We send an email to the blue squad 2 weeks before the
                    tournament date to assess availability.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div className="p-4">
                <div className="bg-white shadow rounded p-4">
                  <h4 className="mb-4">2. Draw From Red Squad</h4>
                  <p>
                    Based on blue squad availability we pick from red squad to
                    round out the roster for a particular tournament.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div className="p-4">
                <div className="bg-white shadow rounded p-4">
                  <h4 className="mb-4">
                    3. Communicate Roster and Tournament Schedule
                  </h4>
                  <p>
                    Roster communicated 1 week prior to tournament and
                    tournament schedule as provided.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-8" />
        <h3>Element 3: “In Game” Playing Time Guidelines</h3>
        <p>
          The following are additional guidelines we use to help address the
          tension between development and competition during competitive play:
        </p>
        <ul style={{ padding: "20px 0 20px 40px" }}>
          <li>
            Saturday games we work hard to get quality playing time for all. We
            prefer to bat a continuous lineup and emphasize position rotation
            more than on Sundays.{" "}
          </li>
          <li>
            Sunday games we adopt a more competitive approach. We bat the best 9
            or 10 players and substitute less frequently, unless doing so
            enhances our competitiveness.{" "}
          </li>
          <li>
            When we are up or down by 10 runs or more we work hard to get all
            kids in the game and at bats.
          </li>
          <li>
            Scrimmage or weekday game we try to split in half. The first half is
            used to get quality reps for the kids that will be playing in the
            upcoming tournament. The second half emphasizes development, so we
            emphasize position rotation and equitable playing time.{" "}
          </li>
          <li>
            We emphasize position rotation in practice. Players will get reps at
            nearly all positions.
          </li>
          <li>
            Playing time is determined by things like skill,
            practice/season/game time performance, attitude, practice
            attendance, etc.{" "}
          </li>
          <li>
            Kids who don’t get to play as much, understand why through clear and
            direct communication and plans are offered to facilitate
            improvement.{" "}
          </li>
          <li>
            Kids who are not playing always have a role, and are always put in a
            position to learn and further develop their skills.{" "}
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Approach
