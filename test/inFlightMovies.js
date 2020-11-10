const { inFlightMovies } = require('../interview-cake/inFlightMovies');
const { expect } = require("chai")

describe('inFlightMovies', ()=> {
  it('should return true if there are 2 movies that sum to equal target number', ()=> {
    const flight = 30
    const movies = [20, 23, 15, 10]
    let returned = inFlightMovies(flight, movies)
    expect(returned).to.equal(true)
  })
  it('should return false if there is no sum', ()=> {
    const flight = 40
    const movies = [20, 23, 15, 10]
    let returned = inFlightMovies(flight, movies)
    expect(returned).to.equal(false)
  })
})