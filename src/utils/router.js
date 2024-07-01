import { Home } from "../pages"
import HoChiMinhCity from "../pages/HoChiMinhCity"
import LosAngels from "../pages/LosAngels"
import NewYork from "../pages/NewYork"
import Osaka from "../pages/Osaka"
import Seoul from "../pages/Seoul"
import { getCityWeather } from "./weather"

export const routerInfo = [
    {
        path: "/",
        element: <Home />,
        errorElement: <div className="layout-detail">Error</div>,
        children: [
            {
                path: "seoul",
                element: <Seoul />,
                loader: async () => {
                    return getCityWeather('Seoul')
                }
            },
            {
                path: "losangeles",
                element: <LosAngels />,
                loader: async () => {
                    return getCityWeather('Los Angeles')
                }
            },
            {
                path: "newyork",
                element: <NewYork />,
                loader: async () => {
                    return getCityWeather('New York')
                }
            },
            {
                path: "osaka",
                element: <Osaka />,
                loader: async () => {
                    return getCityWeather('Osaka')
                }
            },
            {
                path: "hochiminhcity",
                element: <HoChiMinhCity />,
                loader: async () => {
                    return getCityWeather('Ho Chi Minh City')
                }
            }
        ]
    }
]