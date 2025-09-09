import PostRouter from "./Post.Routes.js"
import UserRouter from "./User.Router.js"

export default function configRoutes(app) {

  app.use('/post', PostRouter)  
  app.use('/user', UserRouter) 
  
}

