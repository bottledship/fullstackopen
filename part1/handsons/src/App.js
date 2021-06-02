import React from 'react'

const App = () => {
  const name = "Tommy"
  const age = 21
  const now = new Date()
  const a = 10
  const b = 20

  return (
  <div>
    <p>Hello world, it is {now.toString()}!</p>
    <hello name = {name} age = {age} />
    <p> 
      {a} plus {b} is {a+b}
    </p>
  </div>
  )
}

const hello = (props) => {  
  return (    
  <div>      
    <p>
      Hello {props.name}. You are {props.age} years old.
    </p>    
  </div>  )
    }

export default App