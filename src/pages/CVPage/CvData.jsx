import React, { useState } from 'react'
import InputDefult from '../../components/InputDefult'
import InputTextArea from '../../components/InputTextArea'
import html2pdf from 'html2pdf.js';
import { GoDotFill } from "react-icons/go";

const CvData = () => {
    const [datacv, setdatacv] = useState({
        cvname: '',
        cvtopjobs: '',
        cvcontactinfo: '',
        socialLinks: [{ viewText: '', link: '' }],
        cvSummary: '',
        workex: [{
            place: '',
            startat: '',
            endat: '',
            position: '',
            about1: '',
            about2: '',
            about3: '',
        }],
        cvskills: [{
            title: '',
            skills: '',
        }],
        cvprojects: [{
            projectname: '',
            projectdesc: '',
        }]
    })

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdatacv((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSocialLinkChange = (index, field, value) => {
        const updatedLinks = [...datacv.socialLinks];
        updatedLinks[index][field] = value;
        setdatacv((prevData) => ({
            ...prevData,
            socialLinks: updatedLinks,
        }));
    };

    const handleWorkEx = (index, field, value) => {
        const updatedLinks = [...datacv.workex];
        updatedLinks[index][field] = value;
        setdatacv((prevData) => ({
            ...prevData,
            workex: updatedLinks,
        }));
    };


    const headleSkills = (index, field, value) => {
        const updatedSkills = [...datacv.cvskills];
        updatedSkills[index][field] = value;
        setdatacv((prevData) => ({
            ...prevData,
            cvskills: updatedSkills,
        }));
    };

    const headleProjects = (index, field, value) => {
        const updatedprojects = [...datacv.cvprojects];
        updatedprojects[index][field] = value;
        setdatacv((prevData) => ({
            ...prevData,
            cvprojects: updatedprojects,
        }));
    };

    const addSocialLink = () => {
        if (datacv.socialLinks.length < 6) {
            setdatacv((prevData) => ({
                ...prevData,
                socialLinks: [...prevData.socialLinks, { viewText: '', link: '' }]
            }));
        }
    };

    const addworkex = () => {
        if (datacv.workex.length < 6) {
            setdatacv((prevData) => ({
                ...prevData,
                workex: [...prevData.workex, { place: '', startat: '', endat: '', position: '', about1: '', about2: '', about3: '' }]
            }));
        }
    };

    const addskills = () => {
        setdatacv((prevData) => ({
            ...prevData,
            cvskills: [...prevData.cvskills, { title: '', skills: '' }]
        }));
    };

    const addproject = () => {
        if (datacv.workex.length < 6) {
            setdatacv((prevData) => ({
                ...prevData,
                cvprojects: [...prevData.cvprojects, { projectname: '', projectdesc: '' }]
            }));
        }
    };


    const removeSocialLink = (index) => {
        const updatedLinks = datacv.socialLinks.filter((_, i) => i !== index);
        setdatacv((prevData) => ({
            ...prevData,
            socialLinks: updatedLinks,
        }));
    };

    const removeworkex = (index) => {
        const updateworkex = datacv.workex.filter((_, i) => i !== index);
        setdatacv((prevData) => ({
            ...prevData,
            workex: updateworkex,
        }));
    };

    const removeskills = (index) => {
        const updateskill = datacv.cvskills.filter((_, i) => i !== index);
        setdatacv((prevData) => ({
            ...prevData,
            cvskills: updateskill,
        }));
    };

    const removeproject = (index) => {
        const updateproject = datacv.cvprojects.filter((_, i) => i !== index);
        setdatacv((prevData) => ({
            ...prevData,
            cvprojects: updateproject,
        }));
    };

    const generatePDF = () => {
        const element = document.getElementById('cv-preview'); // Select the CV preview div
        html2pdf()
            .from(element) // Convert the content of the div to a PDF
            .save('generated_cv.pdf'); // Save the generated PDF with the name
    };


    return (
        <div className='mt-12'>
            <div className="">
                <form action="">
                    <div className="flex">
                        <div className="md:w-full md:mr-4">
                            <div className="my-2">
                                <p className="text-blue-500 mb-2">CV Name</p>
                                <InputDefult
                                    type={'text'}
                                    placeholder={"Enter CV Name"}
                                    name={'cvname'}
                                    value={datacv.cvname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-2">
                                <p className="text-blue-500 mb-2">Cv Contact Information</p>
                                <InputTextArea
                                    type={'text'}
                                    placeholder={"Enter Contact Info"}
                                    name={'cvcontactinfo'}
                                    value={datacv.cvcontactinfo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="bg-gray-200/50 border border-gray-200 p-2">
                                <p className="text-blue-500 mb-2">Social Links (max 6)</p>
                                {datacv.socialLinks.map((link, index) => (
                                    <div className="flex my-2" key={index}>
                                        <div className="w-full mr-2">
                                            <InputDefult
                                                placeholder="Enter View Text"
                                                value={link.viewText}
                                                onChange={(e) =>
                                                    handleSocialLinkChange(index, 'viewText', e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="w-full ml-2">
                                            <InputDefult
                                                placeholder="Enter Link"
                                                value={link.link}
                                                onChange={(e) =>
                                                    handleSocialLinkChange(index, 'link', e.target.value)
                                                }
                                            />
                                        </div>
                                        {/* Remove Button */}
                                        <button
                                            type="button"
                                            className="ml-2 text-red-500"
                                            onClick={() => removeSocialLink(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                {/* Add Social Link Button */}
                                <button
                                    type="button"
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                                    onClick={addSocialLink}
                                    disabled={datacv.socialLinks.length >= 6}
                                >
                                    Add Social Link
                                </button>
                            </div>


                            <div className="bg-gray-200/50 border border-gray-200 p-2 my-4">
                                <p className="text-blue-500 mb-2">Skills</p>
                                {datacv.cvskills.map((skls, index) => (
                                    <div className="my-2" key={index}>
                                        <div className="w-full my-2">
                                            <InputDefult
                                                placeholder="Enter Title of Skills"
                                                value={skls.title}
                                                onChange={(e) =>
                                                    headleSkills(index, 'title', e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="w-full">
                                            <InputDefult
                                                placeholder="Enter Skills"
                                                value={skls.skills}
                                                onChange={(e) =>
                                                    headleSkills(index, 'skills', e.target.value)
                                                }
                                            />
                                        </div>
                                        {/* Remove Button */}
                                        <button
                                            type="button"
                                            className="ml-2 text-red-500"
                                            onClick={() => removeskills(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                {/* Add Social Link Button */}
                                <button
                                    type="button"
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                                    onClick={addskills}
                                >
                                    Add Skill Set
                                </button>
                            </div>



                            <div className="bg-gray-200/50 border border-gray-200 p-2 my-4">
                                <p className="text-blue-500 mb-2">Projects</p>
                                {datacv.cvprojects.map((projects, index) => (
                                    <div className="my-2" key={index}>
                                        <div className="w-full my-2">
                                            <InputDefult
                                                placeholder="Enter Project Name"
                                                value={projects.projectname}
                                                onChange={(e) =>
                                                    headleProjects(index, 'projectname', e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="w-full">
                                            <InputDefult
                                                placeholder="Enter Project Title"
                                                value={projects.projectdesc}
                                                onChange={(e) =>
                                                    headleProjects(index, 'projectdesc', e.target.value)
                                                }
                                            />
                                        </div>
                                        {/* Remove Button */}
                                        <button
                                            type="button"
                                            className="ml-2 text-red-500"
                                            onClick={() => removeproject(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                {/* Add Social Link Button */}
                                <button
                                    type="button"
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                                    onClick={addproject}
                                    disabled={datacv.cvprojects.length >= 6}
                                >
                                    Add Project
                                </button>
                            </div>

                        </div>
                        <div className="md:w-full md:ml-4">
                            <div className="my-2">
                                <p className="text-blue-500 mb-2">Top Position</p>
                                <InputTextArea
                                    type={'text'}
                                    placeholder={"Enter Top Position"}
                                    name={'cvtopjobs'}
                                    value={datacv.cvtopjobs}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="my-2">
                                <p className="text-blue-500 mb-2">CV Summary</p>
                                <InputTextArea
                                    type={'text'}
                                    placeholder={"Enter Summary"}
                                    name={'cvSummary'}
                                    value={datacv.cvSummary}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="bg-gray-200/50 border border-gray-200 p-2">
                                <p className="text-blue-500 mb-2">Work Experience (recommended to add max 4 but can add unlimited)</p>
                                {datacv.workex.map((work, index) => (
                                    <div className="my-4" key={index}>
                                        <div className="w-full mr-2">
                                            <InputDefult
                                                placeholder="Enter work Place"
                                                value={work.place}
                                                onChange={(e) =>
                                                    handleWorkEx(index, 'place', e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex my-2">
                                            <div className="mr-1 w-full">
                                                <p className="text-blue-500 mb-2">Start Date</p>
                                                <InputDefult
                                                    type={'date'}
                                                    value={work.startat}
                                                    onChange={(e) =>
                                                        handleWorkEx(index, 'startat', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="mr-1 w-full ">
                                                <p className="text-blue-500 mb-2">End Date</p>
                                                <InputDefult
                                                    type={'date'}
                                                    value={work.endat}
                                                    onChange={(e) =>
                                                        handleWorkEx(index, 'endat', e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full mr-2">
                                            <InputDefult
                                                placeholder="Enter Job Position"
                                                value={work.position}
                                                onChange={(e) =>
                                                    handleWorkEx(index, 'position', e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="">
                                            <p className="text-blue-500 mb-2 mt-3">Job Information</p>
                                            <div className="py-2">
                                                <InputDefult
                                                    placeholder="Enter Job Information Line 1"
                                                    value={work.about1}
                                                    onChange={(e) =>
                                                        handleWorkEx(index, 'about1', e.target.value)
                                                    }
                                                />
                                            </div>

                                            <div className="py-2">
                                                <InputDefult
                                                    placeholder="Enter Job Information Line 2"
                                                    value={work.about2}
                                                    onChange={(e) =>
                                                        handleWorkEx(index, 'about2', e.target.value)
                                                    }
                                                />
                                            </div>

                                            <div className="py-2">
                                                <InputDefult
                                                    placeholder="Enter Job Information Line 3"
                                                    value={work.about3}
                                                    onChange={(e) =>
                                                        handleWorkEx(index, 'about3', e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        {/* Remove Button */}
                                        <button
                                            type="button"
                                            className="ml-2 text-red-500"
                                            onClick={() => removeworkex(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                {/* Add Social Link Button */}
                                <button
                                    type="button"
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                                    onClick={addworkex}
                                >
                                    Add Work Experience
                                </button>
                            </div>
                        </div>

                    </div>

                </form>

                <div className="">
                    <div id="cv-preview" className="md:w-full ml-8 mr-6">
                        {
                            datacv.cvname ?
                                <div className="">
                                    <div className="my-4 p-4 rounded-md">
                                        <h1 className="text-xl text-blue-700 font-semibold">{datacv.cvname}</h1>
                                        <p className="font-semibold text-sm mt-1">{datacv.cvtopjobs}</p>
                                        <p className="text-gray-500 text-sm">{datacv.cvcontactinfo}</p>
                                        <div className="flex text-sm">
                                            {datacv.socialLinks.length > 0 ? (
                                                datacv.socialLinks.map((link, index) => (
                                                    <p key={index} className='mr-2 font-semibold'>
                                                        <a
                                                            href={link.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-700"
                                                        >
                                                            {link.viewText}
                                                        </a>
                                                        {index !== datacv.socialLinks.length - 1 && ' |'}
                                                    </p>
                                                ))
                                            ) : (
                                                <p>No social links added</p>
                                            )}
                                        </div>
                                        <h1 className="text-xl font-semibold -mt-1">Summary</h1>
                                        <p className="text-gray-500 mt-1 mr-12" style={{ fontSize: '12px' }}>
                                            {datacv.cvSummary}
                                        </p>
                                        <h1 className="text-xl font-semibold -mt-1">Professional Experience</h1>

                                        <div className="text-sm">
                                            {datacv.workex.length > 0 ? (
                                                datacv.workex.map((work, index) => (
                                                    <div className="mr-12" style={{ fontSize: '12px' }}>
                                                        <div className="">
                                                            <h1 className="flex text-sm font-semibold text-blue-700">
                                                                {work.position} - {work.place}
                                                            </h1>
                                                            <p className="text-gray-500 pl-2 text-sm font-semibold">
                                                                ({formatDate(work.startat)} - {work.endat ? formatDate(work.endat) : <span>Present</span>})
                                                            </p>
                                                        </div>

                                                        <div className="">
                                                            <div className="flex text-gray-500">
                                                                <p className="text-xl -mt-2">&#x2022;</p>
                                                                <p className="pl-2">{work.about1}</p>
                                                            </div>
                                                            <div className="flex text-gray-500">
                                                                <p className="text-xl -mt-2">&#x2022;</p>
                                                                <p className="pl-2">{work.about2}</p>
                                                            </div>
                                                            <div className="flex text-gray-500">
                                                                <p className="text-xl -mt-2">&#x2022;</p>
                                                                <p className="pl-2">{work.about3}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                ))
                                            ) : (
                                                <p>No social links added</p>
                                            )}
                                        </div>
                                        <h1 className="text-xl font-semibold -mt-1">Skills</h1>

                                        <div className="text-sm">
                                            {datacv.cvskills.length > 0 ? (
                                                datacv.cvskills.map((skills, index) => (
                                                    <div className="mr-12" style={{ fontSize: '12px' }}>
                                                        <div className="flex">
                                                            <div className="font-semibold text-blue-700">{skills.title}</div>
                                                            <div className="ml-2 text-gray-500">{skills.skills}</div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>No social links added</p>
                                            )}
                                        </div>

                                        <h1 className="text-xl font-semibold -mt-1">Notable Projects</h1>

                                        <div className="text-sm">
                                            {datacv.cvprojects.length > 0 ? (
                                                datacv.cvprojects.map((cvproject, index) => (
                                                    <div className="mr-12" style={{ fontSize: '12px' }}>
                                                        <div className="flex">
                                                            <div className="font-semibold text-blue-700">{cvproject.projectname}</div>
                                                            <div className="ml-2 text-gray-500">{cvproject.projectdesc}</div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>No social links added</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className=""></div>
                        }
                    </div>
                </div>


                <div className="mt-4">
                    <button
                        onClick={generatePDF}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Generate CV as PDF
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CvData