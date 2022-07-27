import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ashesiLogo from '../../Assets/ashesi_logo.png'
import { getExperiencesPerCat } from '../../backendApi/requests';


const ExperieceLogo = ({ expLogo }) => {
    const params = useParams();

    const [ expLogos, setExpLogos ] = useState([]);

    useEffect(() => {
        const fetchLogos = async () => {
            const logosFromServer = await getExperiencesPerCat(params.st, expLogo.id);
            let preparedLogos = [];
            if(logosFromServer.data.length > 0) {
                logosFromServer.data.forEach((logo) => {
                    if (logo.exp_logo !== null) {
                        preparedLogos.push(logo)
                    }
                })
            }
            setExpLogos(preparedLogos);
            
        }
        fetchLogos();
    }, [])


  return (
    <div>
        <div>
            <h3 className='uppercase text-center font-semibold text-xl text-[#843132] mb-8'>{expLogo.name}</h3>
            {
                (expLogos.length === 0) && <p></p>   
            }
            {
                expLogos.length > 0 && expLogos.map((lgs, index) => (
                    <div className='mb-3 mx-10' key={index}>
                        <img src={lgs.exp_logo} alt="student logo" className="w-24 mx-auto" />
                        <h4 className='uppercase text-center font-semibold text-[#843132] text-[11px]'>{lgs.exp_address}</h4>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default ExperieceLogo