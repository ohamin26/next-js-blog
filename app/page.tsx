'use client'
import Image from 'next/image'
import About from '@/app/componets/element/about'
import Skills from '@/app/componets/element/skills'
import Project from '@/app/componets/element/project'

export default function Home() {
    return (
        <div>
            <div id="home"></div>
            <div className="p-96" id="about">
                <About></About>
            </div>
            <div className="p-96">
                <About></About>
            </div>
            <div className="p-96">
                <About></About>
            </div>
            <div className="p-96" id="skills">
                <Skills></Skills>
            </div>
            <div className="p-96" id="project">
                <Project></Project>
            </div>
        </div>
    )
}
