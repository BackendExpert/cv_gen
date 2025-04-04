import React from 'react'
import DefultBtn from '../../components/DefultBtn'

const HeroSection = () => {
    return (
        <div className='xl:min-h-[80vh] md:min-h-[60vh] min-h-screen w-full bg-gradient-to-tr from-blue-300/60 via-gray-100 to-pink-300/60 flex items-center justify-center'>
            <div className="text-center">
                <h1 className="xl:text-4xl text-2xl xl:px-32 md:px-12 px-4 font-semibold bg-gradient-to-r from-pink-600 to-blue-400 inline-block text-transparent bg-clip-text">Create your own ATS Friendly CV</h1>

                <div className="mt-8">
                    <a href="/CreateCV">
                        <DefultBtn
                            btntype={'button'}
                            btnvalue={"Create CV"}
                        />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default HeroSection