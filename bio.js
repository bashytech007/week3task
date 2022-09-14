const http=require(`http`)
const fs=require(`fs`)


const server=http.createServer((req,res)=>{

    if(req.url==="/"||req.url==='/home'){
        res.end(`<p>Name:Aremu bashir</p>
        <p>age:96</p>
        <p>religion:islam</p>
        <p>my email<a href="mailto:">bashiraremu474@gmail.com</a></p>
        <p>Click here to go to hompage:<a href="/">Home</a></p>
        `)
    }else if(req.url==="/about"){
        res.end(`<p>I am tenacious</p>
        <p>Click here to go to hompage:<a href="/">Home</a></p>`)
    }else if(req.url==="/contact"){
        res.end(`<p>can only find twitter ,link below:</p>
        <p>Twitter:<a href="/"></p>
        <p>Twitter:<a href="https://twitter.com/bashysureboi?s=09">twitter handle</p>
        <p>Click here to go to hompage:<a href="/">Home</a></p>
        `)
    }else{
        res.end(`<h1>OOPS,404 page not found</h1>
        <p>Click here to go to hompage:<a href="/">Home</a></p>`
        )
    }
})

server.listen(9090,()=>{
    console.log(`server is listening on port 9090`)
})