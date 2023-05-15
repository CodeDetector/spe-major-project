import {screen , render , cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from  '../component/Card/Card.component'
import React from 'react'

test('test' , () =>{
    expect(true).toBe(true)

})

test('test2' , ()=>{
    render(<Card/> )
    const todoElement = screen.getByTestId("test-id-1")
    expect(todoElement).toBeInTheDocument()
})