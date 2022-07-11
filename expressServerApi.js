const express = require("express");
const app = express();

const books = {
    "javaScript" : "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.",
    "reactJs" : "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
    "nodeJs" : "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.",
    "mongoDB" : "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions."
}

app.get('/',(req, res)=>{
    res.send("Hello");
})

app.get('/books',(req, res)=>{
    res.send(books);
})

app.listen(8000,(req,res)=>{
    try{
        console.log("server runing at port no : 8000");
    }catch(err){
        req.send(err);
    }
})