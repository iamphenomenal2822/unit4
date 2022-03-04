const express = require("express");
const app = express();

// console.log(app);

app.get("/users", function(req,res){
    console.log("Hello");
    res.send("Hello");
});

app.get("/books", function(req,res){
    res.send([
        {The_Fault_in_Our_Stars : "Hazel Grace Lancaster, a 16-year-old with thyroid cancer that has spread to her lungs, attends a cancer patient support group at her mother's behest. At one meeting, Hazel meets a 17-year-old boy currently in remission named Augustus Waters, whose osteosarcoma caused him to lose his right leg. Augustus is at the meeting to support Isaac, his friend who has eye cancer. Hazel and Augustus strike a bond immediately and agree to read each other's favorite novels. Augustus gives Hazel The Price of Dawn, and Hazel recommends An Imperial Affliction, a novel about a cancer-stricken girl named Anna that parallels Hazel's own experience."},
        {Believe_What_Life_and_Cricket_Taught_Me_Paperback : "Believe, Sachin Tendulkar told him - and he took it to heart, getting the word etched on his arm as a tattoo. In this book, Suresh Raina takes us through the challenges he faced as a young cricketer. He was bullied in school and at cricket camps, but he always punched above his weight, overcoming every adversity life threw at him and never giving up. This is the story of the lessons he learnt and the friendships he built. Peppered with invaluable insights - about the game and about life - that Raina acquired from senior colleagues like M.S. Dhoni, Rahul Dravid, Anil Kumble, Sachin Tendulkar and Sourav Ganguly, among others, this book will make you believe in the power of hard work, love, luck, hope and camaraderie. It is a journey through the highs and lows in the cricketing career of a man who saw his world fall apart and yet became one of the most influential white-ball cricketers India has ever seen."},
        {Something_I_Never_Told_You : "When in love, you tend to take each other for granted, and sometimes, that can cost you a lifetime of togetherness . . . Ronnie knew that his first crush was way out of his league, and yet he pursued and wooed Adira. Shyly and from a distance in the beginning, and more persuasively later. He couldn't believe it when the beautiful Adira actually began to reciprocate, falling in love with him for his simplicity and honesty."},
        {Black_Holes_The_Reith_Lectures : "In these flagship lectures the legendary physicist argued that if we could only understand black holes and how they challenge the very nature of space and time, we could unlock the secrets of the universe."}
    ]);
});

app.listen(5500, () => {
    console.log("listening on port 5500");
});