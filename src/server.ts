import express, {Request, Response} from "express"
import path from "path"
import * as dotenv from 'dotenv'
dotenv.config()
import callSephoraAPI from "./controllers/SephoraAPI"

const app = express()
const PORT = 3000

//
callSephoraAPI()

app.use(express.json())

// •/shop endpoint
app.get('/shop', (req: Request, res: Response) => {
  if (req) {
  console.log("shop endpoint reached")
  res.status(200).json({})
  }
})

// •/product endpoint
app.get('/product', (req: Request, res: Response) => {
  if (req){
  console.log("product endpoint reached")
  res.status(200).json({})
  }
})

// •/search endpoint
app.get('/search', (req: Request, res: Response) => {
  if (req){
  console.log("search endpoint reached")
  res.status(200).json({})
  }
})

// •/ endpoint
app.get('/', (req: Request, res: Response) => {
  if (req){
  callSephoraAPI()
  .then((result) => {
    console.log("root endpoint reached")
    res.status(200).send(result)
  })
  }
})

app.use('/', express.static(path.join(__dirname, "../public")))

app.listen(PORT,() => {
  console.log(`Listening on PORT: ${PORT}`)
})