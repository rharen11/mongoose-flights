import { Router } from "express";
import { Route } from "express";
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

router.get('/new', mealsCtrl.new)

router.post('/', mealsCtrl.create)

export{
    router
}