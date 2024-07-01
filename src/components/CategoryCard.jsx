const CategoryCard = ({ text, imaGes }) => {
  return (
    <div className="flex justify-between drop-shadow-xl">
        <span className="text-black font-semibold">{text}</span>

        <img src={imaGes} alt={text} />
    </div>
  )
};

export default CategoryCard;