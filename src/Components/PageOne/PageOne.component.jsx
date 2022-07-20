import ashesiLogo from '../../Assets/ashesi_logo.png'
import scholarshipIcon from '../../Assets/scholarship.svg'
import leadershipIcon from '../../Assets/leadership.svg'
import citizenshipIcon from '../../Assets/citizenship.svg'
import './PageOne.styles.css'

import React from 'react'

const PageOne = React.forwardRef((props, ref) => {
 
  return (
    <div ref={ref} className="min-h-full bg-image rounded">
      <div className="bg-ashesi">
        <div className='grid grid-cols-[1fr_4fr_3fr] p-5 pb-5 gap-4'>
          <div className='justify-self-center'>
            <img src={ashesiLogo} className="w-13" alt='ashesi logo' />
          </div>
          <div>
            <h1 className='text-3xl font-bold uppercase ashesi-color mb-2'>Ashesi University <br /> Experential Transcript</h1>
            <p className='text-justify text-sm'>The Ashesi Experiential Transcript captures students' endeavours in ways that demonstrate their assimilation of the values of Ashesi University: Scholarship, Leadership and Citizenship. Ashesi University validates all information presented on a student's Ashesi Experiential Transcript. Each record in this transcript is verified and evaluated using the standard of the university's core values.</p>
          </div>
          <div>
            <h1 className='uppercase text-xl text-[#843132]'>
              student information
            </h1>
            <div>
              <table className='table-condensed'>
                <tbody className='text-left'>
                  <tr>
                    <th>NAME</th>
                    <td>Oluwapeyibomi Oyelohunnu</td>
                  </tr>
                  <tr>
                    <th>DEGREE</th>
                    <td>BSc</td>
                  </tr>
                  <tr>
                    <th>MAJOR</th>
                    <td>Management Information Systems</td>
                  </tr>
                  <tr>
                    <th className=''>EXPECTED DATE OF GRADUATION</th>
                    <td>June 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className='bg-gray-300 p-[2px] rounded mx-5'></div>

        {/* Section 2 */}
        <div className='pb-5 pt-1'>
            <h1 className='uppercase text-2xl text-[#843132] text-center font-bold mb-3'>
              summary of ashesi experiences
            </h1>
            <div className='grid grid-cols-3 justify-items-center items-end'>
              <div>
                <img src={scholarshipIcon} alt='scholarship icon' className='w-14 mx-auto' />
                <h2 className='text-center font-semibold uppercase text-lg mt-5'>SCHOLARSHIP</h2>
                <div className='bg-[#843132] p-[2px] rounded my-3'></div>
                <h2 className='text-center font-bold uppercase text-lg'>256 HOURS</h2>
              </div>
              <div>
                <img src={leadershipIcon} alt='leadership icon' className='w-14 mx-auto' />
                <h2 className='text-center font-semibold uppercase text-lg mt-5'>LEADERSHIP</h2>
                <div className='bg-[#843132] p-[2px] rounded my-3'></div>
                <h2 className='text-center font-bold uppercase text-lg'>256 HOURS</h2>
              </div>
              <div>
                <img src={citizenshipIcon} alt='citizenship icon' className='w-14 mx-auto'  />
                <h2 className='text-center font-semibold uppercase text-lg mt-5'>CITIZENSHIP</h2>
                <div className='bg-[#843132] p-[2px] rounded my-3'></div>
                <h2 className='text-center font-bold uppercase text-lg'>256 HOURS</h2>
              </div>
              
            </div>
            <h1 className='uppercase text-2xl text-[#843132] text-center font-bold my-2'>
              experience timeline
            </h1>
            <div className='grid grid-cols-4 mx-8 gap-5'>
              <div>
                <h1 className='uppercase text-lg text-center font-semibold'>
                  2018
                </h1>
                <div className='bg-[#843132] p-[2px] rounded my-3'></div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={scholarshipIcon} alt="scholarship icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={citizenshipIcon} alt="citizenship icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={leadershipIcon} alt="leadership icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className='uppercase text-lg text-center font-semibold'>
                  2019
                </h1>
                <div className='bg-[#843132] p-[2px] rounded my-3'></div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={scholarshipIcon} alt="scholarship icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={citizenshipIcon} alt="citizenship icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={leadershipIcon} alt="leadership icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className='uppercase text-lg text-center font-semibold'>
                  2020
                </h1>
                <div className='bg-[#843132] p-[2px] rounded my-3'></div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={scholarshipIcon} alt="scholarship icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={citizenshipIcon} alt="citizenship icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={leadershipIcon} alt="leadership icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className='uppercase text-lg text-center font-semibold'>
                  2021
                </h1>
                <div className='bg-[#843132] p-[2px] rounded my-3'></div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={scholarshipIcon} alt="scholarship icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={citizenshipIcon} alt="citizenship icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
                <div className='grid grid-cols-[1fr_8fr] gap-2 mb-2'>
                  <div className='justify-self-start pt-1'>
                    <img src={leadershipIcon} alt="leadership icon" className='w-16 text-right' />
                  </div>
                  <div className='p-0 m-0'>
                    <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  )
})

export default PageOne