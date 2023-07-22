export default function PlaceImg({place, index=0, className=null}){
    if(!place.photos?.length){
        return '';
    }
    if(!className){
        className = 'object-cover h-full md:h-full md:w-48';
    }

    return(
            <img className={className} src={'http://localhost:4000/uploads/'+place.photos[index]} alt="" />
    )

}