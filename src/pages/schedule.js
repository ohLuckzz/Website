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
      Date: <b>February 16th</b>,
      Time: <b>2:00 - 4:00</b>,
      Place: "Big League Camp, Marion",
    },
    {
      Date: <b>February 23rd</b>,
      Time: <b>2:00 - 4:00</b>,
      Place: "Big League Camp, Marion",
    },
    {
      Date: <b>February 29th - March 1st</b>,
      Time: <b>2:00 - 4:00</b>,
      Place: "Big League Camp, Marion",
    },
    {
      Date: <b>March 8th</b>,
      Time: <b>2:00 - 4:00</b>,
      Place: "Big League Camp, Marion",
    },
    {
      Date: <b>March 22nd</b>,
      Time: <b>2:00 - 4:00</b>,
      Place: "Big League Camp, Marion",
    },
  ]

  const tournamentSchedule = [
    { date: <b>March 28th</b>, place: "Morganton, NC" },
    { date: <b>April 4th and 5th </b>, place: "Morganton, NC or Clemmons, NC" },
    { date: <b>April 25th and 26th</b>, place: "Morganton, NC or Clemmons, NC" },
    { date: <b>May 9th</b>, place: "Morganton, NC" },
    { date: <b>May 16th and May 17th </b>, place: "Morganton, NC or Clemmons, NC" },
    { date: <b>May 30th</b>, place: "Morganton, NC" },
    { date: <b>June 13 & 14</b>, place: "Boone, NC" },
    { date: <b>June 20 & 21</b>, place: "Boone, NC" },
  ]

  const inSeasonPracticeSchedule = [
    { date: <b>Tuesdays</b>, time: <b>TBD</b>, place: "TBD" },
    { date: <b>Thursdays</b>, time: <b>TBD</b>, place: "TBD" },
    { date: <b>Sundays</b>, time: <b>2:00 - 4:00</b>, place: "Parks and Rec." },
  ]

  return (
    <Layout>
      <SEO title="Schedule" />
      <div className="container mx-auto overflow-hidden mt-8">
        <SectionContainer>
          <SectionTitle title={`2020 Pre-Season Practice Schedule`} />
          <p className="text-center md:hidden">Scroll inside the table to see all the details.</p>
          <Table
            headers={createHeaders(preSeasonPracticeHeaders)}
            body={createRows(preSeasonPracticeSchedule, "PreSeasonPractice")}
          />
        </SectionContainer>
        <SectionContainer>
          <SectionTitle title={`2020 Tentative Tournament Schedule*`} />
          <p className="text-center md:hidden">Scroll inside the table to see all the details.</p>
          <Table
            headers={createHeaders(tournamentHeaders)}
            body={createRows(tournamentSchedule, "Tournament")}
          />
          <h5>
            *In addition to our tournament schedule, we will also aim to have
            6-8 single games with local travel teams.</h5>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle title={`2020 Tentative Practice Schedule*`} />
          <p className="text-center md:hidden">Scroll inside the table to see all the details.</p>
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
