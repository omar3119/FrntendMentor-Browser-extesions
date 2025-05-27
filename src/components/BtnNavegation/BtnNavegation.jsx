function BtnNavegation({ name, isClicked, isActive, id }) {
  return (
    <button
      onClick={()=> isClicked(name)}
      id={id}
      className={`border-[#545969] bg-[#2f364b] 
        border-2 rounded-full px-3 py-1 cursor-pointer text-[16px] ${isActive ? "bg-[#de473f] border-none" : "" }`}
    >
      {name}
    </button>
  );
}

export default BtnNavegation;
