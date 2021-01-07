import React from 'react'
import { IHomeProps } from './interfaces'
import { useLazyLoadSection } from 'root/utils'
import Sections from './sections'

const HomeComponent: React.FC<IHomeProps> = (props: IHomeProps) => {
    const Banner = useLazyLoadSection(Sections.Banner, { elementId: 'banner', height: '442px' }) 
    const Entertainment = useLazyLoadSection(Sections.Entertainment, { elementId: 'entertainment', height: '533px' })
    const Reporting = useLazyLoadSection(Sections.Reporting, { elementId: 'reporting', height: '304px' })
    const About = useLazyLoadSection(Sections.About, { elementId: 'about', height: '270px' })
    return (
        <>
            <Banner />
            <Entertainment />
            <Reporting />
            <About />
        </>
    )
}

export default HomeComponent