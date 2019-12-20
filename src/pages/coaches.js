import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Coaches = () => {


    const coaches = [
        { name: 'Mark Lewis', role: 'Scheduling, practice planning, communication, and primary pitching' },
        { name: 'Allie Woods', role: 'Outfield, base running, third base coach ' },
        { name: 'Jim Piper', role: 'Infield, first base coach, statistician' },
        { name: 'Brian Tester', role: 'Catchers, primary hitting, secondary pitching' },
        { name: 'Ben Morris', role: 'Speed, Agility, Nutrition' }
    ]

    return (
        <Layout>
            <SEO title="Home" />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roles and Responsibilities*</th>
                        <th>Practice Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {coaches.map((coach) => {
                        const { name, role } = coach
                        return (
                            <tr key={name}>
                                <td>{name}</td>
                                <td>{role}</td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
            <p>*Roles indicate the experts in particular areas and who is in charge of 1) researching/designing/leading stations during practice, 2) leading on field coaching for particular areas, and 3) in game coaching. Our goals with this level of coordination are to leverage our time capacity to greater degrees, develop greater expertise in specified areas, and simplify the message for kids. </p>
            <h3>Costs for Spring/Summer 2020</h3>
            <table>
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Cost Per Player</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Feb. 29th Overnight</td>
                        <td>$150.00</td>
                    </tr>
                    <tr>
                        <td>Big League Camp Affiliation:
                            <ul>
                                <li>Full uniform (jersey top, pants, belt, socks, hat, practice shirt, undershirt, pair of batting gloves)</li>
                                <li>2-month facility membership</li>
                                <li>5 field rentals for pre-season Sunday practices</li>
                                <li>Full Big-League Camp staff coaching on two Sundays</li>
                            </ul>
                        </td>
                        <td>$350.00</td>
                    </tr>
                    <tr>
                        <td>Tournament Fees</td>
                        <td>$20.00 per tournament</td>
                    </tr>
                    <tr>
                        <td>Total per player for Spring/Summer</td>
                        <td>$500.00+</td>
                    </tr>
                </tbody>
            </table>
            <h3>
                Corporate and Personal Donations
            </h3>
            <p>
                Last year we were fortunate to receive donations of nearly $3000 which played a huge role in offsetting individual costs. The rest of the table shows the impact of certain donation levels on individual costs.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Total Donation Level</th>
                        <th>Final Total Individual Costs + Tourn. Fees</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>$4000</td>
                        <td>$166.00</td>
                    </tr>
                    <tr>
                        <td>$3000</td>
                        <td>$250.00</td>
                    </tr>
                    <tr>
                        <td>$2000</td>
                        <td>$333.33</td>
                    </tr>
                    <tr>
                        <td>$1000</td>
                        <td>$416.66</td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    )
}

export default Coaches
