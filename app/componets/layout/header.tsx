'use client'
import { scrollPositionState } from '@/app/recoil/atom'
import { Link } from 'react-scroll'
import Links from 'next/link'

export default function Header() {
    const onClick = () => {
        const targetElement = document.getElementById('skills')
        if (targetElement) {
            targetElement.scrollIntoView()
        }
    }
    return (
        <header className="sticky top-0">
            <nav className="flex justify-between space-x-3 items-center h-full m-1 uppercase">
                <h1 className="font-bold">
                    <Links href="/">blog</Links>
                </h1>
                <ul className="flex justify-between space-x-3 ">
                    <li>
                        <Links href="/">home</Links>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true}>
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" spy={true} smooth={true}>
                            SKILLS
                        </Link>
                        {/*<button onClick={onClick}>skills</button>*/}
                    </li>
                    <li>
                        <Link to="project" spy={true} smooth={true}>
                            project
                        </Link>
                    </li>
                    <li>
                        <Links href="https://ohamin26.tistory.com/" target="_blank">
                            blog
                        </Links>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
