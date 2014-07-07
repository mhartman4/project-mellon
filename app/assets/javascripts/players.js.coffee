# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

this.round = (num) ->
  Math.round(num * 100) / 100

this.zip = (arrayA, arrayB) ->
  length = Math.min(arrayA.length, arrayB.length)
  result = []
  n = 0

  while n < length
    result.push [
      arrayA[n]
      arrayB[n]
    ]
    n++
  result
