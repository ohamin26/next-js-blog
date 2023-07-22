import { useCallback, useRef, useEffect } from 'react'

export const useScroll = (direction = 'up', duration = 1, delay = 0) => {
    const element = useRef<any>()

    const handleDirection = (name: string) => {
        switch (name) {
            case 'up':
                return 'translate(0, 10%)'
            case 'down':
                return 'translate(0, -10%)'
            case 'left':
                return 'translate(10%, 0)'
            case 'right':
                return 'translate(-10%, 0)'
            default:
                return ''
        }
    }

    const handleScroll = useCallback(() => {
        const { current } = element
        const boundingClientRect = current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // 요소가 화면에 보일 때 애니메이션 실행
        if (boundingClientRect.top >= 0 && boundingClientRect.bottom <= windowHeight) {
            current.style.transitionProperty = 'all'
            current.style.transitionDuration = `${duration}s`
            current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)'
            current.style.transitionDelay = `${delay}s`
            current.style.opacity = 1
            current.style.transform = 'translate3d(0, 0, 0)'
        } else {
            // 요소가 화면에 보이지 않을 때 초기 상태로 되돌림
            current.style.opacity = 0
            current.style.transform = handleDirection(direction)
        }
    }, [delay, direction, duration])

    useEffect(() => {
        const { current } = element

        // 초기에 한 번 애니메이션 실행
        handleScroll()

        const scrollHandler = () => handleScroll()
        window.addEventListener('scroll', scrollHandler)

        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [handleScroll])

    return {
        ref: element,
        style: {
            opacity: 0,
            transform: handleDirection(direction),
        },
    }
}
