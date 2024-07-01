import { BookmarkIcon, HeartIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom"

const ButtomNavigation = () => {
  return (
    <div className="flex justify-evenly items-center h-[96px] fixed buttom-0 w-full bg-[#DDDDDD]">
        <NavLink to={'/recipes'}>
            <HomeIcon className="size-[24px]" />
        </NavLink >
        <NavLink to={'/favourites'}>
            <BookmarkIcon className="size-[24px]" />
        </NavLink>
        <NavLink to={'/categories'}>
            <HeartIcon className="size-[24px]" />
        </NavLink>
        <NavLink to={'/recipies/new'}>
            <PlusIcon className="size-[24px]" />
        </NavLink>
    </div>
  )
};

export default ButtomNavigation;