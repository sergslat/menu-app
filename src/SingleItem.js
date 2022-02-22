const SingleItem = ({dish}) => {
    return(
        
        <article className="menu-item">
          <img src={dish.img} className="photo" alt="menu item"/>
          <div className="item-info">
            <header>
              <h4>{dish.title}</h4>
              <h4 className="price">{`${dish.price} Bs.`}</h4>
            </header>
            <p className="item-text">
              {dish.desc}
            </p>
          </div>
        </article>
        
    )
}
export default SingleItem;