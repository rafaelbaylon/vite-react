import './App.css'
import {useDispatch,useSelector} from 'react-redux'
import { increment, decrement, incrementByAmount } from './counter'
import {addNewStudent} from './student'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUmcJUG_XVRsie6x_0zn5_imV3iRZrbwI",
  authDomain: "project2025-ca7d4.firebaseapp.com",
  projectId: "project2025-ca7d4",
  storageBucket: "project2025-ca7d4.firebasestorage.app",
  messagingSenderId: "477835087306",
  appId: "1:477835087306:web:ecc1007628db2b319fd333",
  measurementId: "G-TYG914YLB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
