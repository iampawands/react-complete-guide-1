import React from 'react'
import classes from './Cockpit.css'
const cockpit = (props) =>{
    
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