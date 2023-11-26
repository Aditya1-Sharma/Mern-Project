import {Link} from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md';
export default function ListingItem({listing}) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
        <Link to = {`/listing/${listing._id}`}>
            <img src={listing.imageUrls[0]} alt="No Listing Image" 
            className='md: h-[320px]sm: h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
            />
            <div className="p-3 flex flex-col gap-2 w-full ">
                <p className='truncate text-lg font-semibold to-slate-700'>{listing.name}</p>
                <div className=" flex items-center gap-1">
                    <MdLocationOn className='h-4 w-4 text-green-800'></MdLocationOn>
                    <p className='text-sm text-gray-700 truncate '>{listing.address}</p>
                </div>
                <div className="">
                    <p class="line-clamp-2 text-sm text-gray-900">{listing.description}</p>
                </div>
                <div>
                    <p className='text-slate-700 mt-2 font-semibold flex items-center'>${' '}
                    {listing.offer ? listing.discountPrice.toLocaleString('en-US') : listing.regularPrice.toLocaleString('en-US')}
                    {listing.type === 'rent' && '/month'}
                    </p>
                </div>
                <div className="text-slate-700 flex flex-row gap-4">
                    <div className="font-bold text-sm">
                        {listing.bedrooms>1 ? `${listing.bedrooms}beds` : `${listing.bedrooms}bed`}
                    </div>
                    <div className="font-bold text-sm">
                        {listing.bathrooms>1 ? `${listing.bathrooms}baths` : `${listing.bathrooms}bath`}
                    </div>
                </div>
            </div>
        </Link>

    </div>
  )
}
