import './intro.scss'
import wave from '../../assets/wave.gif'
import arrow from '../../assets/arrow down.gif'

const intro = () => {
  return (
    <div className="intro" id="intro">
      
      <div class="content">
        <div class="content__container">
          <p class="content__container__text">Welcome</p>

          <ul class="content__container__list">
            <li class="content__container__list__item">Developers!</li>
            <li class="content__container__list__item">Recruiters!</li>
            <li class="content__container__list__item">Users!</li>
            <li class="content__container__list__item">Everyone!</li>
          </ul>
        </div>
      </div>
      <img src={wave} alt="" className="wave" />
      <img src={arrow} alt="" className="arrow" />
      
    </div>
  )
}

export default intro
