const JSONServer=require ('json-server');
const MPServer=JSONServer.create();
const router=JSONServer.router('db.json')

// create middleware
const middleware=JSONServer.defaults();
// create port
const PORT=3001||process.env.PORT;
// use middleware and router
MPServer.use(middleware)
MPServer.use(router)
// listening to port
MPServer.listen(PORT,()=>{
    console.log("server started at ", PORT);
    
})