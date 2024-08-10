import image from '../assets/benefits-of-kids-yoga.png'

const NewsItem = ({ title, description, src, url }) => {
  return ( 
  
    <div className="card bg-dark text-light mb-2 d-inline-block my-2 mx-2 align-items-start" style={{maxWidth:"315px"}}>
      <div className="card-body">
    <img src={src?src:image} style={{height:"250", width:"360", objectFit:"cover"}} className="card-img-top img-fluid" alt="Responsive image"/>
    <div className="pt-3">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"In February, Mr Bezos announced that he would sell shares in technology giant worth around $8.5bn."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
    </div>
    </div>
    </div>
    
  )
}

export default NewsItem;
