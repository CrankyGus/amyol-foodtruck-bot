const {Client, Intents} = require('discord.js')
require('dotenv').config()




const random = () =>{
    return Math.floor(Math.random()*30)
}

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES
        ]
    }
)

client.on('ready',()=>{
    console.log('your bot is ready!')
})

client.on('messageCreate',msg=>{
    let listItem = [
        "ข้าวมันไก่",
        "ข้าวหมูแดง",
        "ข้าวกะเพราไก่",
        "ขนมจีนน้ำยา",
        "ข้าวไข่เจียว",
        "ข้าวกะเพราหมู",
        "KFC",
        "แมคโดนัลด์",
        "เบอร์เกอร์คิง",
        "ก๋วยเตี๋ยวต้มยำ",
        "ก๋วยเตี๋ยวน้ำตก",
        "ก๋วยเตี๋ยวน้ำใส",
        "ข้าวกะเพราหมูกรอบ",
        "ก๋วยจั๊บ",
        "ก๋วยจั๊บญวน",
        "กระเพาะปลา",
        "ข้าวกะเพราไก่กรอบ",
        "ข้าวไข่เจียว",
        "ข้าวไข่ข้น",
        "ข้าวกะเพราเครื่องใน",
        "หมูแดดเดียว",
        "ข้าวยำไก่แซ่บ",
        "ส้มตำไทย",
        "ส้มตำปู",
        "ส้มตำปูปลาร้า",
        "ปีกไก่คั่วพริกเกลือ",
        "ผัดไทย"
    ]
    if(msg.content == "กินอะไรดี"){
        msg.reply(listItem[random()])
    }else if(msg.content == "กินไรดี"){
        msg.reply(listItem[random()])
    }
    else if(msg.content == "หิวข้าวจัง"){
        msg.reply(listItem[random()])
    }
    else if(msg.content == "โอ้ยกินไรดี"){
        msg.reply(listItem[random()])
    }
    else if(msg.content == "กีอะไรดิน"){
        msg.reply(listItem[random()])
    }
    else if(msg.content == "กีไรดิน"){
        msg.reply(listItem[random()])
    }
    else if(msg.content == "หิว"){
        msg.reply(listItem[random()])
    }
    else if(msg.content == "โง่"){
        msg.reply("ให้ถามว่ากินไรดีไอเหี้ย")
    }
    else if(msg.content == "ไม่อยากกิน"){
        msg.reply("สนใจรับเป็นส้นตีนแทนไหมครับ")
    }
})

client.login(process.env.TOKEN)