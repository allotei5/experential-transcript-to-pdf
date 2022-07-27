import scholarshipIcon from '../../Assets/scholarship.svg'
import leadershipIcon from '../../Assets/leadership.svg'
import citizenshipIcon from '../../Assets/citizenship.svg'

const ExperienceActivity = ({ experience }) => {
    const icons = {
        1: scholarshipIcon,
        2: leadershipIcon,
        3: citizenshipIcon
    }
    // console.log(experience)
  return (
    <div className='grid grid-cols-[1fr_8fr] gap-2 mb-0'>
        <div className='justify-self-start pt-1'>
            <img src={icons[experience.exp_pillar_id]} alt="scholarship icon" className='w-8 text-right' />
        </div>
        <div className='p-0 m-0'>
            <p className='p-0 m-0 text-[11px]'>{experience.exp_experience}</p>
        </div>
    </div>
  )
}

export default ExperienceActivity