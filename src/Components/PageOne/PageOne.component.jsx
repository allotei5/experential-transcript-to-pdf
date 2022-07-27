import ashesiLogo from '../../Assets/ashesi_logo.png'
import scholarshipIcon from '../../Assets/scholarship.svg'
import leadershipIcon from '../../Assets/leadership.svg'
import citizenshipIcon from '../../Assets/citizenship.svg'
import './PageOne.styles.css'

import React from 'react'
import StudentProfile from '../StudentProfile/StudentProfile.component'
import ExperienceSummary from '../ExperienceSummary/ExperienceSummary.component'
import AcademicYear from '../AcademicYear/AcademicYear.component'
import { getStudentProfile } from '../../backendApi/requests'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import ExperieceLogo from '../ExperienceLogo/ExperieceLogo.component'
import Footer from '../Footer/Footer.component'


const PageOne = React.forwardRef((props, ref) => {

  const params = useParams()
  const { isLoading, data, error } = useQuery(['student-profile'], () => getStudentProfile(params.st))

  if(data?.code !== undefined) {
    return <p>Student Does not exist</p>
  }
 
  return (
    <div  ref={ref}> 
      <div className="min-h-full bg-image rounded px-5 py-2 page-break">
        <div className="bg-ashesi pb-10">
          <div className='grid grid-cols-[1fr_4fr_3fr] gap-4'>
            <div className='justify-self-center'>
              <img src={ashesiLogo} className="w-13" alt='ashesi logo' />
            </div>
            <div>
              <h1 className='text-3xl font-bold uppercase ashesi-color mb-2'>Ashesi University <br /> Experential Transcript</h1>
              <p className='text-justify text-[12px] font-semibold'>The Ashesi Experiential Transcript captures students' endeavours in ways that demonstrate their assimilation of the values of Ashesi University: Scholarship, Leadership and Citizenship. Ashesi University validates all information presented on a student's Ashesi Experiential Transcript. Each record in this transcript is verified and evaluated using the standard of the university's core values.</p>
            </div>
            <div>
              <h1 className='uppercase text-xl text-[#843132]'>
                student information
              </h1>
              <StudentProfile />
            </div>
          </div>

          {/* divider */}
          <div className='bg-gray-300 p-[1px] rounded mx-0'></div>

          {/* Section 2 */}
          <div className='pt-0'>
              <h1 className='uppercase text-2xl text-[#843132] text-center font-bold mb-1'>
                summary of ashesi experiences
              </h1>
              <div className='grid grid-cols-3 justify-items-center items-end'>
                <ExperienceSummary expType={{id: 1, name: "Scholarship"}} />
                <ExperienceSummary expType={{id: 2, name: "Leaderhip"}} />
                <ExperienceSummary expType={{id: 3, name: "citizenship"}} />              
              </div>
              <h1 className='uppercase text-2xl text-[#843132] text-center font-bold my-0'>
                experience timeline
              </h1>
              <div className='grid grid-cols-4 mx-0 gap-5'>
                <AcademicYear year={{id: 1, name: "Freshman Year"}} />
                <AcademicYear year={{id: 2, name: "Freshman Year"}} />
                <AcademicYear year={{id: 3, name: "Freshman Year"}} />
                <AcademicYear year={{id: 4, name: "Freshman Year"}} />
                
              </div>
          </div>

          {/* divider */}
          <Footer pageNumber={1} />
        </div>
      </div>

      <div className='bg-image rounded px-5 py-2 mt-2 page-break'>
        <div className="bg-ashesi pb-10">
          <h1 className='text-4xl font-bold uppercase ashesi-color my-2 text-center'>Ashesi University Experential Transcript</h1>
          {/* divider */}
          <div className='bg-gray-300 p-[1px] rounded mx-0'></div>

          <div className='grid grid-cols-3 justify-items-left mt-4'>
            <ExperieceLogo expLogo={{id: 1, name: "Scholarship"}} />
            <ExperieceLogo expLogo={{id: 2, name: "Leadership"}} />
            <ExperieceLogo expLogo={{id: 3, name: "Citizenship"}} />
          </div>
          <Footer pageNumber={2} />
        </div>
      </div>
    </div>
  )
})

export default PageOne