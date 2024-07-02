// import { HeartIcon } from "@heroicons/react/24/outline";

import { ClockIcon, FireIcon, HeartIcon } from "@heroicons/react/24/outline";

const FavouriteCard = ({ image, title, calories, time }) => {
    return (
        <div className="relative bg-white rounded-lg shadow-lg p-4 w-52">
            {/* <div className="h-[27px] w-[23px] bg-white absolute top-2 right-2 rounded-[7px] flex justify-center items-center">
                <HeartIcon className="size-[15px]" />
            </div>
            <img src={image} alt={name} />
            <p className="absolute left-2.5 text-white font-bold">{name}</p> */}
            <HeartIcon className="h-[27px] w-[23px] bg-white absolute top-6 right-6 rounded-[7px] flex justify-center items-center"/>
            <img src={image} alt="{title}" className="w-full h-32 object-cover rounded-md mb-2"/>
            <h3 className="text-lg font-semibold mb-[15px]">{title}</h3>
            
            <div className="flex flex-cols gap-x-2.5 text-gray-600 absolute bottom-2 left-4 right-4">
                <div className="flex items-center">
                    <FireIcon className="h-4 w-4 mr-1"/> {calories} kcal
                </div>
                <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1"/> {time} min
                </div>
            </div>
        </div>
    );
};

export default FavouriteCard;