import {screen , render , cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from  '../component/Header/Header'
import React from 'react'

test('test' , () =>{
    expect(true).toBe(true)

})

test('test2' , ()=>{
    render(<Header/> )
    const todoElement = screen.getByTestId("test-id-2")
    expect(todoElement).toBeInTheDocument()
})