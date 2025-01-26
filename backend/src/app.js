import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'


const app = express()


app.use(cookieParser());

app.use(cors({
    origin: [
        "http://localhost:5173", 
        "https://cognitechlabs.vercel.app"
    ],
    credentials: true
}));

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))


//Routes
import showRouter from "./routes/projects.route.js"
import adminRouter from "./routes/admin.route.js"

app.get('/', async (req, res)=>{
    res.json("HELLO")
})
app.use('/api/service/', showRouter)
app.use('/api/admin/', adminRouter)

export { app }