import React, {useState} from 'react';



const Form = () => {
    //represents each task as an object
    const [task, setTask] = useState({
        nameOfTask: "",
        isComplete: false
    })

    //represents the list containing all the task objects
    const [listOfTasks, setListOfTasks] = useState([])



    //when the input in the form changes, we need to update our state variable (task)'s name to be what is in the input
    const changeHandler = (e)=>{
        console.log("im gona make change")
        setTask({
            ...task, //make a copy of whats currently in task
            [e.target.name]: e.target.value
        })
    }

    //when we submit the form, we will add the task object to our list(array) of tasks. below is the submit handler called submitTask
    const submitTask = (e)=>{
        e.preventDefault()
        console.log("submitting task")
        setListOfTasks([...listOfTasks, task ]) //update the list of tasks to have whatever it currently has plus the current task object that just got submitted


        //to clear out the form inputs first reset the state variable for form info to initial value like below
        //second, update the value of the input to match the state variable
        setTask({
            nameOfTask: "",
            isComplete: false
        })

    }


    //complete a task
    const completeTask = (e,idx)=>{
        console.log("done with the task at index number -->", idx)
        //update the task object that was clicked on
        let [...updatedListofTasks] = listOfTasks
        console.log("updted list looks like -->", updatedListofTasks)
        updatedListofTasks[idx].isComplete = !updatedListofTasks[idx].isComplete //change the array of tasks at the index number where the task we want to update is to have the "isComplete" property toggle to true and false

        setListOfTasks(updatedListofTasks) //update my state variable to use the new updated array of tasks

    }

    //delete task
    const deleteTask = (e,idx)=>{
        let newlist = listOfTasks.filter((task,i)=>{
            return i != idx //return back only the tasks whose index number does not match the index number of the task I want to delete
        })

        //update my state variable listOfTasks
        setListOfTasks(newlist)

    }

    return (
        <div>
           <h4>Add a task below</h4>
           <form onSubmit = {submitTask}>
               <div className="form-group">
                   <label htmlFor="">Task:</label>
                   <input onChange= {changeHandler} type="text" name="nameOfTask" value = {task.nameOfTask} id="" className="form-control" />
               </div>
               <input type="submit" value="Add Task" className="btn btn-success mt-3" />
           </form>
           {
               listOfTasks.map((taskObj,i)=>{
                    return (
                    <div key = {i}>
                        <h3 style = {{textDecoration: taskObj.isComplete?  "line-through": "none"}}>{taskObj.nameOfTask} <input onClick = {(e)=>completeTask(e,i)} type="checkbox" name="" id="" /></h3>
                        <button onClick= {(e)=>deleteTask(e,i)}>Delete</button>
                    </div>
                    )
               })
           }
        </div>
    );
};

export default Form;