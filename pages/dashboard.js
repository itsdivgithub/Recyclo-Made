import React, {useEffect, useState} from 'react'
import LoadingBar from 'react-top-loading-bar';
import CovalentDashboard from '../components/CovalentDashboard';
import Header from "../components/Header"


export default function Dashboard() {
    const [progress, setProgress] = useState(0)
  return (
    <>
    <LoadingBar
    height={3}
    color='#f11946'
    progress={progress} 
      />
            <div className="min-h-screen bg-plant bg-cover">
      <Header/>
    <CovalentDashboard setProgress={setProgress} />
      </div>
    </>
  )
}
