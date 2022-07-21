import ashesiLogo from '../../Assets/ashesi_logo.png'
import scholarshipIcon from '../../Assets/scholarship.svg'
import leadershipIcon from '../../Assets/leadership.svg'
import citizenshipIcon from '../../Assets/citizenship.svg'
import './PageOne.styles.css'

import React from 'react'

const PageOne = React.forwardRef((props, ref) => {
 
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
              <div>
                <table className=''>
                  <tbody className='text-left'>
                    <tr>
                      <th className='text-[15px]'>NAME</th>
                      <td>Marylyn-Lisa Hemans-Cobbinah</td>
                    </tr>
                    <tr>
                      <th className='text-[15px]'>DEGREE</th>
                      <td>BSc</td>
                    </tr>
                    <tr>
                      <th className='text-[15px]'>MAJOR</th>
                      <td>Management Information Systems</td>
                    </tr>
                    <tr>
                      <th className='text-[15px]'>EXPECTED DATE OF <br />GRADUATION</th>
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
          <div className='pt-1'>
              <h1 className='uppercase text-2xl text-[#843132] text-center font-bold mb-3'>
                summary of ashesi experiences
              </h1>
              <div className='grid grid-cols-3 justify-items-center items-end'>
                <div>
                  <img src={scholarshipIcon} alt='scholarship icon' className='w-14 mx-auto' />
                  <h2 className='text-center font-semibold uppercase text-lg mt-2'>SCHOLARSHIP</h2>
                  <div className='bg-[#843132] p-[2px] rounded my-0'></div>
                  <h2 className='text-center font-bold uppercase text-lg'>256 HOURS</h2>
                </div>
                <div>
                  <img src={leadershipIcon} alt='leadership icon' className='w-14 mx-auto' />
                  <h2 className='text-center font-semibold uppercase text-lg mt-2'>LEADERSHIP</h2>
                  <div className='bg-[#843132] p-[2px] rounded my-0'></div>
                  <h2 className='text-center font-bold uppercase text-lg'>256 HOURS</h2>
                </div>
                <div>
                  <img src={citizenshipIcon} alt='citizenship icon' className='w-14 mx-auto'  />
                  <h2 className='text-center font-semibold uppercase text-lg mt-2'>CITIZENSHIP</h2>
                  <div className='bg-[#843132] p-[2px] rounded my-0'></div>
                  <h2 className='text-center font-bold uppercase text-lg'>256 HOURS</h2>
                </div>              
              </div>
              <h1 className='uppercase text-2xl text-[#843132] text-center font-bold my-0'>
                experience timeline
              </h1>
              <div className='grid grid-cols-4 mx-8 gap-5'>
                <div>
                  <h1 className='uppercase text-lg text-center font-semibold'>
                    2018
                  </h1>
                  <div className='bg-[#843132] p-[2px] rounded my-1'></div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
                    <div className='justify-self-start pt-1'>
                      <img src={scholarshipIcon} alt="scholarship icon" className='w-16 text-right' />
                    </div>
                    <div className='p-0 m-0'>
                      <p className='p-0 m-0 text-[12px]'>lorem ipsum dolor sit i love the fan asdf bafi sfuhashi naush sjafnsd afisdhfa  afudsn fnajsdfn adnf </p>
                    </div>
                  </div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
                    <div className='justify-self-start pt-1'>
                      <img src={scholarshipIcon} alt="scholarship icon" className='w-16 text-right' />
                    </div>
                    <div className='p-0 m-0'>
                      <p className='p-0 m-0 text-[12px]'>lorem ipsum dolor sit i love the fan asdf bafi sfuhashi naush sjafnsd afisdhfa  afudsn fnajsdfn adnf</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
                    <div className='justify-self-start pt-1'>
                      <img src={scholarshipIcon} alt="scholarship icon" className='w-16 text-right' />
                    </div>
                    <div className='p-0 m-0'>
                      <p className='p-0 m-0 text-[12px]'>lorem ipsum dolor sit i love the fan asdf bafi sfuhashi naush sjafnsd afisdhfa  afudsn fnajsdfn adnf</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
                    <div className='justify-self-start pt-1'>
                      <img src={citizenshipIcon} alt="citizenship icon" className='w-16 text-right' />
                    </div>
                    <div className='p-0 m-0'>
                      <p className='p-0 m-0 text-[12px]'>lorem ipsum dolor sit i love the fan asdf bafi sfuhashi naush sjafnsd afisdhfa  afudsn fnajsdfn adnf</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
                    <div className='justify-self-start pt-1'>
                      <img src={leadershipIcon} alt="leadership icon" className='w-16 text-right' />
                    </div>
                    <div className='p-0 m-0'>
                      <p className='p-0 m-0 text-[12px]'>lorem ipsum dolor sit i love the fan asdf bafi sfuhashi naush sjafnsd afisdhfa  afudsn fnajsdfn adnf</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className='uppercase text-lg text-center font-semibold'>
                    2019
                  </h1>
                  <div className='bg-[#843132] p-[2px] rounded my-1'></div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
                    <div className='justify-self-start pt-1'>
                      <img src={scholarshipIcon} alt="scholarship icon" className='w-16 text-right' />
                    </div>
                    <div className='p-0 m-0'>
                      <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
                    <div className='justify-self-start pt-1'>
                      <img src={citizenshipIcon} alt="citizenship icon" className='w-16 text-right' />
                    </div>
                    <div className='p-0 m-0'>
                      <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
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
                  <div className='bg-[#843132] p-[2px] rounded my-1'></div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
                    <div className='justify-self-start pt-1'>
                      <img src={scholarshipIcon} alt="scholarship icon" className='w-16 text-right' />
                    </div>
                    <div className='p-0 m-0'>
                      <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
                    <div className='justify-self-start pt-1'>
                      <img src={citizenshipIcon} alt="citizenship icon" className='w-16 text-right' />
                    </div>
                    <div className='p-0 m-0'>
                      <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
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
                  <div className='bg-[#843132] p-[2px] rounded my-1'></div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
                    <div className='justify-self-start pt-1'>
                      <img src={scholarshipIcon} alt="scholarship icon" className='w-16 text-right' />
                    </div>
                    <div className='p-0 m-0'>
                      <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
                    <div className='justify-self-start pt-1'>
                      <img src={citizenshipIcon} alt="citizenship icon" className='w-16 text-right' />
                    </div>
                    <div className='p-0 m-0'>
                      <p className='p-0 m-0'>Speaker at photography & film club in Ashesi</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-[1fr_8fr] gap-2 mb-1'>
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

          {/* divider */}
          <div className='bottom'>
            <div className='bg-gray-300 p-[2px] rounded mx-5'></div>

            <div className='flex justify-between mx-5'>
              <div className='text-[12px]'>Issue Date: 210/07/2022</div>
              <div className='text-[12px]'>1 University Avenue, Berekuso E/R, Ghana</div>
              <div className='text-[12px]'>Page 1 of 2</div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-image rounded px-5 py-2 mt-2 page-break'>
        <div className="bg-ashesi pb-10">
          <h1 className='text-4xl font-bold uppercase ashesi-color my-2 text-center'>Ashesi University Experential Transcript</h1>
          {/* divider */}
          <div className='bg-gray-300 p-[2px] rounded mx-5'></div>

          <div className='grid grid-cols-3 justify-items-left mt-4'>
            <div>
              <h3 className='uppercase text-center font-semibold text-xl text-[#843132] mb-8'>scholarship</h3>
              <div className='mb-3'>
                <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Head of Public Relations Committee</h4>
                <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Ashesi University</h4>
              </div>
              <div className='mb-3'>
                <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Head of Public Relations Committee</h4>
                <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Ashesi University</h4>
              </div>
              <div className='mb-3'>
                <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Head of Public Relations Committee</h4>
                <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Ashesi University</h4>
              </div>
              <div className='mb-3'>
                <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Head of Public Relations Committee</h4>
                <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Ashesi University</h4>
              </div>
            </div>
            <div className='border-x-4'>
              <div>
                <h3 className='uppercase text-center font-semibold text-xl text-[#843132] mb-8'>leadership</h3>
                <div className='mb-3'>
                  <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                  <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Head of Public Relations Committee</h4>
                  <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Ashesi University</h4>
                </div>
                <div className='mb-3'>
                  <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                  <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Head of Public Relations Committee</h4>
                  <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Ashesi University</h4>
                </div>
                <div className='mb-3'>
                  <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                  <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Head of Public Relations Committee</h4>
                  <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Ashesi University</h4>
                </div>
                <div className='mb-3'>
                  <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                  <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Head of Public Relations Committee</h4>
                  <h4 className='uppercase text-center font-semibold text-sm text-[#843132] '>Ashesi University</h4>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className='uppercase text-center font-semibold text-xl text-[#843132] mb-8'>citizenship</h3>
                <div className='mb-3 mx-10'>
                  <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                  <h4 className='uppercase text-center font-semibold text-[#843132] text-[12px]'>lafia afkdsnf a kmasfdm adfnap dfandsofn aandfpan adfjapo dndoafn adfn</h4>
                </div>
                <div className='mb-3 mx-10'>
                  <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                  <h4 className='uppercase text-center font-semibold text-[#843132] text-[12px]'>lafia afkdsnf a kmasfdm adfnap dfandsofn aandfpan adfjapo dndoafn adfn</h4>
                </div>
                <div className='mb-3 mx-10'>
                  <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                  <h4 className='uppercase text-center font-semibold text-[#843132] text-[12px]'>lafia afkdsnf a kmasfdm adfnap dfandsofn aandfpan adfjapo dndoafn adfn</h4>
                </div>
                <div className='mb-3 mx-10'>
                  <img src={ashesiLogo} alt="student logo" className="w-24 mx-auto" />
                  <h4 className='uppercase text-center font-semibold text-[#843132] text-[12px]'>lafia afkdsnf a kmasfdm adfnap dfandsofn aandfpan adfjapo dndoafn adfn</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <div className='bg-gray-300 p-[2px] rounded mx-5'></div>

            <div className='flex justify-between mx-5'>
              <div className='text-[12px]'>Issue Date: 210/07/2022</div>
              <div className='text-[12px]'>1 University Avenue, Berekuso E/R, Ghana</div>
              <div className='text-[12px]'>Page 2 of 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default PageOne