(function () {
  let myNameIs = "Jared"

  function sayHello(name) {
    console.log("Hello from " + name)
  }

  sayHello(myNameIs)

  let random = Math.floor((Math.random() * 100) + 1)

  function isOdd(number) {
    number % 2 === 0 ? console.log(number + " is even") : console.log(number + " is odd")
  }

  isOdd(random)
})()
