import React, { useEffect, useState } from 'react'
import Earth from './Earth'
import Weather from './Weather'
import { getCityWeather, getCurrentWeather } from '../utils/weather'
import { cities } from '../utils/cities'
import { useFrame } from '@react-three/fiber'
import { Bounds, Stars } from '@react-three/drei'
import FocusWeather from './FocusWeather'
import Clouds from './Clouds'

const Scene = () => {

  const [content, setContent] = useState()

  // console.log(process.env.REACT_APP_API_KEY) // 내 API 콘솔에서 확인

  useFrame((state) => {
    // console.log(state)
  })

  const getCitiesWeather = () => {
    const promise = cities.map((city) => {
      return getCityWeather(city)
    })

    Promise.all(promise)
      .then((weatherDataArray) => {
        setContent(weatherDataArray)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }

  // useEffect(() => {
  //   console.log(getCityWeather('Inchon', API))
  //   // getCurrentWeather(37.50, 126.72, process.env.REACT_APP_API_KEY) // 위도 경도
  // })

  // getCitiesWeather 호출
  useEffect(() => {
    getCitiesWeather()
  }, [])

  // content가 바뀔 때
  useEffect(() => {
    console.log("도시들 데이터", content)
  }, [content])

  return (
    <>
      <Earth />
      <Clouds />
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4} // 별의 크기
        saturation={0} // 채도
        fade
        speed={1}
      />
      <Bounds
        // fit
        clip
        observe
        // onFit={() => console.log('fit')}
        margin={0.7}
      >
        <FocusWeather>
          {content?.map((el, i) => {
            const angle = (i / (content.length - 1)) * Math.PI
            const radius = 2

            const x = radius * Math.cos(angle)
            const y = radius * Math.sin(angle)
            // console.log("x", x.toFixed(2))
            // console.log("y", y.toFixed(2))
            return (
              <Weather
                key={i + "Model Key"}
                position={[x, y-1, 0]}
                rotationY={i + 1}
                cityName={el.city}
                weather={el.weatherData?.weather[0].main.toLowerCase()}
              />
              // key값을 넣는 이유는 리액트가 요소를 고유하게 식별할 수 있기 때문이다
              // 만약 key값을 설정하지 않는다면 브라우저 콘솔창에서 에러가 뜰것이다
            )
          })}
        </FocusWeather>
      </Bounds>
      
      {/* {content && (
        <>
          <Weather position={[0.5, 0, 0]} weather={content[0].weatherData.weather[0].main.toLowerCase()} />
          <Weather position={[0, 0, 0]} weather={content[1].weatherData.weather[0].main.toLowerCase()} />
          <Weather position={[-0.5, 0, 0]} weather={content[2].weatherData.weather[0].main.toLowerCase()} />
          <Weather position={[-1, 0, 0]} weather={content[3].weatherData.weather[0].main.toLowerCase()} />
          <Weather position={[1, 0, 0]} weather={content[4].weatherData.weather[0].main.toLowerCase()} />
        </>
      )} */}
    </>
  )
}

export default Scene