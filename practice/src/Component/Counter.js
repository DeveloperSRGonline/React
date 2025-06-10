import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Add Amount
      </button>
    </div>
  )
}
