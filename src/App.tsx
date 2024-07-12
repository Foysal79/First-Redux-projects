import './App.css'
import { decrement, increment, incrementByValue } from './redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  const {count} = useAppSelector((state ) => state.counter)
  const dispatch = useAppDispatch();
  return (
    <div className=' w-full h-screen flex justify-center items-center' >
      <div className='flex justify-center items-center bg-gray-300 border border-purple-400 p-10 rounded-md' >
      <button
      onClick={() => dispatch(incrementByValue(5))} 
       className='px-4 py-2 bg-green-500 
      rounded-md text-lg font-semibold text-white' >incrementByValue</button>
      <button
      onClick={() => dispatch(increment())} 
       className='px-4 py-2 bg-green-500 
      rounded-md text-lg font-semibold text-white' >increment</button>
      <h1 className='mx-10 my-3' >{count}</h1>
      <button onClick={() => dispatch(decrement())} className='px-4 py-2 bg-red-500 
      rounded-md text-lg font-semibold text-white' >DecrIncrement</button>
    </div>

    </div>
    
  )
}

export default App
