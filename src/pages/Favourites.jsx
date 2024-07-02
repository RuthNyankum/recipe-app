import ButtomNavigation from "../components/ButtomNavigation";
import FavouriteCard from "../components/FavouriteCard";
import fav1 from "../assets/images/fav1.png";
import fav2 from "../assets/images/fav2.png";

// import FavouriteCard from "../components/FavouriteCard";
// import fav1 from "../assets/images/fav1.png"

// const Favourites = () => {
//   return (
//     <>
//     <div>
//       <h3>Favourite</h3>
      
//       <div className="grid grid-cols-2 gap-5" >
//         <FavouriteCard
//         image={fav1}
//         name="Chorizo & mozzarella gnocchi bake" />

//       <FavouriteCard
//         image={fav2}
//         name="Huevos Rancheros" />
//       </div>
      
//       <ButtomNavigation />
//     </div>  
//     </>
//   )
// };

// export default Favourites;



const Favourites = () => {
  return (
    <>
      <div className="mt-14">
      <h3 className="text-2xl font-semibold mb-4 text-center ">Favourite</h3>
      <div className="flex justify-center space-x-4">
          <FavouriteCard 
            image={fav1}
            title="Chorizo & mozzarella gnocchi bake"
            calories="350"
            time="45"
          />

          <FavouriteCard 
            image={fav2}
            title="Huevos Rancheros"
            calories="125"
            time="20"
          />
      </div>

      <ButtomNavigation />
    </div>
    </>
  )
};

export default Favourites;