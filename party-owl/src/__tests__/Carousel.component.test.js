import {screen , render , cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import React from 'react'
// import LocationTabs from '../component/Tabs/LocationTabs'
import CarouselComp from '../component/Carousel/Carousel'

test('test' , () =>{
    expect(true).toBe(true)

})

// test('test2' , ()=>{
//     render(<CarouselComp/> )
//     const todoElement = screen.getByTestId("test-id-1")
//     expect(todoElement).toBeInTheDocument()
// })