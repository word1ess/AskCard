import './InfoItem.scss'
const InfoItem = (props) =>{
    if(props.order){
        return(
        <div className="info__item">
            <div className="info__image info__image__ordered">
                <img src={props.image} alt="info-item-1"/>
            </div>
            <div className="info__text">
                <h3 className="info__title">{props.title}</h3>
                <p>{props.text}</p>
                <a href="#" className="info__btn btn-bg">Узнать больше</a>
            </div>
        </div>
        )
    }
    return(
        <div className="info__item">
            <div className="info__image">
                <img src={props.image} alt="info-item-1"/>
            </div>
            <div className="info__text">
                <h3 className="info__title">{props.title}</h3>
                <p>{props.text}</p>
                <a href="#" className="info__btn btn-bg">Узнать больше</a>
            </div>
        </div>
        )
}

export default InfoItem