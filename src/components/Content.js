import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
/**
 * 도시 이름 data.name
 * 도시 날씨 data.weather[0].main
 * 기본 온도 data.main.temp
 * 최고 기온 data.main.temp_max
 * 최저 기온 data.main.temp_min
 * 
 * 풍향 data.wind.deg
 * 속도 data.wind.speed
 */
const Content = (props) => {
    const { data } = props
    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className='container'>
            <Link to={"/"}><div className='x-btn'></div></Link>
            <h1>{data?.name}</h1>
            <h2>{data?.weather[0].main}</h2>
            <div className='texts-group'>
                <div className='texts'>
                    <p>기온 <span className='temp' /> : {data?.main.temp}</p>
                    <p>최고 <span className='temp' /> : {data?.main.temp_max}</p>
                    <p>최저 <span className='temp' /> : {data?.main.temp_min}</p>
                </div>
                <div className='texts'>
                    <p>풍향 <span className='wind' /> : {data?.wind.deg} 도</p>
                    <p>속도 <span className='wind' /> : {data?.wind.speed} m/s</p>
                </div>

            </div>
        </div>
    )
}

export default Content