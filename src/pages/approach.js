import React, { useState } from "react"

import Layout from "../components/layout"
import SectionContainer from "../components/section-container"
import SEO from "../components/seo"

import Table from "../components/table"
import SectionTitle from "../components/section-title"
import { createHeaders, createRows } from "../utils/tableHelpers"

const Approach = () => {
  const [activeTab, setActiveTab] = useState(1)
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
        <SectionContainer>
          <SectionTitle title={"Our Approach"} />
          <p>
            Our approach is designed to balance our emphasis on development and competition by focusing on four core elements: 1) Our Developmental philosophy, 2) Building the Havoc team 3) Process for Building Tournament Rosters, & 4) “In Game” Playing Time Guidelines.
          </p>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-auto p-4">
              <button onClick={() => setActiveTab(1)} className={`w-full ${activeTab === 1 ? 'active-tab' : 'inactive-tab'}`}>Element 1 - Developmental Philosophy</button>
            </div>
            <div className="w-full sm:w-auto p-4">
              <button onClick={() => setActiveTab(2)} className={`w-full ${activeTab === 2 ? 'active-tab' : 'inactive-tab'}`}>Element 2 - Build Havoc Team</button>
            </div>
            <div className="w-full sm:w-auto p-4">
              <button onClick={() => setActiveTab(3)} className={`w-full ${activeTab === 3 ? 'active-tab' : 'inactive-tab'}`}>Element 3 - Build Tournament Roster</button>
            </div>
            <div className="w-full sm:w-auto p-4">
              <button onClick={() => setActiveTab(4)} className={`w-full ${activeTab === 4 ? 'active-tab' : 'inactive-tab'}`}>Element 4 - Playing Time Guidelines</button>
            </div>
          </div>
        </SectionContainer>
        {activeTab === 1 && (
          <SectionContainer>
            <h3>Element 1: Developmental Philosophy</h3>
            <p className="mb-4">Our developmental philosophy guides all elements of our program design. What does this mean? It means that our goals align to two core areas of player development: Character Development and Athlete Development. </p>
            <p className="mb-4"><i>Character Development</i> is our first priority.  Our focus is on helping each player learn what it means to be a good teammate. In doing so, we want to help each child transition from a “me” centered world view to a “we” one. We are laser focused on developing great sportsmanship, where each player learns to win and lose with grace. We want our players to learn how to deal with frustration and struggle in productive ways, realizing it is an inevitable part of any journey worth taking. We emphasize effort and attitude always, and help each child connect the dots between disciplined practice and in game performance. How they spend their time today impacts what they can do tomorrow, we want the kids to develop that understanding and begin taking ownership of their development. It is these values and more that will equip each child with the tools they need to go on to live healthy and productive lives. That is our main goal.</p>
            <p><i>Athlete Development</i> matters a lot too. We understand the chance that any kid plays competitive sports beyond high school is slim, but we start from the assumption that it is entirely possible if it happens to be a child’s dream. Our role is in helping kids discern their dreams, then helping them build the skills to chase them…whatever they may be. From an athlete development perspective, we focus on the following and more:</p>
            <ul className="list-parent">
              <li>
                It must be fun! – Kids want to play youth sports because they are fun and they get to spend time with their friends. They quit when they stop having fun…period. We can’t ever lose sight of that.
              </li>
              <li>
                It’s not all fun! – How we define fun is important. If children see going to the movies and playing mini-golf as synonymous with fun, then they might have trouble reconciling how running foul poll to foul poll to build endurance is fun. We help them understand how their can be different types of fun, and sometimes you need to endure some discomfort in the short-term to have fun in the long-term.
              </li>
              <li>
                Practice design – We take practice design seriously. We are constantly learning and studying to get better. Seeing a kid standing around in practice is unacceptable. We seek to maximize reps through efficient design, small groups, and station rotation. Kids want to move, they want high energy, our practices should be that. Kids love games and they love to compete; our practices should have a lot of both.
              </li>
              <li>
                Specialists – We are not professional coaches, but we constantly seek insight from baseball professionals to help us get better.
              </li>
              <li>
                Cross train – We are strong advocates that kids should play a lot of sports up to…at the least…12 years old. They build more balanced bodies, more well-rounded athleticism, it keeps things interesting, and they interact with more kids. Our program should never stifle that, but always encourage it. In addition to building sport specific skills, we also emphasize developing in non-sport specific ways…speed, strength, and agility.
              </li>
              <li>
                Cultivate an internal engine -  Let’s face it, from an athlete development perspective it’s hard to tell if any child has the physical tools to compete at high levels until around 13 or 14 years old. As a result, our objective is to help kids get to that point equipped with the following. First, we want them to have a solid foundation of fundamentals. Second, we want them to understand how to practice well and have built a strong work ethic. Third, we want them to be comfortable in competitive settings. Fourth, we want them to have a love for the game and desire to take it to the next level if they decide they want to.
              </li>
            </ul>
            <p>Together, our focus on character development and athlete development helps define our developmental philosophy. In summary, we want to win today, but we are more interested in developing great people and athletes that can win throughout their lives. </p>
          </SectionContainer>
        )}
        {activeTab === 2 && (
          <div className="w-full">
            <SectionContainer>
              <h3>Element 2: Build Havoc Team</h3>
              <p>
                Issues of roster size and playing time are some of the most
                challenging elements of competitive youth sports. It’s a dilemma
                between wanting to offer playing opportunities for more kids and
                being competitive in tournaments so morale stays high. To address
                these tensions, we do the following:
            </p>
              <ul className="list-parent">
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
            </SectionContainer>

            <SectionContainer>
              <div className="secondary-bg p-2 -mb-4 border-b text-white text-center">
                <h3>The Havoc Team</h3>
              </div>
              <Table
                headers={createHeaders(teamHeaders)}
                body={createRows(teamBody, "team", true)}
              />
            </SectionContainer>
            <SectionContainer>
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
            </SectionContainer>
          </div>)}
        {activeTab === 3 && (
          <SectionContainer>
            <h3>Element 3: Build Tournament Roster</h3>
            <p>
              From our 16-person team we build each tournament roster following
              the process outlined below.
          </p>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-1/3">
                <div className="p-4">
                  <div className="bg-white shadow rounded p-4 border">
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
                  <div className="bg-white shadow rounded p-4 border">
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
                  <div className="bg-white shadow rounded p-4 border">
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
          </SectionContainer>
        )}
        {activeTab === 4 && (
          <SectionContainer>
            <h3>Element 4: “In Game” Playing Time Guidelines</h3>
            <p>
              The following are additional guidelines we use to help address the
              tension between development and competition during competitive play:
            </p>
            <ul className="list-parent">
              <li>
                Saturday games we work hard to get quality playing time for all. We
                prefer to bat a continuous lineup and emphasize position rotation
            more than on Sundays.
              </li>
              <li>
                Sunday games we adopt a more competitive approach. We bat the best 9
                or 10 players and substitute less frequently, unless doing so
            enhances our competitiveness.
              </li>
              <li>
                When we are up or down by 10 runs or more we work hard to get all
                kids in the game and at bats.
          </li>
              <li>
                Scrimmage or weekday game we try to split in half. The first half is
                used to get quality reps for the kids that will be playing in the
                upcoming tournament. The second half emphasizes development, so we
            emphasize position rotation and equitable playing time.
              </li>
              <li>
                We emphasize position rotation in practice. Players will get reps at
                nearly all positions.
          </li>
              <li>
                Playing time is determined by things like skill,
                practice/season/game time performance, attitude, practice
            attendance, etc.
              </li>
              <li>
                Kids who don’t get to play as much, understand why through clear and
                direct communication and plans are offered to facilitate
            improvement.
              </li>
              <li>
                Kids who are not playing always have a role, and are always put in a
            position to learn and further develop their skills.
              </li>
            </ul>
          </SectionContainer>
        )}
      </div>
    </Layout>
  )
}

export default Approach
