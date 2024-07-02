const CategoryCard = ({ text, imaGes }) => {
  return (
    <div className="h-26 max-w-md flex flex-row justify-between items-center shadow-xl bg-[#DDDDDD] rounded-xl">
        <span className="text-black font-semibold flex text-center text-xl ml-2 font-sans">{text}</span>

        <img src={imaGes} alt={text} className="size-20 ml-2" />
    </div>
  )
};

export default CategoryCard;