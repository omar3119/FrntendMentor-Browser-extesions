function BtnActive() {
  return (
    //   <div className="w-[40px] h-[24px] bg-[#de473f] rounded-[20px] px-1 flex  items-center cursor-pointer">
    //       <div className="bg-[#fff] w-[16px] h-[16px] rounded-full"></div>

    //   </div>
    // )
 <label className="relative inline-block w-10 h-5">
      <input
        type="checkbox"
        
        className="peer sr-only"
      />
      <span
        className={`
          absolute top-0 left-0 right-0 bottom-0 
          bg-gray-600 rounded-full transition-colors 
          peer-checked:bg-green-400
        `}
      ></span>
      <span
        className={`
          absolute left-1 top-1 
          h-3 w-3 bg-white rounded-full 
          transition-transform 
          peer-checked:translate-x-5
        `}
      ></span>
    </label>
  );
}

export default BtnActive;
