import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Approach = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Our Approach</h1>
        <p>Our approach is designed to…as best we can…balance a developmental (i.e. include more kids to reduce issues of early selection, encourage position rotation, equitable playing time) and competitive (i.e. winning is important, best players play, etc.). To address this tension there are three core elements to our approach.</p>
        <h3>Element 1: Build Havoc Team</h3>
        <p>Issues of roster size and playing time are some of the most challenging elements of competitive youth sports. It’s a dilemma between wanting to offer playing opportunities for more kids and being competitive in tournaments so morale stays high. To address these tensions, we do the following:</p>
        <ol>
            <li>
                We seek to have up to 16 kids on The Havoc team. To build this team we start with the kids that were on the team last year. We then hold an assessment day for other kids interested in joining The Havoc team. If we feel like there are kids and families that align to our values and can help us be more competitive, they are added to the Havoc Team.
            </li>
            <li>
                The 16 kids are placed in either the blue, red, or white group (see table 1) based on skill, availability, and playing time desirability (i.e. how many tournaments they want to play).
            </li>
        </ol>
        <table>
            <thead>
                <tr>
                    <th>The Havoc Team</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Blue Group</th>
                    <th>Red Group</th>
                    <th>White Group</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Description:</b></td>
                    <td>This will be the core group that goes to all tournaments if they are available.</td>
                    <td>This group will be made of players that want to play a lighter tournament schedule or are not quite at the level of the blue group. The goal for red group players is to play in 50% of the tournaments/games.</td>
                    <td>This group will be made up of highly engaged kids who want to improve by coming to our once a week “Skills, Drills, and Scrimmage” practice.</td>
                </tr>
                <tr>
                    <td><b>Practice Requirement:</b></td>
                    <td>Blue group players are expected to be at all team practices.</td>
                    <td>Red group players are expected to attend at least the Drills, Skills, and Scrimmage practice 1 day a week.</td>
                    <td>White group players attend the Drills, Skills, and Scrimmage practice 1 day a week.</td>
                </tr>
                <tr>
                    <td><b>Rec. Ball Suggestion?</b></td>
                    <td>Not Encouraged</td>
                    <td>Slightly Encouraged</td>
                    <td>Highly Encouraged</td>
                </tr>
            </tbody>
        </table>
        <p>
            We will work to ensure that each kid feels as though they are part of the Havoc Team. At the start of the season we will communicate this framework to the kids and give them an initial idea of their current standing. We will then communicate to them that attitude, commitment, effort, and their skill level will constitute their general placement and that they can adjust their placement by focusing on these key factors. Group decisions will made by coaching staff. Rec. ball suggestion speaks to whether or not we think it would be beneficial for kids to also play Rec. baseball to get needed game time reps.
        </p>
        <h3>Element 2: Build Tournament Roster</h3>
        <p>From our 16-person team we build each tournament roster following the process outlined below.</p>
        <table>
            <thead>
                <tr>
                    <th>Step 1: Assess blue squad availability</th>
                    <th>Step 2: Draw from red squad </th>
                    <th>Step 3: Communicate roster and tournament schedule</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>We send an email to the blue squad 2 weeks before the tournament date to assess availability.</td>
                    <td>Based on blue squad availability we pick from red squad to round out the roster for a particular tournament.</td>
                    <td>Roster communicated 1 week prior to tournament and tournament schedule as provided.</td>
                </tr>
            </tbody>
        </table>
        <h3>Element 3: “In Game” Playing Time Guidelines</h3>
        <p>The following are additional guidelines we use to help address the tension between development and competition during competitive play:</p>
        <ul>
            <li>Saturday games we work hard to get quality playing time for all. We prefer to bat a continuous lineup and emphasize position rotation more than on Sundays. </li>
            <li>Sunday games we adopt a more competitive approach. We bat the best 9 or 10 players and substitute less frequently, unless doing so enhances our competitiveness. </li>
            <li>When we are up or down by 10 runs or more we work hard to get all kids in the game and at bats.</li>
            <li>Scrimmage or weekday game we try to split in half. The first half is used to get quality reps for the kids that will be playing in the upcoming tournament. The second half emphasizes development, so we emphasize position rotation and equitable playing time. </li>
            <li>We emphasize position rotation in practice. Players will get reps at nearly all positions.</li>
            <li>Playing time is determined by things like skill, practice/season/game time performance, attitude, practice attendance, etc. </li>
            <li>Kids who don’t get to play as much, understand why through clear and direct communication and plans are offered to facilitate improvement. </li>
            <li>Kids who are not playing always have a role, and are always put in a position to learn and further develop their skills. </li>
        </ul>


    </Layout>
)

export default Approach
