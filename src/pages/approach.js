import React, { useState } from "react"

import Layout from "../components/layout"
import SectionContainer from "../components/section-container"
import SEO from "../components/seo"

import Table from "../components/table"
import SectionTitle from "../components/section-title"

import Data from "../content/approach"

import { createHeaders, createRows } from "../utils/tableHelpers"

const Approach = () => {
  const [activeTab, setActiveTab] = useState(1)
  const teamHeaders = ["_", "Blue Group", "Red Group", "White Group"]

  const teamBody = Data.element2.teamHavocTable.map(evt => {
    evt._ = <b>{evt._}</b>
    return evt
  })

  const createBullets = element => {
    return Data[element].bullets.map((bullet, i) => {
      return <li key={i}>{bullet}</li>
    })
  }

  const el3Cards = () => {
    return Data.element3.cards.map((card, i) => {
      return (
        <div key={i} className="w-full sm:w-1/3">
          <div className="p-4">
            <div className="bg-white shadow rounded p-4 border">
              <h4 className="mb-4">{card.title}</h4>
              <p>{card.text}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container mx-auto overflow-hidden mt-8">
        <SectionContainer>
          <SectionTitle title={"Our Approach"} />
          <p>{Data.header}</p>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-auto p-4">
              <button
                onClick={() => setActiveTab(1)}
                className={`w-full ${
                  activeTab === 1 ? "active-tab" : "inactive-tab"
                }`}
              >
                {Data.element1.title}
              </button>
            </div>
            <div className="w-full sm:w-auto p-4">
              <button
                onClick={() => setActiveTab(2)}
                className={`w-full ${
                  activeTab === 2 ? "active-tab" : "inactive-tab"
                }`}
              >
                {Data.element2.title}
              </button>
            </div>
            <div className="w-full sm:w-auto p-4">
              <button
                onClick={() => setActiveTab(3)}
                className={`w-full ${
                  activeTab === 3 ? "active-tab" : "inactive-tab"
                }`}
              >
                {Data.element3.title}
              </button>
            </div>
            <div className="w-full sm:w-auto p-4">
              <button
                onClick={() => setActiveTab(4)}
                className={`w-full ${
                  activeTab === 4 ? "active-tab" : "inactive-tab"
                }`}
              >
                {Data.element4.title}
              </button>
            </div>
          </div>
        </SectionContainer>
        {activeTab === 1 && (
          <SectionContainer>
            <h3>{Data.element1.title}</h3>
            <p className="mb-4">{Data.element1.firstParagraph}</p>
            <p className="mb-4">{Data.element1.secondParagraph}</p>
            <p>{Data.element1.thirdParagraph}</p>
            <ul className="list-parent">{createBullets("element1")}</ul>
            <p>{Data.element1.close}</p>
          </SectionContainer>
        )}
        {activeTab === 2 && (
          <div className="w-full">
            <SectionContainer>
              <h3>{Data.element2.title}</h3>
              <p>{Data.element2.firstParagraph}</p>
              <ul className="list-parent">{createBullets("element2")}</ul>
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
              <p>{Data.element2.close}</p>
            </SectionContainer>
          </div>
        )}
        {activeTab === 3 && (
          <SectionContainer>
            <h3>{Data.element3.title}</h3>
            <p>{Data.element3.firstParagraph}</p>
            <div className="flex flex-wrap -mx-4">{el3Cards()}</div>
          </SectionContainer>
        )}
        {activeTab === 4 && (
          <SectionContainer>
            <h3>{Data.element4.title}</h3>
            <p>{Data.element4.firstParagraph}</p>
            <ul className="list-parent">{createBullets("element4")}</ul>
          </SectionContainer>
        )}
      </div>
    </Layout>
  )
}

export default Approach
