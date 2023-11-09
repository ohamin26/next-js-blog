import React, { useState, useEffect, useRef } from 'react'

export const Typing = ({ text }: any) => {
    const [Text, setText] = useState('')
    const [Count, setCount] = useState(0)
    const typingTextRef = useRef(text)

    useEffect(() => {
        let typingSpeed = 300 // 기본값
        let typingText = typingTextRef.current || '' // 기본값

        const handleScroll = () => {
            // Check if the user has scrolled past the typing element
            const typingElement = document.querySelector('.typing-ani')
            if (typingElement) {
                const boundingBox = typingElement.getBoundingClientRect()
                if (boundingBox.top < window.innerHeight && boundingBox.bottom > 0 && Count === typingText.length) {
                    // The typing element is in the viewport and typing is completed
                    // Restart the typing animation
                    setText('')
                    setCount(0)
                }
            }
        }

        const interval = setInterval(() => {
            typingText = typingTextRef.current || ''
            setText((Text) => {
                let updated = Text
                updated = Text + typingText[Count]
                return updated
            })
            setCount(Count + 1)
        }, typingSpeed)

        Count === typingText.length && clearInterval(interval)

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll)

        return () => {
            clearInterval(interval)
            // Remove scroll event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll)
        }
    }, [Count])

    return (
        <>
            <span className="tfont text-7xl inline">{Text}</span>
            <span className="typing-ani tfont text-7xl"></span>
        </>
    )
}
