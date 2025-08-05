const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtvMEdPVkJiTWlzeHVGVjRySjNNRXVqeEQxaTY0T3ZnVkNtKzRPYW5uUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3J3V0x3YkdLb2pkUzlwR0R6SDFnMWVybjA3ZVlBMXlWTVVWcERQRTJoYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRXNHdkRDanhxdVZvTlBzZXRwV0NvR2x2R0RaSXlzSnlDMDFMQlo0VjJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLYlN2SmxlNUlGaUlQVXc1eGxZVG9Oc3AwVlN4V2ovSmZwbWhsNmR3MzBjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHQ2dhSU9TYlQ4YzUrMCtEWk51OGxiTmJWcE1DM0NKK0kxUzFpcU42Rkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklmVXZyd3dtQ1lTRGgzYjZwbG1ZOEdxdU05SnFiVkRlTytLeHRPdXhtVms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkExaG9XcG9vR3k1RlZiNnUrRURJbHBVL1dMb0NnZDdFeTVzMGFNSmdGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXZNamFPZXQ1eTJLbnJNSEhqcFVQaXBibGR6NVI0bWRvU1JiM3FyVG56az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU0NkxHeW1JSmxQT2ZMN2s0MzhkT2xxSkRESVpTSmhORUVYUFBSWkZ0UmYzdkZSczBlMzR6VXJBL3FrOXlSOFJTOEFPWkJXN25LeEswSUpsZDV3TUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IlBhcjJicm1pZDM0U0FoSEk2S05CRzZZaUMySXg5ZGJjM0RnY0hPTHh3V3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjY0VFJSR0VQIiwibWUiOnsiaWQiOiI5MTg4ODI4Mjk5ODI6NjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4qS5IPCdkIPEscSxzITMhOGDp/CdnbDNoPCdnbbwnZiAxKYgINmB2LHZkNuM2Kgg2K/bjNmI2Y7Yp9mG2q/bjCDiuJlcblxuXG5cblxuXG5cblxuXG5cblxuXG7wnZCD8J2fhPCdn4TPiWHGnmHipLhcblxuXG5cblxuXG5cblxuXG5cblxu4qS56q2XyZzipLgiLCJsaWQiOiIyMzU1ODQ4Mjg3MDM0Njo2MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0szcjZwOEJFTXFNeWNRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRkbEtDV25MdkdUTmMrTWl0S244dGFLNWRuUklNc2dRMEFTRnh3NHdHM2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlEvOHVCazU3T2JkSzUzdDdHbTBWeStxN2xjMm41ejR3OFMyejhVTGZpTVZjZEF3dTZLLzNnLzNVMC9pczl1YVl1T3lXUktkY25PNUwrbnlRclVUaURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzQkxzVGlZOU53VVJ3V242UG1McXZ1bkdhVzRGTGZUME1hR1FpTDR4V1NYUi84UElQNmdobyt2UkpKUFdUMmZRSDd2aklUbVR1N1c5bUtyREdGdTFBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxODg4MjgyOTk4Mjo2MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlSFpTZ2xweTd4a3pYUGpJclNwL0xXaXVYWjBTRExJRU5BRWhjY09NQnQzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0MTY3MTcsImxhc3RQcm9wSGFzaCI6IjJNRktQUSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*deĸн yar тera ѕтaтυѕ deĸнne ĸe lιye ĸιтna eхιтed raнтa нυ💓🤌🏻🫀*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "˹ 𝐃𝙚𝙫 ✘ 𝐁𝗼ʈ ˼",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "˹ 𝐃𝙚𝙫 ✘ 𝐁𝗼ʈ ˼",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,🫀,💓",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "918882829982",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝐃⃗𝝸𝝼̻𝞅𝝰͠𝝶𝛅ʜ 𝐃𝝴͡𝝴͢𝞈𝝰͠𝝶𝝰 l*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ D3V'X Bᴏᴛ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/xgaahm.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> 𝐓єяє 𝐈ѕнգє мє  ❫❮αнιи 𝐁нι  ❫❮ι∂єя 𝐁нι👸🏻🫀🎚️",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "918882829982",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
