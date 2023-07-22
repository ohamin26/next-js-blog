'use client'
import About from '@/app/componets/element/about'
import Skills from '@/app/componets/element/skills'
import Project from '@/app/componets/element/project'
import { useScroll } from './componets/hooks/useScroll'
export default function Home() {
    return (
        <div>
            <div className="pt-5 pb-1" id="about">
                <About></About>
            </div>
            <div className="p-36 " id="skills">
                <Skills></Skills>
            </div>
            <div className="p-36" id="project">
                <Project></Project>
            </div>
        </div>
    )
}
