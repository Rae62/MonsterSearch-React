import { Component } from "react";

const SearchBox = ({className , placeholder , onChangeHandler}) => (
    <input 
    className={className}
    type="search" 
    placeholder={placeholder}
    onChange={onChangeHandler} />
)



export default SearchBox;