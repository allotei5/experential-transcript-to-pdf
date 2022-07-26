import { useEffect, useState } from 'react'

import scholarshipIcon from '../../Assets/scholarship.svg'
import leadershipIcon from '../../Assets/leadership.svg'
import citizenshipIcon from '../../Assets/citizenship.svg'
import { getExperiencesPerYear, getStudentProfile } from '../../backendApi/requests'
import { useParams } from 'react-router-dom'
import ExperienceActivity from '../ExperienceActivity/ExperienceActivity.component'
import Loading from '../Loading/Loading.component'
import { useQuery } from '@tanstack/react-query'

const AcademicYear = ({ year }) => {
    const params = useParams()
    const [ experiences, setExperiences ] = useState([]);
    const [ academicYear, setAcademicYear ] = useState("");

    useEffect(() => {
        const fetchExperiences = async () => {
            const experiencesFromServer = await getExperiencesPerYear(params.st, year.id);
            setExperiences(experiencesFromServer.data);
            // console.log(experiencesFromServer.data)
        }

        fetchExperiences();
    }, [])

    const { isLoading, error, data } = useQuery(['student-profile'], () => getStudentProfile(params.st))

    

    useEffect(() => {
        if(data?.code === undefined) {
            const yearGroupName = parseInt(data?.data.year_group_name)
            if(year.id === 1) {
                setAcademicYear(yearGroupName - 3)
            }
            if(year.id === 2) {
                setAcademicYear(yearGroupName - 2)
            }
            if(year.id === 3) {
                setAcademicYear(yearGroupName - 1)
            }
            if(year.id === 4) {
                setAcademicYear(yearGroupName)
            }
        }
    }, [data])

    if(data?.code !== undefined) {
        return <p>User Does not exist</p>
    }

  return (
    <div>
        <h1 className='uppercase text-lg text-center font-semibold'>
        {academicYear}
        </h1>
        <div className='bg-[#843132] p-[2px] rounded my-1'></div>
        {
            experiences.length === 0 && <p>No experiences here yet</p>
        }
        {
            experiences.length > 0 && experiences.map((experience, index) => (<ExperienceActivity experience={experience} key={experience.exp_id}/>))

        }
    </div>
  )
}

export default AcademicYear