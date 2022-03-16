const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web15-atlas?retryWrites=true&w=majority");
};

// SectionSchema

const sectionSchema = new mongoose.Schema(
    {
        book_name: { type: String, required: true },
        author_name: { type: String, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Section = mongoose.model("section",sectionSchema);

// SectionCRUD

app.get("/sections",async(req,res) => {
    try{
        const section = await Usersection.find().lean().exec();
        return res.status(200).json({section: section});
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

app.post("/sections",async (req,res) => {
    try{
        const section = await Section.create(req.body);
        return res.status(201).send(section);
    }
    catch(err){
         return res.status(500).send({message:err.message});
    }
});

app.get("/sections/:id", async(req,res) => {
    try{
        const section = await section.findById(req.params.id).lean().exec();
        return res.status(200).send(section);
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});

app.patch("/section/:id", async(req,res) => {
    try{
        const section = await Section.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        })
        lean().exec();
        return res.status(200).send(section);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

app.delete("/section/:id",async(req,res) => {
    try{
        const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(section);
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});

// AuthorSchema

const authorSchema = new mongoose.Schema(
    {
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        bookId: {type: mongoose.Schema.Types.ObjectId, ref:"book" , required : true},
    },{
        versionKey:false,
        timestamps:true,
    }
);

const author = mongoose.model("author",authorSchema);

// AuthorCRUD

app.get("/authors",async(req,res) => {
    try{
        const author = await author.find().lean().exec();
        return res.status(200).send({auhtor: author});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});

app.post("/authors",async(req,res) => {
    try{
        const section = await Section.create(req.body);
        return res.status(200).json({author:author});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});

app.get("/authors/id:",async(req,res) => {
    try{
        const author  =await Section.findById(req.params.id).lean().exec();
        return res.status(200).json({author});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});

app.patch("/authors/id:",async(req,res) => {
    try{
        const author = await Section.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        .lean().exec();
        return res.status(200).send({author});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});
app.delete("/authors/id:",async(req,res) => {
    try{
        const author = await Section.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).json({author});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});


// BookSchema
const bookSchema = new mongoose.Schema(
    {
        name:{ typoe: String, required: true},
        body: {type: String, required: true},
        sectionId: { type: mongoose.Schema.Types.ObjectId, ref:"section", required: true},
        author_id: { type: mongoose.Schema.Types.ObjectId, ref:"author", required: true}
    },{
        versionKey: false,
        timestamps: true,
    }
);

const book = mongoose.model("book", bookSchema);

// BookCRUD

app.post("/books", async(req,res) => {
    try{
        const book = await book.create(req.body);
        return res.status(200).send({book:book});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});

app.get("books/id:", async(req,res) => {
    try{
        const book = await book.findById(req.params.id).lean().exec();
        return res.status(200).send({book: book});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});

app.patch("/books/id:", async(req,res) => {
    try{
        const book = await book.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        lean().exec();
        return res.status(200).send({book});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});

app.delete("/books/id:", async(req,res) => {
    try{
        const book = await book.findByIdAndDelete(req.params.id);
        return res.status(200).send({book});
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

// CheckoutSchema

const checkoutSchema = new mongoose.Schema(
{
    name: {type: String, required: false},
    bookId: {type: mongoose.Schema.ObjectId, ref: "book", required: true},
},
{
    versionKey: false,
    timestamps: true,
}
);

const checkout = mongoose.model("checkout",checkoutSchema);

// CheckoutCRUD

app.get("/checkedout", async(req,res) => {
    try{
        const checkedout = await checkout.findById(req.params.id).lean().exec();
        return res.status(200).json({checkout});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});

app.post("/checkedout",async(req,res) => {
    try{
        const checkedout = await checkout.create(req.body);
        return res.status(200).send({checkout});
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

app.patch("/checkedout", async(req,res) => {
    try{
        const checkedout = await checkout.findByIdAndUpdate(req.params.id, req.body,
            {
                new:true,
            });
            return res.status(200).send({checkedout});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});

app.delete("/checkedout/id:" ,async (req,res) => {
    try{
        const checkedout = await checkout.findByIdAndDelete(req.params.id);
        return res.status(200).send({checkedout});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
});

app.listen(2822, async () => {
    try{
        await connect ();
    }
    catch(err){
        console.log(err);
    }

    console.log("listening on port 2822");
});

