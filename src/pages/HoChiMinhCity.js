import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Content from '../components/Content'
import { motion } from 'framer-motion'

const HoChiMinhCity = () => {
    const data = useLoaderData()

    return (
        <div className="layout-detail">
            <motion.section
                className='left'
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 1, type: "tween" }}
                exit={{ x: "-100%" }}
            >
                <img src='/images/03.jpg' alt='Ho Chi Minh City' />
            </motion.section>
            <motion.section
                className='right'
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 1, type: "tween" }}
                exit={{ x: "100%" }}
            >
                <Content data={data?.weatherData} />
            </motion.section>
        </div>
    )
}

export default HoChiMinhCity