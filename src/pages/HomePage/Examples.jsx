import React from 'react'
import Cvimg from '../../assets/CVTemp.jpg'

const Examples = () => {
    return (
        <div className='my-16 xl:px-32 md:px-12 px-4 py-16 bg-gradient-to-tr from-blue-600 to-pink-600'>
            <div className="md:flex justify-between">
                <div className="w-full">
                    <h1 className="text-white uppercase font-semibold text-4xl">
                        CV Templates
                    </h1>
                    <p className="md:pr-8 text-white pt-4">
                        Our ATS-friendly CV templates are designed to help job seekers create professional, well-structured resumes that meet modern recruitment standards. Each template is crafted to enhance readability and ensure compatibility with Applicant Tracking Systems (ATS), making it easier for employers to scan and evaluate candidates efficiently. Whether you are a fresh graduate, experienced professional, freelancer, or career changer, our templates provide a strong foundation for your CV.
                    </p>
                </div>
                <div className="md:w-1/2 md:mt-0 mt-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="">
                            <img src={Cvimg} alt="" className='xl:h-64 w-auto' />
                        </div>
                        <div className="">
                            <img src={Cvimg} alt="" className='xl:block hidden md:h-64 w-auto' />
                        </div>
                        <div className="">
                            <img src={Cvimg} alt="" className='xl:block hidden md:h-64 w-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examples