import img from '../../../assets/young-beautiful-lady-sitting-near-window-make-yoga-exercises 1.png'
import './Card.css'

const CardtFull = () => {
  return (
    <div className='cardFull__container'>
      <div className='cardFull__text-container'>
          <div className='text__title-container'>
          <h3>Every-Day Open Master Classes.</h3>
          <h1>3</h1>
          </div>
          <p>We’re boosting online yoga by enabling anyone in the world to learn from the best</p>
          <a href='#'>READ MORE</a>
      </div>
      <div className='cadFull__img-container'>
      <img src={img} alt="img" />
      </div>
    </div>
  )
}

export default CardtFull