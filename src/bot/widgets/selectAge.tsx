import React from 'react'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { startCount } from "../../store/slice/userdetails";
const SelectAge : React.FC<any> = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const handleAge = (e:React.ChangeEvent<HTMLSelectElement>) => {
        props.actionProvider.handleUserInput(parseInt(e.target.value));
        setTimeout(() => {
            dispatch(startCount());
        },5000)
    }

    return (
        <select onChange={handleAge} title="Enter your Age">
        {Array.from({ length: 24 }, (_, i) => i + 18).map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
      
    )
}
export default SelectAge