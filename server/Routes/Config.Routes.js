import PostRouter from "./Post.Routes.js"

export default function configRoutes(app) {

  app.use('/post', PostRouter)  
  
}

