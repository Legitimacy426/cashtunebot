import { Telegraf } from "telegraf";



const bot = new Telegraf('5629218193:AAGz7acRcsfnEbXW2P-8bLctSqK7ZCYc-Z0')



const run = () => {
    bot.start(c => {
        begin(c)
      
       })
       // functions
       
    const begin = (c) => {
           console.log(c.message.from.username)
           c.reply(`
Hello there ${c.message.from.username}
Nice to meet you I am ${c.botInfo.username}
Type any of these commands to interact with me
###############################
start - to start a new session 
tasks - see all the tasks that I perform
version - get my current version
################################
       
           `)
       }
       const back = (c) => {
           c.answerCbQuery('')
         
       }
       
       
       // commands 
       bot.hears('start', c => {
           begin(c)
         
       })
       
       bot.hears('tasks', c => {
           c.telegram.sendMessage(c.chat.id, 'TASKS', {
               reply_markup: {
                   inline_keyboard: [
                      [{text:"Bisiness Ads",callback_data:'ads'}],
                      [{text:"Socials",callback_data:'socials'}],
                      [{text:"Bots",callback_data:'bots'}],
                      [{text:"Crypto",callback_data:'crypto'}],
                      [{text:"Back",callback_data:'back'}],
                  ]
              }
          })
       })
       bot.hears('version', (c) => {
           c.reply('I am currently at version 1')
         
       })
       
       // actions
       bot.action('ads', c => {
           c.answerCbQuery('ads')
           c.reply(`
#################################################
I do business advertisements 
If you have a business and want to be advertised 
contanct my creator to shortlist your business here
Ultimatley you can contact t.me/Dr_Adams to create you a custom bot like me that will advertise your business
#################################################
           `)
        
         
       })
       
       // socials
        
       bot.action('socials', c => {
           c.answerCbQuery('ads')
           c.reply(`
           #####################################
I can advertise your social media handles including :
Instagram.com
YouTube.com
Twitter.com
Tiktok.com
##############################
You can as well contact t.me/Dr_Adams to create you a custom bot for your social media accounts
           `)
          
         
       })
       bot.action('crypto', c => {
           c.answerCbQuery('crypto')
           c.reply(`
#####################################
Cryptocurrency bots comming soon ...
Trading bots etc
##########################################
         
           `)
         
       
       })
       bot.action('bots', c => {
           c.answerCbQuery('bots')
           c.reply(`
#####################################
I create custom telegram bots like me & Twitter auto liker bots
##########################################
You can as well contact t.me/Dr_Adams to create you a custom bot 
           `)
         
       
       })
        
       bot.action('back', c => {
           back
       })
       
       
       bot.use((c) => {
           c.reply('Unfortunatley I did not get your command')
           begin(c)
         
       })
    bot.launch()
    console.log('running')
   
}

run()