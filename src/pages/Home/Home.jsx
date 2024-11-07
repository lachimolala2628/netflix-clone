import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Herobanner from '../../assets/hero_banner.jpg'
import Herotitle from '../../assets/hero_title.png'
import Playicon from '../../assets/play_icon.png'
import Infoicon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
    return (
        <>
            <div className='home'>
                <Navbar />
                <div className='hero'>
                    <img src={Herobanner} alt="Hero-Banner-Image" className='banner-img' />
                    <div className="hero-caption">
                        <img src={Herotitle} alt="Hero-Title-Image" className='caption-img' />
                        <p>
                            Discovering his ties to a secert ancient order, a young man living modern Istanbul embarks on a quest to save the city from an immortal enemy.
                        </p>
                        <div className="hero-btn">
                            <button className='btn'>
                                <img src={Playicon} alt="Play-Icon_Image" />Play
                            </button>
                            <button className='btn btn-dark'>
                                <img src={Infoicon} alt="Info-Icon_Image" />More Info
                            </button>
                        </div>
                        <TitleCards />
                    </div>
                </div>
                <div className='morecards'>
                    <TitleCards title={'Blockbuster Movies'} category={'top_rated'} />
                    <TitleCards title={'Only on Netflix'} category={'popular'} />
                    <TitleCards title={'Upcoming'} category={'upcoming'} />
                    <TitleCards title={'Top Pics for You'} category={'now_playing'} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home