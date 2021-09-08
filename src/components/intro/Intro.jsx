import './intro.scss'
import wave from '../../assets/wave.gif'

const intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="animated bounceInRight">
        <h1>Hello! Glad you are here.!</h1>
        <h2>My name is Pablo Gomila</h2>
        <h2>Let me introduce myself</h2>
        <img src={wave} alt="" className="wave" />
      </div>
    </div>
  )
}

export default intro
