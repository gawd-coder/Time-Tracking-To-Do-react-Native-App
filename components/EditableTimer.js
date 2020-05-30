import React from 'react'
import TimerForm from './TimerForm';
import Timer from './Timer';

//returns either a timer face or a timer form based on the prop editFormOpen
export default function EditableTimer({
    id,
    title,
    project,
    elapsed,
    isRunning,
    editFormOpen,
}){
    if(editFormOpen){
        return <TimerForm id = {id} title = {title} project = {project} /> ;
    }
    return(
        <Timer  
            id = {id}
            title = {title}
            project = {project}
            elapsed = {elapsed}
            isRunning = {isRunning}
        />    
    )
}
