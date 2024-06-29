import React from 'react'
import { FaCompass, FaGlobe } from 'react-icons/fa'
import PageInfo from './PageInfo'
import { FaGauge } from 'react-icons/fa6'

const LandingPage = () => {
    const props = [
		{
			isReversed: false,
			icon: <FaGlobe color='#939185' className='scale-[1.6]' />,
			heading: "About us",
			description: "Campus Connect is an innovative platform designed for educational institutions, enhancing communication and collaboration among administrators, faculty, and students. It streamlines operations and fosters engagement, driving educational excellence and a vibrant campus culture.",
			imgSrc: "https://img.freepik.com/premium-photo/college-students-talking-campus_1029469-68153.jpg"
		},
		{
			isReversed: true,
			icon: <FaGauge color='#e6b9a6' className='scale-[1.6]' />,
			heading: "Our Mission : To enhance educational communication, collaboration",
			description: "The mission of Campus Connect is to transform educational institutions by significantly improving communication, streamlining operations, and fostering meaningful collaboration among administrators, faculty, and students. By offering a centralized platform, Campus Connect seeks to enhance transparency and engagement, empowering all stakeholders to participate actively in campus life. This approach not only drives academic success but also cultivates a dynamic and inclusive educational environment, ultimately contributing to a vibrant and cohesive campus community.",
			imgSrc: "./mission.jpg"
		},
		{
			isReversed: false,
			icon: <FaCompass color='#2f3645' className='scale-[1.6]' />,
			heading: "Our story",
			description: "Campus Connect began with a vision to address the communication challenges faced by educational institutions. Recognizing the need for a streamlined approach, our team set out to create a platform that simplifies information flow and enhances collaboration among administrators, faculty, and students. Through continuous innovation and feedback, Campus Connect has evolved into a comprehensive solution that empowers campuses to operate more efficiently. Today, it stands as a vital tool for fostering engagement and building a dynamic academic community, ensuring every member can connect and contribute effectively.",
			imgSrc: "./ourstory.jpg"
		},
	];

    return (
        <>
            <PageInfo pageProps={props[0]} />
			<hr className='border-2 border-gray-200' />
			<PageInfo pageProps={props[1]} />
			<hr className='border-2 border-gray-200' />
			<PageInfo pageProps={props[2]} />
        </>
    )
}

export default LandingPage