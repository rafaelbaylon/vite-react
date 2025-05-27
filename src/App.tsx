import './App.css'
import {useDispatch,useSelector} from 'react-redux'
import { increment, decrement, incrementByAmount } from './counter'
import {addNewStudent} from './student'


function App() {
  const {count} = useSelector((state: any) => state.counter)
  const {student} = useSelector((state: any) => state.student)
  const dispatch = useDispatch()
  return (

      <div className='App'>
       <h1>The count is: {count}</h1>
       <button onClick={()=>dispatch(increment())}>Increment</button>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
       <button onClick={()=>dispatch(incrementByAmount(5))}>Increment by 5</button>
       <h2>{student}</h2>
       <input type='text' className='studentName' value={student}
        onChange={(e)=>dispatch(addNewStudent(e.target.value))}
       />
      </div>
  )
}

export default App
