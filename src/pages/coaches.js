import React from "react"

import Table from "../components/table"
import SectionTitle from "../components/section-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { createHeaders, createRows } from "../utils/tableHelpers"

const Coaches = () => {
  const coachesHeaders = ["Name", "Role", "Background"]
  // const payHeaders = ["Items", "Cost Per Player"]
  // const donationHeaders = [
  //   "Total Donation Level",
  //   "Final Total Individual Costs + Tourn. Fees",
  // ]
  const coaches = [
    {
      Name: "Mark Lewis",
      "Roles and Responsibilities*":
        "Scheduling, practice planning, communication, and primary pitching",
    },
    {
      Name: "Allie Woods",
      "Roles and Responsibilities*":
        "Outfield, base running, third base coach ",
    },
    {
      Name: "Jim Piper",
      "Roles and Responsibilities*": "Infield, first base coach, statistician",
    },
    {
      Name: "Brian Tester",
      "Roles and Responsibilities*":
        "Catchers, primary hitting, secondary pitching",
    },
    {
      Name: "Ben Morris",
      "Roles and Responsibilities*": "Speed, Agility, Nutrition",
    },
  ]
  // const donations = [
  //   {
  //     "Total Donation Level": "$4000",
  //     "Final Total Individual Costs + Tourn. Fees": "$166.00",
  //   },
  //   {
  //     "Total Donation Level": "$3000",
  //     "Final Total Individual Costs + Tourn. Fees": "$250.00",
  //   },
  //   {
  //     "Total Donation Level": "$2000",
  //     "Final Total Individual Costs + Tourn. Fees": "$333.33",
  //   },
  //   {
  //     "Total Donation Level": "$1000",
  //     "Final Total Individual Costs + Tourn. Fees": "$416.66",
  //   },
  // ]

  // const payment = [
  //   {
  //     Items: "Feb. 29th Overnight",
  //     "Cost Per Player": "$150.00",
  //   },
  //   {
  //     Items: (
  //       <>
  //         Big League Camp Affiliation:
  //         <ul>
  //           <li>
  //             Full uniform (jersey top, pants, belt, socks, hat, practice shirt,
  //             undershirt, pair of batting gloves)
  //           </li>
  //           <li>2-month facility membership</li>
  //           <li>5 field rentals for pre-season Sunday practices</li>
  //           <li>Full Big-League Camp staff coaching on two Sundays</li>
  //         </ul>
  //       </>
  //     ),
  //     "Cost Per Player": "$350.00",
  //   },
  //   {
  //     Items: "Tournament Fees",
  //     "Cost Per Player": "$20.00 per tournament",
  //   },
  //   {
  //     Items: "Total per player for Spring/Summer",
  //     "Cost Per Player": "$500.00",
  //   },
  // ]

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container mx-auto overflow-hidden mt-8">
        <div className="mb-8">
          <SectionTitle title={`Coaches`} />
          <Table
            headers={createHeaders(coachesHeaders)}
            body={createRows(coaches, "coaches")}
          />

        </div>
        {/* <div className="mb-8">
          <SectionTitle title={`Costs for Spring/Summer 2020`} />
          <Table
            headers={createHeaders(payHeaders)}
            body={createRows(payment, "payment")}
          />
        </div> */}
        {/* <div className="mb-8">
          <SectionTitle title={`Corporate and Personal Donations`} />
          <p>
            Last year we were fortunate to receive donations of nearly $3000
            which played a huge role in offsetting individual costs. The rest of
            the table shows the impact of certain donation levels on individual
            costs.
          </p>
          <Table
            headers={createHeaders(donationHeaders)}
            body={createRows(donations, "donations")}
          />
        </div> */}
      </div>
    </Layout>
  )
}

export default Coaches
