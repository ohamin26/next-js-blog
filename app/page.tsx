'use client'
import Image from 'next/image'
import About from '@/app/componets/element/about'
import Skills from '@/app/componets/element/skills'
import Project from '@/app/componets/element/project'

export default function Home() {
    return (
        <div>
            <div id="home"></div>
            <div className="pt-6" id="about">
                <About></About>
            </div>
            <div className="p-36" id="skills">
                <Skills></Skills>
            </div>
            <div className="p-36" id="project">
                <Project></Project>
            </div>
        </div>
    )
}
