import { Html, Sparkles } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { useBodyClass } from '../utils/hook'

const Earth = () => {
    const glb = useLoader(GLTFLoader, '/models/earth.glb') // 경로는 models부터 작성
    // console.log(glb)
    // glb.scene.position.x = 1
    // glb.scene.rotation.y = 1

    const ref = useRef(null) // mesh에 접근하기 위해 ref 선언
    const htmlRef = useRef(null)
    console.log(htmlRef.current)

    const [isHover, setIsHover] = useState(false)

    useFrame((_, delta) => {
      // console.log("useFrame")
      // console.log("state", state)
      // console.log("delta", delta)
      // console.log(state.camera)
      // console.log(ref.current)
      // ref.current.rotation.y += delta * 0.1
    })

    // useEffect(() => {
    //   const bodyClassList = window?.document.body.classList

    //   if(isHover) bodyClassList.add("dreg")
    //   else bodyClassList.remove("dreg")

    //   return () => {
    //     bodyClassList.remove("dreg")
    //   }
    // }, [isHover])

    useBodyClass(isHover, "dreg")

    return (
      <group position={[0, -1.5, 0]}>
        <Sparkles
          position={[0, 0, 0]}
          count={80}
          size={5}
          scale={2.5}
          speed={0.4}
          // opacity={0.1}
          color={"yellow"}
        />
        <mesh
          onPointerEnter={() => setIsHover(true)}
          onPointerOut={() => setIsHover(false)}
          scale={1.3}
          rotation-x={-Math.PI/2}
          ref={ref}
        >
          <primitive object={glb.scene} />
        </mesh>
        {isHover && 
          <Html
            ref={htmlRef}
            center // 가운데 정렬
            // fullscreen // 페이지 전체를 덮는 fullscreen
            // wrapperClass='h1-test' // css에서 사용할 클래스 
            style={{color: 'red'}} // css를 사용하지 않고 바로 style로 줄수도 있음
          >
            <span className='rotation-icon'><img src='/icons/rotation.png' alt='icon' /></span>
          </Html>
        }
      </group>
    )
}

export default Earth