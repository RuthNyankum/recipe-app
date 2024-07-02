import ButtomNavigation from "../components/ButtomNavigation"
import CategoryCard from "../components/CategoryCard";
import bread from "../assets/images/breakfast.png"
import bread2 from "../assets/images/lunch.png"
import wine from "../assets/images/drink.png"
import pasta from "../assets/images/pastas.png"
import salad from "../assets/images/salads.png"
import cake from "../assets/images/desserts.png"
import soup from "../assets/images/soups.png"

const Categories = () => {
  return (
    <>
      <div className="flex flex-col gap-y-10 px-10 py-10">
        <h3 className="font-bold text-center text-[24px] pt-[20px]">Categories</h3>

        <div className=" flex flex-col gap-y-5">
          <CategoryCard
          text="Breakfast"
          imaGes={bread} />

          <CategoryCard
          text="Lunch"
          imaGes={bread2} />

          <CategoryCard
          text="Drink"
          imaGes={wine} />

          <CategoryCard
          text="Pastas"
          imaGes={pasta} />

          <CategoryCard
          text="Salads"
          imaGes={salad} />

          <CategoryCard
          text="Desserts"
          imaGes={cake} />

          <CategoryCard
          text="Soups"
          imaGes={soup} />
          
        </div>
    </div>
      <ButtomNavigation />
    </>
  )
};

export default Categories;