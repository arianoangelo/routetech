import React, { useEffect, useRef, useState } from 'react'
import Transition from '../utils/Transition'

function Features() {
    
    const [tab, setTab] = useState(1)
    
    const tabs = useRef(null)
    
    const heightFix = () => {
        if (tabs.current.children[tab]) {
            tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
        }
    }
    
    useEffect(() => {
        heightFix()
    }, [tab])
    
    return (
        <section className="relative">
            
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="font-bold text-4xl mb-4">Explore our solutions</h1>
                        <p className="text-xl text-gray-600"> We're passionate about using cutting-edge technology to
                            solve complex problems and help businesses thrive.</p>
                    </div>
                    
                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        
                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                             data-aos="fade-right">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <h3 className="font-bold text-2xl mb-3">Solutions for you</h3>
                            </div>
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setTab(1)
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Web Development
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setTab(2)
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">App Development for
                                            Android and iOS
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setTab(3)
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Software
                                            Development
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* Tabs items */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                            data-aos="zoom-y-out" ref={tabs}>
                            <div className="relative flex flex-col text-center lg:text-right">
                                {/* Item 1 */}
                                <Transition
                                    show={tab === 1}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div
                                        className="relative rounded text-left mx-10 py-8 px-10 bg-gray-100 border-2 flex lg:h-[400px] flex-col justify-center items-center">
                                        <p>
                                            We understand that a website is often a business's first point of contact
                                            with customers, and we take that responsibility seriously. Our goal is to
                                            create websites that are not only visually appealing, but also drive traffic
                                            and generate leads. We use the latest tools and technologies to create
                                            websites that are optimized for search engines, ensuring that our clients'
                                            businesses rank high in search results.
                                        </p>
                                    </div>
                                </Transition>
                                {/* Item 2 */}
                                <Transition
                                    show={tab === 2}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div
                                        className="relative rounded text-left mx-10 py-8 px-10 bg-gray-100 border-2 flex lg:h-[400px] flex-col justify-center items-center">
                                        <p>
                                            We are passionate about creating exceptional apps for
                                            both iOS and Android platforms. Route Technologies will bring your app ideas
                                            to life, with a focus on
                                            seamless user experiences and innovative designs. We understand the
                                            importance of staying ahead in the fast-paced tech world, which is why we
                                            use the latest technologies and tools to deliver high-quality results. We
                                            take pride in our ability to tailor our services to meet your specific
                                            business needs, ensuring that your app is not only user-friendly, but also
                                            serves a specific purpose that helps your business grow.
                                        </p>
                                    </div>
                                </Transition>
                                {/* Item 3 */}
                                <Transition
                                    show={tab === 3}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div
                                        className="relative rounded text-left mx-10 py-8 px-10 bg-gray-100 border-2 flex lg:h-[400px] flex-col justify-center items-center">
                                        <p>
                                            Route Technologies is a leading provider of software development solutions,
                                            with a focus on developing software that caters to your specific business
                                            needs. Our team of expert developers are highly skilled and experienced in
                                            creating software for a variety of applications, including web and desktop.
                                            We use the latest technologies and tools to deliver high-quality results
                                            that are tailored to your unique requirements. We pride ourselves on our
                                            ability to work closely with our clients to ensure that their software not
                                            only meets their expectations, but also helps their business grow.
                                        </p>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
