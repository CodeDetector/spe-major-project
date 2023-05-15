import {screen , render , cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import React from 'react'
import LocationTabs from '../component/Tabs/LocationTabs'

test('test' , () =>{
    expect(true).toBe(true)

})

// test('test2' , ()=>{
//     render(<LocationTabs/> )
//     const todoElement = screen.getByTestId("test-id-3")
//     expect(todoElement).toBeInTheDocument()
// })