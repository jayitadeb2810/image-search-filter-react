import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import {FaSearch, FaCross} from 'react-icons/fa'

const SearchBar = ({placeholder}) => {

    const [image, setImage] = useState([]);
    const [wordEntered, setWordEtered] = useState('');

    const searchInput = ()=>{

    
            

            // if(wordEntered==='')
            //     setImage([])
            // else
            //     setImage(newFilter);

    


      
         axios.get(`https://api.unsplash.com/search/photos?page=1&query=${wordEntered}&client_id=JPdD8q2MrC4EOumbtalOf8Ez-vG_Vg7ASeYZnLXyeb4`) 
         
         .then(data=>{
            console.log(data);
            setImage(data.data.results)
            }
         )
        } 
          

      return (
    <div>
        <div className='search'>

            <div className="searchinput">
                <input type="text" placeholder ={placeholder} value={wordEntered}  
                onChange={(e)=>setWordEtered(e.target.value)}  />
                <div className="searchicon">

                    <FaSearch onClick={searchInput}/> 

                </div> 
            </div>
            
        <PhotoGallery image={image} />

        </div> 
    </div>
    )
}

const PhotoGallery=({image})=>{
    return(
        <div className='imagegalery'>
            {image.map(item=>(
                <a href="#" target={"blank"} >
                    <img src={item.urls.small} alt="searchgallery"  />
                </a>
            ))}
        </div>
    )
}

export default SearchBar
