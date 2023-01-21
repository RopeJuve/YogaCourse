import './Card.css'


const Card = ({title, imgUrl, number}) => {
  return (
    <div className="card__container">
        <div className="card__text-container">
            <h3>{title}</h3>
            <h1>{number}</h1>
        </div>
        <img src={imgUrl} alt='img' />
    </div>
  )
}

export default Card