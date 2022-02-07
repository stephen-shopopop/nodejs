// Copyright 2021-2022 stephendltg. All rights reserved. ISC license.

/**
<<<<<<< HEAD
 * deps.js
=======
 * deps.ts
>>>>>>> 233087a44a10a83d54b7663ef0456d736aa9a676
 *
 * This module re-exports the required methods from the dependant remote Ramda module.
 */

// force to enable debug
require('debug').enable('*')

// debug dependencies
const debug = require('debug')('worker')

// exports all dependencies
module.exports = {
  debug
}
