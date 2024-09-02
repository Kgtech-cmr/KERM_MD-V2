import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` 📚 _وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ_\n_wa\'alaikumussalam wa\'rahmatullahi wa\'barakatuh_\n
*The person who greets with this salutation will receive 30 rewards. Then, the person in front of them or who hears the greeting responds with the same phrase, 'and peace be upon you and the mercy and blessings of Allah' or can add other words (wariidhwaana). This means that in addition to the prayer for safety, one also asks for Allah's blessings."\n\nUrdu Translation:\n جو شخص اس سلام کے ساتھ جواب دیتا ہے، اسے تقریباً 30 اجر حاصل ہوتے ہیں۔ پھر، جو شخص اس کے سامنے ہوتا ہے یا جو اسے سنتا ہے، اسی فقرے کے ساتھ جواب دیتا ہے جیسے وعلیکم السلام ورحمة الله وبركاته یا کسی دوسرے الفاظ کو شامل کرتا ہے (وریدھوانا)۔ اس کا مطلب یہ ہے کہ سلامتی کی دعا کے علاوہ، آپ اللہ سے برکتیں بھی مانگتے ہیں۔"* `
await conn.reply(m.chat, info, m)
return conn.sendMessage(m.chat, {
          react: {
            text: '🤝🏼',
            key: m.key,
          }})
}
handler.customPrefix = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i
handler.command = new RegExp

export default handler

