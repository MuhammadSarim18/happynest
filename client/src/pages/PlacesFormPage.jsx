import { useEffect, useState } from "react";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function PlacesFormPage() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [perks, setPerks] = useState("");
    const [extraInfo, setExtraInfo] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [maxGuests, setMaxGuests] = useState(1);
    const [redirect, setRedirect] = useState(false);
    const [price, setPrice]= useState(100);
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/places/' + id).then(response => {
            const { data } = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);
            setPrice(data.price);
        })

    }, [id])
    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        )
    }
    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        )
    }
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        )
    }
    async function savePlace(ev) {
        const placeData = {

            title, address,addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price
        }
        ev.preventDefault();
        if (id) {
            //updatePlace
            await axios.put('/places',
                {
                    id, ...placeData
                });
            setRedirect(true);
        }
        else {
            //newPlace
            await axios.post('/places', placeData);
            setRedirect(true);
        }

    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }

    return (
        <div>
            <AccountNav />
            <form onSubmit={savePlace}>
                {preInput('Title', 'Title for your place, should be short & catchy as in advertisment.')}
                <input type="text"
                    placeholder="title: My lovely apt"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)} />

                {preInput('Address', 'Address for your place, should be short & catchy as in advertisment.')}
                <input type="text"
                    placeholder="Address"
                    value={address}
                    onChange={ev => setAddress(ev.target.value)} />

                {preInput('Photos', 'More = Better')}
                <PhotosUploader
                    addedPhotos={addedPhotos}
                    onChange={setAddedPhotos} />

                {preInput('Description', 'Description of the place')}
                <textarea
                    value={description}
                    onChange={ev => setDescription(ev.target.value)} />
                {preInput('Perks', 'Select all ht perks of the place')}

                <Perks selected={perks} onChange={setPerks} />

                {preInput('Extra info', 'House rules, etc')}
                <textarea
                    value={extraInfo}
                    onChange={ev => setExtraInfo(ev.target.value)} />

                {preInput('Check in&out times', 'Add check in & out times,rember to have some time window for cleaning the rome between gests')}

                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                    <div>
                        <h2 className="mt-2 -mb-1">Check in time</h2>
                        <input type="text"
                            placeholder="14"
                            value={checkIn}
                            onChange={ev => setCheckIn(ev.target.value)} />
                    </div>
                    <div>
                        <h2 className="mt-2 -mb-1">Check out time</h2>
                        <input type="text"
                            placeholder="11"
                            value={checkOut}
                            onChange={ev => setCheckOut(ev.target.value)} />
                    </div>
                    <div>
                        <h2 className="mt-2 -mb-1">Max number of guests</h2>
                        <input type="number"
                            value={maxGuests} onChange={ev => setMaxGuests(ev.target.value)} />
                    </div>
                    <div>
                        <h2 className="mt-2 -mb-1">Price per night</h2>
                        <input type="number"
                            value={price} onChange={ev => setPrice(ev.target.value)} />
                    </div>
                </div>
                <button className="primary my-4">Save</button>
            </form>
        </div>
    )
}