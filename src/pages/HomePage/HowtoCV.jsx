import React from 'react'
import DefultBtn from '../../components/DefultBtn'


const HowtoCV = () => {
    return (
        <div className='my-16 xl:px-32 md:px-12 px-4'>
            <h1 className="text-2xl font-semibold uppercase tracking-[0.6rem] bg-gradient-to-r from-pink-600 to-blue-400 inline-block text-transparent bg-clip-text">How To Create CV</h1>

            <p className="mt-4">Just clicking the Create CV Button and fill all the feilds and genarate your ATS Friendly CV</p>

            <div className="mt-8">
                <a href="/CreateCV">
                    <DefultBtn
                        btntype={'button'}
                        btnvalue={"Create CV"}
                    />
                </a>
            </div>
        </div>
    )
}

export default HowtoCV