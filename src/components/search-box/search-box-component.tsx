import { ChangeEvent } from 'react';
import './search-box.style.css';

//const function: (parameterName: paramaterTypes, ...) => returnType (void) = ()=>{}
//type vs interface(extendable)

//interfaces - class components
// interface ISearchBoxProps {
//   className: string;
//   placeholder: string;
// }
// //overload(extend) interface (...ISearchBox)
// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void
// }


//type - functional components
type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;//changeEventHandler. react type
};


const SearchBox = ( { className, placeholder, onChangeHandler } : SearchBoxProps) => (
  <input 
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
)

export default SearchBox;