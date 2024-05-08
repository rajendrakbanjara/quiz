
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
           <li onClick={()=>changeOption(index)} className="flex items-center font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-600 p-1.5 w-[36rem] rounded-2xl text-2xl hover:border-purple-600 hover:border-4 border-4 border-transparent hover:transition border-opacity-0 hover:border-opacity-100 hover:duration-700">
                  <div className={`${ isSelected ? 'bg-purple-600' :  'bg-slate-200'} ${isSelected?'text-white':'text-slate-600'} text-slate-600 px-4 py-3 ml-2 my-2 rounded-md  mr-7 text-2xl`}>
                    {lable}
                  </div>
                  {value}
        </li>
        </>
    )
}

export default ListItem;