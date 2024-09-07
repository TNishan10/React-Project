const Hero = () =>{
    return <main className="hero">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="button">
                <button>Shop now</button>
                <button className="second-btn">Category</button>
            </div>
            <div className="shop">
                <p>Also Available</p>
                <div className="brand">
                    <img src="/images/flipkart.png" alt="" />
                    <img src="/images/amazon.png" alt="" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/shoe_image.png" alt="" />
        </div>
    </main>
}

export default Hero;
