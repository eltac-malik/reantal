import React,{useEffect,useState} from 'react'
import './ShowBrand.css'
import axios from 'axios'

function ShowBrand() {

    const [advbrands,setAdvBrands] = useState([])

    useEffect(()=>
    {
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/Homes/getbrands")
        .then(resp=> setAdvBrands(resp.data))
    },[])


    return (
        <div className='showbrand'>
            <div className="shower">
                {
                    advbrands&&advbrands.map(e=>
                        {
                            return(
                            <div className="adv">
                                <img src={`http://vusalimanoff-001-site1.htempurl.com/Brands/${e.image}`} alt=""/>
                            <h1>{e.name}</h1>
                            </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default ShowBrand
