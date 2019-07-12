import express from 'express'

// import { renderToString } from 'react-dom/server'

// import Hello from './src/containers/Hello/index'

const app = express()

// const content = renderToString(Hello)

const port = 3000

app.get('/', (req, res) => {
  res.send(
    `
    <div class='content'>
      ${'Hello React + Express'}
    </div>
    `
  )
})

app.listen(port, () => console.log(`App is listening on prot ${port}`))