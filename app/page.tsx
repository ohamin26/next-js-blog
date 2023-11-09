'use client'
import About from '@/app/componets/element/about'
import Skills from '@/app/componets/element/skills'
import Project from '@/app/componets/element/project'
import Header from './componets/layout/header'
export default function Home() {
    return (
        <div className="items-center">
            <div className="p-0 m-0" id="about">
                <About></About>
            </div>
            <div className="p-36 xs:px-16" id="skills">
                <Skills></Skills>
            </div>
            <div className="p-36" id="project">
                <Project></Project>
            </div>
        </div>
    )
}
