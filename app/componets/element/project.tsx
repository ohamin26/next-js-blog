import { useScroll } from '../hooks/useScroll'

export default function project() {
    return (
        <div className="flex justify-center " {...useScroll('right', 1, 0)}>
            <div className="card">
                <p>project</p>
            </div>
        </div>
    )
}
