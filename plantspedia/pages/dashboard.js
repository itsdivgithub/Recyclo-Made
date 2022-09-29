import Head from "next/head";
import { useEffect } from "react";
import NavBar from "./../src/layout/Navbar";
import Feed from "./../src/components/Feed";
import FollowCard from "./../src/components/FollowCard"

export default function Dashboard({ }) {
  return (
      <div className="min-h-screen bg-plant bg-cover">
          <Head>
              <title>Dashboard - PlantsPedia</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <NavBar />
          {/* <FollowCard /> */}
          <Feed />
      </div>
  )
}
