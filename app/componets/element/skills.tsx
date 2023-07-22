import { useScroll } from '../hooks/useScroll'

export default function skills() {
    return (
        <div className="flex justify-center " {...useScroll('right', 1, 0)}>
            <div className="card_skills">
                <div className="">
                    <p>skills</p>
                </div>
                <div>
                    <p>skills</p>
                    <p>skills</p>
                    <p>skills</p>
                    <p>skills</p>
                    <p>skills</p>
                    <p>skills</p>
                    <p>skills</p>
                    <p>skills</p>
                    <p>skills</p>
                    <p>skills</p>
                </div>
            </div>
        </div>
    )
}
