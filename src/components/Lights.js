import { Environment } from '@react-three/drei'
import React, { useRef } from 'react'

const Lights = () => {
  const drectRef = useRef()
  return (
    <>
        <Environment
            preset="forest"
        />
        <directionalLight ref={drectRef} position={[1, 3, -1]} intensity={3} />
        <ambientLight intensity={1} color="white" />
        {/* intensity : 강도 */}
    </>
  )
}

export default Lights