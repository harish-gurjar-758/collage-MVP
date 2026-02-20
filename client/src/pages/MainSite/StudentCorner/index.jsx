import React from 'react'
import StudentHero from './student/StudentHero'
import DashboardCards from './student/DashboardCards'
import AcademicResources from './student/AcademicResources'
import TimeTable from './student/TimeTable'
import Assignments from './student/Assignments'
import Results from './student/Results'
import Placement from './student/Placement'
import Events from './student/Events'
import DownloadCenter from './student/DownloadCenter'
import Support from './student/Support'
import Notices from './student/Notices'

export default function StudentCorner() {
    return (
        <div>
            <StudentHero />
            <DashboardCards />
            <AcademicResources />
            <TimeTable />
            <Assignments />
            <Results />
            <Notices />
            <Placement />
            <Events />
            <DownloadCenter />
            <Support />
        </div>
    )
}
