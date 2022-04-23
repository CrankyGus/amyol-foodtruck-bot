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
    
    if(msg.content == "กินอะไรดี" || msg.content == "กินไรดี" || msg.content == "หิวข้าวจัง" || msg.content == "โอ้ยกินไรดี" || msg.content == "กีอะไรดิน" || msg.content == "กิน" ){
        msg.reply(listItem[random()])
    }else if(msg.content == "หิว" || msg.content == "หิวจัง" || msg.content == "หิวว่ะ" ){
        msg.reply("ลองกิน"+listItem[random()]+"ดูสิ")
    }

})

client.login(process.env.TOKEN)







// Add menu here


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
    "ผัดไทย",
    "ตำข้าวโพด",
    "กระเพราเป็ด",
    "หมูผัดไข่",
    "ต้มเล้ง",
    "Subway",
    "โจ๊กหมู",
    "โจ๊กไก่",
    "ต้มเลือดหมู",
    "เกาเหลา",
    "หมูกระทะ",
    "MK",
    "You & I",
    "ชาบู",
    "สุกี้น้ำ",
    "สุกี้แห้ง",
    "เกี๊ยวซ่า",
    "ยำหมูยอ",
    "ข้าวเซเว่น",
    "ปลากระป๋อง",
]