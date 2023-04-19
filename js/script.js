// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: April 2023
// This file contains the JS functions for index.html


'use strict'
/**
* This function is for calculating the volume of a pyramid
*/
function calculate() {
// input
  const radius = parseInt(document.getElementById('sphere-radius').value)


 // process
const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)

// output
document.getElementById('volume').innerHTML = "The volume is " + volume + " cm³"
}
