import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function IndexPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/places').then(response => {
            setPlaces(response.data);
        });
    }, []);
    return (
        <div className="py-16 grid gap-x-8 gap-y-10 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 mt-8">
            {places.length > 0 && places.map(place => {
                return (
                    <Link to={'/place/' + place._id} className="transition ease-in-out delay-150 duration-50 p-3 rounded-2xl hover:shadow-lg hover:bg-bghover">
                        <div className="bg-gray-500 mb-2 rounded-2xl flex">
                            {place.photos?.[0] && (
                                <img className="rounded-2xl object-cover aspect-square" src={'http://localhost:4000/uploads/' + place.photos?.[0]} alt="" />
                            )}
                        </div>
                        <h3 className="font-bold">{place.address}</h3>
                        <h2 className="text-sm text-gray-500">{place.title}</h2>
                        <div className="mt-1">
                            <span className="font-bold">${place.price}</span> per night
                        </div>
                    </Link>
                )
            })}
        </div >
    )
}