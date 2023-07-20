'use client'
import { scrollPositionState } from '@/app/recoil/atom'
import { Link } from 'react-scroll'
import Links from 'next/link'

export default function Header() {
    {
        /*const onClick = () => {
        const targetElement = document.getElementById('skills')
        if (targetElement) {
            targetElement.scrollIntoView()
        }
    }
*/
    }

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <header className="sticky top-0 grid grid-rows-2 justify-center" id="header">
            <h1 className="flex justify-center text-5xl font">portfolio</h1>
            <nav className="flex justify-around items-center h-full m-1 uppercase">
                <ul className="flex justify-between space-x-3 cursor-pointer">
                    <li>
                        <Links href="/">home</Links>
                    </li>
                    <li>
                        <a onClick={onClick}>about</a>
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
