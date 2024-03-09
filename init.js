const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = [{
        from: "Jaideep",
        to: "Adhithya",
        msg: "Hey! How are you?",
        created_at: new Date()
    },
    {
        from: "Jaideep",
        to: "Nishant",
        msg: "Hey! Lunch bodchii",
        created_at: new Date()
    },
    {
        from: "Adhithya",
        to: "Nischi",
        msg: "Hey! Wanna go out?",
        created_at: new Date()
    },
    {
        from: "Urvy",
        to: "Jaideep",
        msg: "Goodu Morning Jay",
        created_at: new Date()
    }
]

Chat.insertMany(allChats);