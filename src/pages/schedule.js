import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Schedule = () => {

    const practiceSchedule = [
        { date: 'February 16th', time: '2:00 - 4:00', place: 'Big League Camp, Marion'},
        { date: 'February 23rd', time: '2:00 - 4:00', place: 'Big League Camp, Marion'},
        { date: 'February 29th - March 1st', time: '2:00 - 4:00', place: 'Big League Camp, Marion'},
        { date: 'March 8th', time: '2:00 - 4:00', place: 'Big League Camp, Marion'},
        { date: 'March 22nd', time: '2:00 - 4:00', place: 'Big League Camp, Marion'}
    ]

    const inSeasonPracticeSchedule = [
        { date: 'Tuesdays', time: 'TBD', place: 'TBD'},
        { date: 'Thursdays', time: 'TBD', place: 'TBD'},
        { date: 'Sundays', time: '2:00 - 4:00', place: 'Parks and Rec.'},
    ]

    const tournamentSchedule = [
        { date: 'March 28th', place: 'Morganton, NC'},
        { date: 'April 4th and 5th ', place: 'Morganton, NC or Clemmons, NC'},
        { date: 'April 25th and 26th', place: 'Morganton, NC or Clemmons, NC'},
        { date: 'May 9th', place: 'Morganton, NC'},
        { date: 'May 16th and May 17th  ', place: 'Morganton, NC or Clemmons, NC'},
        { date: 'May 30th', place: 'Morganton, NC'},
        { date: 'June 13 & 14', place: 'Boone, NC'},
        { date: 'June 20 & 21', place: 'Boone, NC'},
    ]

    const createRows = () => {
        return practiceSchedule.map((schedule) => {
            const { date, time, place} = schedule
            return (
                <tr key={date}>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{place}</td>
                </tr>
            )
        })
    }

    const createTournament = () => {
        return tournamentSchedule.map((schedule) => {
            const { date, time, place} = schedule
            return (
                <tr key={date}>
                    <td>{date}</td>
                    <td>{place}</td>
                </tr>
            )
        })
    }

    const createInSeasonPractice = () => {
        return inSeasonPracticeSchedule.map((schedule) => {
            const { date, time, place} = schedule
            return (
                <tr key={date}>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{place}</td>
                </tr>
            )
        })
    }

    
    return (
    <Layout>
        <SEO title="Home" />
        <h3>2020 Pre-Season Practice Schedule</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Place</th>
                </tr>
            </thead>
            <tbody>
                {createRows()}
            </tbody>
        </table>
        <h3>2020 Tentative Tournament Schedule*</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Place</th>
                </tr>
            </thead>
            <tbody>
                {createTournament()}
            </tbody>
        </table>
        <h5>*In addition to our tournament schedule, we will also aim to have 6-8 single games with Lenoir Ravens, Equip, etc.</h5>
        <h3>2020 Tentative In-Season Practice Schedule*</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Place</th>
                </tr>
            </thead>
            <tbody>
                {createInSeasonPractice()}
            </tbody>
        </table>
        <h5>*New for 2020 will also be a structured at home program so athletes can practice on their own too.</h5>
    </Layout>
)}

export default Schedule
