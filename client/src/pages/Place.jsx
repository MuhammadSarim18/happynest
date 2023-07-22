import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
    const { id } = useParams();
    const [place, setPlace] = useState();
    useEffect(() => {
        if (!id) {
            return
        }
        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data);
        })
    }, [id])

    if (!place) return '';



    return (
        <div className="mt-4 -mx-8 px-12 pt-20 ">
            <h1 className="text-3xl">{place.title}</h1>
            <AddressLink>{place.address}</AddressLink>

            <PlaceGallery place={place} />

            <div className="mt-8 mb-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>
                    <div className="my-4 ">
                        <h2 className="font-semibold text-2xl">Description</h2>
                        {place.description}
                    </div>
                    <hr className="p-4" />
                    Check-in: {place.checkIn}<br />
                    Check-out: {place.checkOut}<br />
                    Max number of guests: {place.maxGuests}
                    <hr className="my-4" />
                </div>

                <div>
                    <BookingWidget place={place} />
                </div>
                <div>
                    <span>{place.perks[0]}</span><br />
                    <span>{place.perks[1]}</span><br />
                    <span>{place.perks[2]}</span><br />
                    <span>{place.perks[3]}</span><br />
                    <span>{place.perks[4]}</span><br />
                    <span>{place.perks[5]}</span><br />
                    <span>{place.perks[6]}</span>
                </div>
            </div>
            <div className="bg-white -mx-8 px-8 py-8 border-t sm:mx-0">
                <div>
                    <h2 className="font-semibold text-2xl">Extra Info</h2>
                </div>
                <div className="text-sm text-gray-700 leading-5 mb-4 mt-2">{place.extraInfo}</div>
            </div>

        </div>
    )
}