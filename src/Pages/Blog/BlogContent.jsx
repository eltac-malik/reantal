import React from 'react'
import 'assets/css/Blog.css'
import {useNavigate} from 'react-router-dom'

function BlogContent() {

    const navigate = useNavigate()


    

    return (
        <div className='blog-content'>
            <div className="partial-blog">
                <div className="intro-data">
                        <div className="tips-blog">
                            <h3>Rental Tips</h3>
                            <div className="blog-sm-card">
                                <div className="blog-sm-img">
                                    <img src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/traffic-car-vehicle-black-150x150.jpg" alt=""/>
                                </div>
                                <div className="blog-sm-content">
                                    <p>America Car Rental Offers Lowest Car Rental Rates</p>
                                </div>
                            </div>
                            <div className="blog-sm-card">
                                <div className="blog-sm-img">
                                    <img src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/pexels-photo-245374-150x150.jpeg" alt=""/>
                                </div>
                                <div className="blog-sm-content">
                                    <p>America Car Rental Offers Lowest Car Rental Rates</p>
                                </div>
                            </div>
                            <div className="blog-sm-card">
                                <div className="blog-sm-img">
                                    <img src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/road-people-street-smartphone-150x150.jpg" alt=""/>
                                </div>
                                <div className="blog-sm-content">
                                    <p>America Car Rental Offers Lowest Car Rental Rates</p>
                                </div>
                            </div>
                        </div>
                    
                     <div className="blog-social">
                    <div className="soc fb">
                    <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="soc twit">
                    <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="soc yt">
                    <i className="fa-brands fa-youtube"></i>
                    </div>
                    <div className="soc yt">
                    <i className="fa-brands fa-pinterest"></i>
                    </div>
                    <div className="soc insta">
                    <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
              
                </div>
              
              
                <div className="content-data">
                        <div className="blog-card">
                            <div className="blog-img-prev">
                                <img src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/pexels-photo-2-960x636.jpg" alt=""/>
                            </div>
                            <div className="blog-one-data">
                            <h1>What To Do if Your Rental Car Has Met With An Accident</h1>
                            <p className='blog-small-data'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life […]</p>
                            <p onClick={()=> navigate("/blog/details")}  className='readmore'>READ MORE ➡</p>
                            </div>
                        </div>
                        <div className="blog-card">
                            <div className="blog-img-prev">
                                <img src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/pexels-photo-2-960x636.jpg" alt=""/>
                            </div>
                            <div className="blog-one-data">
                            <h1>What To Do if Your Rental Car Has Met With An Accident</h1>
                            <p className='blog-small-data'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life […]</p>
                            <p  onClick={()=> navigate("/blog/details")}  className='readmore'>READ MORE ➡</p>
                            </div>
                        </div>
                        <div className="blog-card">
                            <div className="blog-img-prev">
                                <img src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/pexels-photo-2-960x636.jpg" alt=""/>
                            </div>
                            <div className="blog-one-data">
                            <h1>What To Do if Your Rental Car Has Met With An Accident</h1>
                            <p className='blog-small-data'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life […]</p>
                            <p  onClick={()=> navigate("/blog/details")}  className='readmore'>READ MORE ➡</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent
