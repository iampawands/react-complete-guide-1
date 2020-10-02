import React,{ useEffect } from 'react'
import classes from './Cockpit.css'
const cockpit = (props) =>{

    //if second list is not given i.e. empty then user effect things will run only first time.this list mainly tells which objects to look before changing.
    useEffect(()=>{
        console.log('Cockpit userEffect')

        setTimeout(()=>{alert("Hi there!!")},1000)
    },[])
    
    let btnClasses = [classes.Button]
    if(props.showPersons){
        btnClasses.push(classes.Red)
    }
    
    let classList = [];
    
    if(props.persons.length<=2){
      classList.push(classes.red)
    }
    
    if(props.persons.length<=1){
      classList.push(classes.bold)
    }
    
    return <div>
         <p className={classList.join(' ')}>List of Persons!!</p>
        <button className={btnClasses.join(' ')} onClick={()=>props.clicked()}>Toggle Persons</button>
    </div>
}
export default cockpit;