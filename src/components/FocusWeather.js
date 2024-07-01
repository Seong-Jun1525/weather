import { useBounds } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const FocusWeather = ({children}) => {
    const bounds = useBounds()
    const ref = useRef()
    const location = useLocation()

    // useEffect(() => {
    //     console.log(bounds.getSize())
    //     bounds.refresh(ref.current).clip().fit() // 도넛에 포커스가 됨
    // })

    const onClick = (e) => {
        console.log(e.object)
        e.stopPropagation()
        bounds.refresh(e.object).clip().fit()
    }

    const onPointerMissed = (e) => {
        if(e.button === 0) { // 0을 측정하는 것은 마우스 왼쪽클릭을 측정하는것
            bounds.refresh().fit()
        }
    }

    useEffect(() => {
        console.log(location)
        if(location.pathname == "/") {
            console.log(location)
            bounds.refresh().fit()
        }
    }, [location])

    return (
        <group onClick={onClick} onPointerMissed={onPointerMissed}>
            {children}
            {/* <mesh ref={ref}>
                <torusGeometry args={[1, 0.5, 16, 100]} />
                <meshBasicMaterial color={"green"} />
            </mesh> */}
        </group>
    )
}

export default FocusWeather