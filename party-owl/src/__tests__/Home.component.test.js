import {screen , render , cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from  '../component/Home/Home.component'
import React from 'react'

test('test' , () =>{
    expect(true).toBe(true)

})

test('test2' , ()=>{
    render(<Home allLocations={[]}/> )
    const todoElement = screen.getByTestId("test-id-1")
    expect(todoElement).toBeInTheDocument()
})