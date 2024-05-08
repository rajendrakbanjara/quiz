
interface ChildProps {
    index: number;  
    lable : String;
    value: String;
    isSelected: boolean;
    changeOption: (option: number) => void;
  }
  const ListItem: React.FC<ChildProps> = ({lable, value, isSelected, changeOption, index}) => {
    return(
        <>
           <li onClick={()=>changeOption(index)} className="flex items-center font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-600 p-1.5 lg:w-[36rem] rounded-2xl lg:text-2xl hover:border-purple-600 hover:border-4 border-4 border-transparent hover:transition border-opacity-0 hover:border-opacity-100 hover:duration-700">
                  <div className={`${ isSelected ? 'bg-purple-600' :  'bg-slate-200'} ${isSelected?'text-white':'text-slate-600'} text-slate-600 lg:px-4 lg:py-3 px-[0.8rem] py-1.5 ml-2 lg:my-2 rounded-md  mr-7 text-2xl`}>
                    {lable}
                  </div>
                  {value}
        </li>
        </>
    )
}

export default ListItem;