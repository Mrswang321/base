const middleware1 = (req, res, next) => {
  console.log('middleware1 start')
  setTimeout(() => {
    next()
  }, 2000)
}

const middleware2 = (req, res, next) => {
  console.log('middleware2 start')
  next()
}

const middleware3 = (req, res, next) => {
  console.log('middleware3 start')
  next()
}

function run(req, res) {
  let middlewares = [ middleware1, middleware2, middleware3 ]

  const next = () => {
    let middleware = middlewares.shift()
    if(middleware) {
      middleware(req, res, next)
    }
  }

  next()
}

run()