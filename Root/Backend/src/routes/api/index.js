//index.js is the master routes file where the routes
//for all the separate API components are imported
import { authRouter } from './user-routes.js'
import { testRouter } from './api-test-routes.js'

export const allRouters = {
    authRouter,
    testRouter
}