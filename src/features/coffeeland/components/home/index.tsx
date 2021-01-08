import React from 'react'
import { IHomeProps } from './interfaces'
import { useLazyLoadSection } from 'root/utils'
import Sections from './sections'
import { ElementIds } from 'root/constants'
import service1 from 'root/asserts/images/1lg.png'
import product1 from 'root/asserts/images/3lg.png'
import product2 from 'root/asserts/images/4lg.jpg'
import product3 from 'root/asserts/images/5lg.jpg'
import product4 from 'root/asserts/images/6lg.jpg'

const products = [
  {
    key: 'phin',
    mediaImage: product1,
    content: {
      title: 'Phin',
      description: `
      Place your Long and Short positions which are automatically closed after 30 seconds!
      A fast-paced and fun trading experience!`
    }
  },
  {
    key: 'espresso',
    mediaImage: product2,
    content: {
      title: 'Espresso',
      description: `How high can your rocket reach? Try and earn more DRX now!`
    }
  },
  {
    key: 'brewing',
    mediaImage: product3,
    content: {
      title: 'Brewing',
      description: `How high can your rocket reach? Try and earn more DRX now!`
    }
  },
  {
    key: 'brewing',
    mediaImage: product4,
    content: {
      title: 'Brewing',
      description: `How high can your rocket reach? Try and earn more DRX now!`
    }
  },
]

const services = [
  {
    key: 'silecafe',
    mediaImage: service1,
    content: {
      title: 'Cung cấp cà phê sỉ và lẻ',
      description: `Cung cấp cà phê sỉ và lẻ. Cung cấp cà phê sỉ và lẻ. Cung cấp cà phê sỉ và lẻ. Cung cấp cà phê sỉ và lẻ. Cung cấp cà phê sỉ và lẻ. `
    }
  },
  {
    key: 'giacong',
    mediaImage: <iframe width='400' height='400' src='https://www.youtube.com/embed/641YP-I2v6U' allow='encrypted-media;' ></iframe>,
    isVideo: true,
    content: {
      title: 'Rang xay cà phê gia công',
      description: `Rang xay cà phê gia công. Rang xay cà phê gia công. Rang xay cà phê gia công. Rang xay cà phê gia công. Rang xay cà phê gia công`
    }
  },
]

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
            <div id={ElementIds.services}><About cards={services} text={{ title: 'các dịch vụ', subTitle: 'FRD coffee hân hạnh cung cấp' }} ></About></div>
            <div id={ElementIds.products}><About cards={products} text={{ title: 'các sản phẩm', subTitle: 'FRD coffee hân hạnh cung cấp' }} ></About></div>
        </>
    )
}

export default HomeComponent