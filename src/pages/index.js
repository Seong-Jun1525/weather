import React, { Suspense, lazy } from 'react'
// import Scene from "../components/Scene";
import { Canvas } from '@react-three/fiber'
import Lights from '../components/Lights'
import { motion } from 'framer-motion-3d'
import { Loader, OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AnimatedOutlet from '../components/AnimatedOutlet'

function Sphere() {
    return (
        <mesh>
            <sphereGeometry args={[1]} />
            <meshBasicMaterial color={'white'} />
        </mesh>
    )
}

// Test
const Scene = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import('../components/Scene')), 5000)
    })
})

// 선언식
const variants = {
    initial: {
        rotateX: Math.PI/2, rotateZ: 1
    },
    animate1: {
        rotateZ: [0, Math.PI], transition: {
            duration: 3, repeat: Infinity
        }
    },
    animate2: {
        rotateZ: [Math.PI, 0], transition: {
            duration: 3, repeat: Infinity
        }
    }
}

// framer test component
function FramerModel() {
    return (
        <motion.mesh
            // initial={{ rotateX: Math.PI/2, rotateZ: 1 }}
            // animate={{ rotateZ: [0, Math.PI], scale: [1, 1.5, 1] }}
            // transition={{ duration:3, repeat: Infinity }}
            // initial={{ x: 0, y: 0, z: 0 }}
            // animate={{ x: 0, y: 1, z: 0, 
            //     // opacity: 0, 적용 x
            //     transition: {
            //         duration: 3,
            //         delay: 1,
            //         type: 'spring'
            //     }
            // }}
            variants={variants}
            initial="initial"
            animate="animate2"
        >
            <cylinderGeometry args={[1, 1, 0.5, 8]} />
            <motion.meshBasicMaterial
                color="hotpink"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [1, 0.5, 1], transition: {
                    duration: 0.5, repeat: Infinity
                }}}
            />
            {/* meshNormalMaterial은 기본 벡터를 rgb색상에 매핑하는 Material */}
        </motion.mesh>
    )
}

export function Home() {
    const location = useLocation()
    // const pivot = new Vector3(0, -2, 0)
    return (
        <>
            <Canvas camera={{position: [0, 0, 5], fov: 45}}>
                {/* <color attach="background" args={["rgb(67, 127, 240) 100%"]}></color> */}
                <Suspense fallback={null}>
                    <Lights />
                    <Scene />
                    {/* <FramerModel /> */}
                    {/* 
                        Scene의 비동기 작업이 완료되기 전까지 Suspense의 fallback을 보여준다
                    */}
                </Suspense>
                <OrbitControls
                    // enabled={true} // 기본값 true. 마우스로 카메라를 자유자재로 움직일 수 없음
                    // dampingFactor={0.05} // 0.05 기본값. 카메라를 움직이다가 멈췄을때 바로 멈추지않고 뒤늦게 멈추는 효과
                    // target={pivot} // three js 상의 x축 y축 z축 좌표
                    // enableZoom={false} // 휠을 통해서 zoom 아웃이 안됨
                    // zoomSpeed={4} // 휠을 통한 zoom아웃의 속도
                    // panSpeed={4} // 마우스 우클릭으로 카메라 이동 속도 제어
                    makeDefault // 카메라의 설정이 계속 변경될 예정일 경우에 튕기거나 끊김없게 해주기 위해 설정
                    minDistance={2} // 카메라 확대 최소 범위
                    maxDistance={15} // 카메라 확대 최대 범위
                    enablePan={false} // 마우스 우클릭으로 카메라 이동 제어
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI - Math.PI / 6}
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                />
            </Canvas>
            <Loader />
            <AnimatePresence>
                {/* <Outlet key={location.pathname} /> */}
                <AnimatedOutlet key={location.pathname} />
            </AnimatePresence>
        </>
    )
}