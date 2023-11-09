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
        //sticky top-0
        <header className="mt-10 sticky top-10 " id="header">
            {/*<h1 className="flex text-5xl tfont">portfolio</h1>*/}
            <nav className="flex justify-between h-full m-auto uppercase w-5/6">
                <div className="text-white w-1/6 title-ani">
                    <Links href="/" className="text-xl header-border w-3/5 block pt-[1.2rem]">
                        <span>MY</span>
                        <p>PORTFOLIO</p>
                    </Links>
                </div>
                <ol className="flex text-white cursor-pointer header-ani w-10/12">
                    <li>
                        <a onClick={onClick} className="text-lg header-border w-3/5 block pt-[1.2rem]">
                            <span>about</span>
                            <p>about my portfolio</p>
                            <p className="mt-1">01</p>
                        </a>
                    </li>
                    <li>
                        <Link
                            to="skills"
                            spy={true}
                            smooth={true}
                            className="text-lg header-border w-3/5 block pt-[1.2rem]"
                        >
                            SKILLS
                        </Link>
                        <p>my main tech</p>
                        <p className="mt-1">02</p>
                    </li>
                    <li>
                        <Link
                            to="project"
                            spy={true}
                            smooth={true}
                            className="text-lg header-border w-3/5 block pt-[1.2rem]"
                        >
                            project
                        </Link>
                        <p>
                            Introduce to <br /> my project
                        </p>
                        <p className="mt-1">03</p>
                    </li>
                    <li>
                        <Links
                            href="https://ohamin26.tistory.com/"
                            target="_blank"
                            className="text-lg header-border w-3/5 block pt-[1.2rem]"
                        >
                            blog
                        </Links>
                        <p>my tech blog</p>
                        <p className="mt-1">04</p>
                    </li>
                </ol>
            </nav>
        </header>
    )
}
