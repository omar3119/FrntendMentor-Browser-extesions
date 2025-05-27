
import BtnRemove from "./BtnRemove";
import BtnActive from "./BtnActive";

const Card = ({name, description, logo}) => {
  return (
    <div className="w-full bg-[#212636] p-5 rounded-[20px] flex flex-col gap-6 max-w-[382px]">
      <div className="w-full flex gap-4">
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
        <div>
            <h1 className="text-[18px] font-bold ">{name}</h1>
            <p className="text-[16px] text-[#c7c7c7]">{description}</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <BtnRemove/>
        <BtnActive/>
      </div>
    </div>
  );
};

export default Card;
