
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";


// export default function Home(){
//     const[places,setplaces]=useState([]);
//     useEffect ( ()=>{
//         axios.get('http://localhost:4000/all-places').then(response=>{ 
//             setplaces(response.data);
//         });
//     }, [] );
//     return (

//         <div className="mt-8 mx-4 grid gap-x-20 mx-5  gap-y-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
           
//             {places.length>0 && places.map(place=>(
//                <Link to={'http://localhost:3000/places/'+place._id} >
//                 <div className="bg-grey-500 mb-2 rounded-2xl flex" >
//                     {place.photos?.[0] && (

//                         <img className="rounded-2xl object-cover aspect-square" src={'http://localhost:4000/uploads/'+place.photos?.[0] } alt="image_of_place"/>
//                         )}
//                 </div>
//                 <h2 className="mt-3   leading-4 "  style={{fontSize:'1.3rem'}} >  
//                 {place.title}
//                 </h2>
//                 <h2 className=" mt-2 mb-2 font-bold  " style={{fontSize:'1.5rem'}} > {place.address}
//                 </h2>
//                 <h2 className="font-bold mt-2 mb-4" style={{fontSize:'1.2 rem'}}>
//                    {place.price} $ Per Night
//                 </h2>
//                </Link> 
//             ))}
//         </div>
//     );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home(){
    const [places, setPlaces] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:4000/all-places').then(response => { 
            setPlaces(response.data);
        });
    }, []);

    return (
        <div className="mt-8 mx-4 mb-5 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4">
            {places.map(place => (
                <Link to={'http://localhost:3000/places/'+place._id}  key={place._id}>
                    <div className="bg-blue-100 rounded-lg overflow-hidden shadow-md">
                        {place.photos?.[0] && (
                            <img className="w-full h-64 object-cover object-center" src={'http://localhost:4000/uploads/'+place.photos?.[0]} alt="image_of_place"/>
                        )}
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">{place.title}</h2>
                            <p className="text-gray-600 mb-2">{place.address}</p>
                            <p className="text-gray-800 font-semibold">{place.price} $ Per Night</p>
                        </div>
                    </div>
                </Link> 
            ))}
        </div>
    );
}
