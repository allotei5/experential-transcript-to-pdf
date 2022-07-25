import Lottie from 'lottie-react'
import animationData from '../../Assets/loading.json'

const Loading = ({ height="500px" }) => {
        
    return (
        <Lottie 
          style={{
              height
          }}
          animationData={animationData}
          loop={true}
        />
    );
}

export default Loading