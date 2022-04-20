import { useState, useMemo } from "react";


const useMoveArray = (arr = [], length = 5) => {
    const [list, setList] = useState(arr);
    // created method which move elements
    const move = () => {
      setList((prev) => {
        const newArr = [...prev].splice(1, prev.length);
        if (prev.length <= length) {
          newArr.push(prev[0]);
        }
        return newArr;
      });
    };
    
    //created method which add elements 
    const add = (newArr) => {
      console.log("ADD");
      setList((prev) => [...prev, ...newArr]);
    };
  
    const show = useMemo(() => {
      return list.slice(0, length);
    }, [list, length]);
  
    return { list, move, add, show };
  };
  export default useMoveArray;