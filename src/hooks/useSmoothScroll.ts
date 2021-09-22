import { SmoothScrollContext } from '../contexts/SmoothScroll/context'
import { useContext } from 'react'

function useSmoothScroll() {
    const context = useContext(SmoothScrollContext)
    return { ...context }
}
export { useSmoothScroll }
