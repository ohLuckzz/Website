import React from "react"

import Layout from "../components/layout"
import SectionContainer from "../components/section-container"
import Table from "../components/table"
import SectionTitle from "../components/section-title"
import SEO from "../components/seo"
import { createHeaders, createRows } from "../utils/tableHelpers"

const Schedule = () => {
  const preSeasonPracticeHeaders = ["Date", "Time", "Place"]
  const tournamentHeaders = ["Date", "Place"]
  const inSeasonPracticeHeaders = ["Date", "Time", "Place"]

  const preSeasonPracticeSchedule = [
    {
      Date: "February 16th",
      Time: "2:00 - 4:00",
      Place: "Big League Camp, Marion",
    },
    {
      Date: "February 23rd",
      Time: "2:00 - 4:00",
      Place: "Big League Camp, Marion",
    },
    {
      Date: "February 29th - March 1st",
      Time: "2:00 - 4:00",
      Place: "Big League Camp, Marion",
    },
    {
      Date: "March 8th",
      Time: "2:00 - 4:00",
      Place: "Big League Camp, Marion",
    },
    {
      Date: "March 22nd",
      Time: "2:00 - 4:00",
      Place: "Big League Camp, Marion",
    },
  ]

  const tournamentSchedule = [
    { date: "March 28th", place: "Morganton, NC" },
    { date: "April 4th and 5th ", place: "Morganton, NC or Clemmons, NC" },
    { date: "April 25th and 26th", place: "Morganton, NC or Clemmons, NC" },
    { date: "May 9th", place: "Morganton, NC" },
    { date: "May 16th and May 17th  ", place: "Morganton, NC or Clemmons, NC" },
    { date: "May 30th", place: "Morganton, NC" },
    { date: "June 13 & 14", place: "Boone, NC" },
    { date: "June 20 & 21", place: "Boone, NC" },
  ]

  const inSeasonPracticeSchedule = [
    { date: "Tuesdays", time: "TBD", place: "TBD" },
    { date: "Thursdays", time: "TBD", place: "TBD" },
    { date: "Sundays", time: "2:00 - 4:00", place: "Parks and Rec." },
  ]

  return (
    <Layout>
      <SEO title="Schedule" />
      <div className="container mx-auto overflow-hidden mt-8">
        <SectionContainer>
          <SectionTitle title={`2020 Pre-Season Practice Schedule`} />
          <Table
            headers={createHeaders(preSeasonPracticeHeaders)}
            body={createRows(preSeasonPracticeSchedule, "PreSeasonPractice")}
          />
        </SectionContainer>
        <SectionContainer>
          <SectionTitle title={`2020 Tentative Tournament Schedule*`} />
          <Table
            headers={createHeaders(tournamentHeaders)}
            body={createRows(tournamentSchedule, "Tournament")}
          />
          <h5>
            *In addition to our tournament schedule, we will also aim to have
            6-8 single games with Lenoir Ravens, Equip, etc.
          </h5>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle title={`2020 Tentative Practice Schedule*`} />
          <Table
            headers={createHeaders(inSeasonPracticeHeaders)}
            body={createRows(inSeasonPracticeSchedule, "InSeason")}
          />
          <h5>
            *New for 2020 will also be a structured at home program so athletes
            can practice on their own too.
          </h5>
        </SectionContainer>
      </div>
    </Layout>
  )
}

export default Schedule
