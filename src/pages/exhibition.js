import React, { useMemo } from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import jt from "../images/jt.jpg"
import app from "../images/appstate.jpg"
import bw from "../images/blue world.jpg"
import fh from "../images/football helm.jpg"
import CYP from "../images/Chase Young Pats.jpg"
import half from "../images/puzzle half.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1></h1>
      <div className="flex flex-wrap my-8">
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-2/3">
            <img src={jt} />
          </div>
          <div className="w-1/4 justify-center flex-col flex text-center text-green-700">
            <p>Cade Bettinger, Jayson Tatum Game Winner, Digital Media, NFS</p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-2/3">
            <img src={app} />
          </div>
          <div className="w-1/4 justify-center flex-col flex text-center text-green-700">
            <p>Cade Bettinger, AppState Halloween, Digital Media, NFS</p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center my-8">
          <div className="w-2/3">
            <img src={bw} />
          </div>
          <div className="w-1/4 justify-center flex-col flex text-center text-green-700">
            <p>Cade Bettinger, Blue World, Collage, NFS</p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center my-8">
          <div className="w-2/3">
            <img src={fh} />
          </div>
          <div className="w-1/4 justify-center flex-col flex text-center text-green-700">
            <p>Cade Bettinger, Football sidelines, Pointalism, NFS</p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center my-8">
          <div className="w-2/3">
            <img src={CYP} />
          </div>
          <div className="w-1/4 justify-center flex-col flex text-center text-green-700">
            <p>Cade Bettinger, Chase Young Jersey Swap, Digital Media, NFS</p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center my-8">
          <div className="w-2/3">
            <img src={half} />
          </div>
          <div className="w-1/4 justify-center flex-col flex text-center text-green-700">
            <p>Cade Bettinger, Seed Pod, 1,000 Piece Puzzle, NFS</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
