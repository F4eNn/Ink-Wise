import {useState, useEffect} from 'react'

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        let throttleTimeout: NodeJS.Timeout | null = null

        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }

        const throttleScroll = () => {

            if(!throttleTimeout)

            throttleTimeout = setTimeout(() => {
                throttleTimeout = null
                handleScroll()
            },750)

        }
        window.addEventListener('scroll', throttleScroll)

        return () => {
            window.removeEventListener('scroll', throttleScroll)
            if(throttleTimeout) clearTimeout(throttleTimeout)
        }

    },[])

    return scrollPosition
}
