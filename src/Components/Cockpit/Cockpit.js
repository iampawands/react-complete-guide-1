import React,{ useEffect,useRef } from 'react'
import classes from './Cockpit.css'
const cockpit = (props) =>{
    const toggleButtonRef = useRef(null)
    //if second list is not given i.e. empty then user effect things will run only first time.this list mainly tells which objects to look before changing.
    useEffect(()=>{
        console.log('Cockpit useEffect')

        toggleButtonRef.current.click();

        return () =>{
            console.log('cleanup work in useEffect')
        }
    },[])

    useEffect(()=>{
        return()=>{
            console.log('cleanup work in 2nd useEffect')
        }
    })

    let btnClasses = [classes.Button]
    if(props.showPersons){
        btnClasses.push(classes.Red)
    }
    
    let classList = [];
    
    if(props.personLength<=2){
      classList.push(classes.red)
    }
    
    if(props.personLength<=1){
      classList.push(classes.bold)
    }
    
    return <div>
         <p className={classList.join(' ')}>List of Persons!!</p>
        <button ref={toggleButtonRef} className={btnClasses.join(' ')} onClick={()=>props.clicked()}>Toggle Persons</button>
        <button onClick={props.login} className={btnClasses.join(' ')}>Login</button>
    </div>
}
export default React.memo(cockpit);