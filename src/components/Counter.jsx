import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT } from '../redux/actionTypes/actionTypes';

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counter)
  return (
    <Box>
      <Typography variant="h4">Counter Application With Redux and Material UI</Typography>
      <Box>
        <Typography variant="h6">
          Counter: {counter}
        </Typography>
        <Box sx={{
          display: 'flex',
          gap: '1rem',
          mt: 1
        }}>
          <Button variant="outlined" onClick={() => dispatch({ type: DECREMENT })}>Decrement</Button>
          <Button variant="outlined" onClick={() => dispatch({ type: INCREMENT })}>Increment</Button>
        </Box>
      </Box>
    </Box>
  )
}
