import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {
    const[input,setInput]=useState(props.edit ? props.edit.value: '')

    const inputFocus=useRef(null);

    useEffect(()=>{
       inputFocus.current.focus() 
    });

    const handleChange=e=>{
        setInput(e.target.value);

    };

    const handleSubmit=e=>{
        //to prevent reloading on clickk of button
        e.preventDefault();

        //now add props to add data into components
       //genearte random id with input text
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text:input,

        });



        //to set emtpy inpit after submiting
        setInput('');
    };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
        <>
        <input type="text" 
        placeholder="Update todo" 
        value={input}
        name='text'
        className='todo-input edit'
        onChange={handleChange}
        ref={inputFocus}/>
        <button className='todo-button edit'>Update</button>
        </>
        ) 
        : 
        (
        <>
        <input type="text" 
        placeholder="Add todo" 
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputFocus}/>
        <button className='todo-button'>Add todo</button>
        </>)}

    </form>
  )
}

export default TodoForm