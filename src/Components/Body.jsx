import './Body.css'


const Body = () => {
  return (
    <div className="container">
        <div className='left'>
            <div className="tag">
                <h1>HOME OF YOUR FAVOURITE DESSERT</h1>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam enim autem facilis neque iure repellendus temporibus doloremque eveniet saepe praesentium ipsum, nihil quis necessitatibus optio esse error reprehenderit? Hic, iste?
            </p>
            
            <div className='buttons'>
                <button className='shopNow'>Shop Now</button>
                <button className='category'>Category</button>
            </div>
            
            
        </div>
        <div className='right'>
            <img src="/images/waffle.png" alt="waffle" />
        </div>
    </div>
  )
}

export default Body