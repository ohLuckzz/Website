import React from "react"

import Layout from "../components/layout"
import SectionContainer from "../components/section-container"
import Table from "../components/table"
import SectionTitle from "../components/section-title"
import SEO from "../components/seo"
import { createHeaders, createRows } from "../utils/tableHelpers"

import Data from "../content/schedule"

const Schedule = () => {
  const preSeasonPracticeHeaders = ["Date", "Time", "Place"]
  const tournamentHeaders = ["Date", "Place"]
  const inSeasonPracticeHeaders = ["Date", "Time", "Place"]

  const preSeasonPracticeSchedule = Data.preSeasonPracticeSchedule.map(evt => {
    evt.Date = <b>{evt.Date}</b>
    evt.Time = <b>{evt.Time}</b>
    return evt
  })

  const tournamentSchedule = Data.tournamentSchedule.map(evt => {
    evt.date = <b>{evt.date}</b>
    return evt
  })

  const inSeasonPracticeSchedule = Data.inSeasonPracticeSchedule.map(evt => {
    evt.date = <b>{evt.date}</b>
    evt.time = <b>{evt.time}</b>
    return evt
  })

  return (
    <Layout>
      <SEO title="Schedule" />
      <div className="container mx-auto overflow-hidden mt-8">
        <SectionContainer>
          <SectionTitle title={`2020 Pre-Season Practice Schedule`} />
          <p className="text-center md:hidden">
            Scroll inside the table to see all the details.
          </p>
          <Table
            headers={createHeaders(preSeasonPracticeHeaders)}
            body={createRows(preSeasonPracticeSchedule, "PreSeasonPractice")}
          />
        </SectionContainer>
        <SectionContainer>
          <SectionTitle title={`2020 Tentative Tournament Schedule*`} />
          <p className="text-center md:hidden">
            Scroll inside the table to see all the details.
          </p>
          <Table
            headers={createHeaders(tournamentHeaders)}
            body={createRows(tournamentSchedule, "Tournament")}
          />
          <h5>{Data.tournamentText}</h5>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle title={`2020 Tentative Practice Schedule*`} />
          <p className="text-center md:hidden">
            Scroll inside the table to see all the details.
          </p>
          <Table
            headers={createHeaders(inSeasonPracticeHeaders)}
            body={createRows(inSeasonPracticeSchedule, "InSeason")}
          />
          <h5>{Data.inSeasonPracticeText}</h5>
        </SectionContainer>
      </div>
    </Layout>
  )
}

export default Schedule
