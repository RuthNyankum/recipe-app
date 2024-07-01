import RecipeCard from "../components/RecipeCard";
import recipeOneImage from "../assets/images/recipe1.png"
import recipeTwoImage from "../assets/images/recipe2.png"
import recipeThreeImage from "../assets/images/recipe3.png"
import recipeFourImage from "../assets/images/recipe4.png"
import ButtomNavigation from "../components/ButtomNavigation";


const Recipes = () => {
  return (
    <><div className="px-10 py-10">
      <h3>Search</h3>
      <div>
        <h3>What is your kitchen?</h3>
        <p>Enter some ingredients</p>
      </div>
      <div>
        <i>MG</i>
        <input type="text" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <RecipeCard
          image={recipeOneImage}
          name="Chorizo & mozzarella gnocchi bake" />
        <RecipeCard
          image={recipeTwoImage}
          name="Coconut & squash curry" />
        <RecipeCard
          image={recipeThreeImage}
          name="Huevos Rancheros" />
        <RecipeCard
          image={recipeFourImage}
          name="Black forest Gateau" />
      </div>
    </div><ButtomNavigation /></>
  )
};

export default Recipes;