import express, { Router } from "express"

const router: Router = express.Router()

router.get("/", async (req, res) => {
  res.send("Hello world")
})

export default router
