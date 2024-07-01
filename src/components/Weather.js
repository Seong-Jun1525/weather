import { useFrame, useLoader } from '@react-three/fiber'
import React, { useMemo, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { motion } from 'framer-motion-3d'
import CityName from './CityName'
import { useNavigate } from 'react-router-dom'
import { useBodyClass } from '../utils/hook'

const Weather = (props) => {
  const { position, weather, rotation, cityName } = props
    const glb = useLoader(GLTFLoader, '/models/weather.glb') // 경로는 models부터 작성
    // console.log("glb.nodes", glb.nodes)
    
    // let weatherModel
    // if(glb.nodes[weather]) {
    //   weatherModel = glb.nodes[weather].clone()
    // } else {
    //   weatherModel = glb.nodes.cloud.clone()
    // }

    const ref = useRef(null)
    const [isHover, setIsHover] = useState(false)

    const navigate = useNavigate()

    // useMemo
    const weatherModel = useMemo(() => {
      const cloneModel = glb.nodes[weather] || glb.nodes.cloud
      return cloneModel.clone()
      // Weather의 props가 변경되지 않은 이상
      // WeatherModel은 이전에 선택한모델이고 재사용되거나 개선되지 않음
    }, [weather])

    // useFrame
    useFrame((_, delta) => {
      // console.log("날씨 모델", ref.current)
      ref.current.rotation.y += delta
    })

    const formatCityName = (name) => {
      return name.replace(/\s/g, '').toLowerCase()
    }

    const onClick = () => {
      navigate(`/${formatCityName(cityName)}`)
    }

    useBodyClass(isHover, "pointer")

    return (
      <group
        position={position}
        rotation={rotation}
      >
        <motion.mesh
          whileHover={{ scale: 1.3, transition: 0.5 }}
          ref={ref}
          onPointerEnter={() => setIsHover(true)}
          onPointerOut={() => setIsHover(false)}
          onClick={onClick}
        >
          {/* <primitive object={glb.scene.children[0]} /> */}
          <primitive object={weatherModel} />
        </motion.mesh>
        {isHover && <CityName name={cityName} />}
      </group>
    )
}

export default Weather