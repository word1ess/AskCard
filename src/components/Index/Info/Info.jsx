import classes from './Info.module.scss'
import InfoItem from './InfoItem/InfoItem'
const Info = (props) =>{
    let infoContent = props.inner.items.map(item =>{
        <InfoItem 
            title = {item.title}
            text = {item.text}
            image = {item.image}
        ></InfoItem>
    })

    let arr = []
    for (let i = 0; i < props.inner.items.length; i++) {
        arr.push(<InfoItem
          title={props.inner.items[i].title}
          text={props.inner.items[i].text}
          image={props.inner.items[i].image}
          order={props.inner.items[i].order}
          ></InfoItem>)
    }
    return(
        <section className="info">
            <div className="container">
                <div className="info__row">
                    {/* {infoContent} */}
                    {arr}
                </div>
            </div>
        </section>
    )
}

export default Info