import React from 'react'
import 'assets/css/BlogDetails.css'
import {useNavigate} from 'react-router-dom'


function BlogDetails() {
    const navigate = useNavigate()
    return (
        <div className='blogdet'>
            <div className="det-one">
                <img src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/nw6xremkxkg-nicolai-berntsen.jpg" alt=""/>
                <h1>What To Do if Your Rental Car Has Met With An Accident</h1>
            </div>
            <div className="det-content">
                <p className='det-p-about'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed.</p>
                <div className="det-img">
                    <img src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/IMG_3496bfree-1024x683.jpg" alt=""/>
                </div>
            </div>
            <div className="back-blog" onClick={()=> navigate("/blog")}>
                ⬅ Go Back
            </div>
        </div>
    )
}

export default BlogDetails
