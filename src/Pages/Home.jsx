import React from 'react'
import 'assets/css/Home.css'
import QuickSearch from 'components/QuickSearch/index'
import Fleet from 'components/Fleet/Fleet'
import Choose from 'components/ChooseUs/Choose'
import ShowBrand from 'components/ShowBrand/ShowBrand'

function Home() {
    return (
        <div className='home'>
            <QuickSearch/>
            <ShowBrand/>
            <Fleet/>
            <Choose/>
        </div>
    )
}

export default Home
