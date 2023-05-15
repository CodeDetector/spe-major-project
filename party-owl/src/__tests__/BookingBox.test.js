import {screen , render , cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import BookingBox from '../component/BookingBox/BookingBox'

test('test' , () =>{
    expect(true).toBe(true)

})

// test('test2' , ()=>{
//     render(<BookingBox/> )
//     const todoElement = screen.getByTestId("test-id-1")
//     expect(todoElement).toBeInTheDocument()
// })