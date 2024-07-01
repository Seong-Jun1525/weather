import React, { useState } from 'react'
import { useOutlet } from 'react-router-dom'

const AnimatedOutlet = () => {
    const o = useOutlet() // 현재 경로에 맞는 컴포넌트를 가져와서 저장
    const [outlet] = useState(o)
    return (
        <>{outlet}</>
    )
}

export default AnimatedOutlet