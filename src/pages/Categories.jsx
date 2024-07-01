import ButtomNavigation from "../components/ButtomNavigation";
import CategoryCard from "../components/CategoryCard";
import bread from "../assets/images/breakfast.png"

const Categories = () => {
  return (
    <>
      <div>
      <h3>Categories</h3>

      <div>
        <CategoryCard
        text="Breakfast"
        imaGes={bread} />
        <ButtomNavigation />
      </div>
    </div>
    </>
  )
};

export default Categories;