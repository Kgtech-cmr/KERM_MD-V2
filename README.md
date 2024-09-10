#        Ҝ乇尺爪 爪ᗪ ᐯ2

   <a>
                                      <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Jersey+20+Charted&size=30&pause=1000&color=F71515&width=435&lines=BOT+100%25+CAMEROUNAIS%E2%84%A2%EF%B8%8F" alt="Typing SVG" /></a>   
            
<p align="center"> 
<up A simple WhatsApp User Bot Coded By Rayan and Giffareno</u>
</p>
<p align="center">
<img src="https://telegra.ph/file/6368ad7db15fce6a4dfdb.jpg"/>       
<p align="center">
  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=EB+Garamond&weight=800&size=25&duration=4000&pause=1000&random=false&width=435&lines=+•__I'M+KERM-+MD__•;MULTI-DEVICE+WHATSAPP+BOT;DEVELOPED+BY+RAYAN+AND+GIFFAREO;RELEASED+DATE+07%2F7%2F2024."                               alt="Typing SVG" /></a>
</p> 
<p align="center">
<a href="#"><img title="Creator" src="https://img.shields.io/badge/Creator-KG_TECH-red.svg?style=for-the-badge&logo=github"></a>
</a>
</p>
<p align="center">
<a href="https://github.com/Kgtech-cmr"><img title="Author" src="https://img.shields.io/badge/KGTECH-black?style=for-the-badge&logo=Github"></a> <a href="https://chat.whatsapp.com/FpxvVBFOozA6IhNxIWhwFw"><img title="Author" src="https://img.shields.io/badge/CHANNEL-black?style=for-the-badge&logo=whatsapp"></a> <a href="https://wa.me/237656520674"><img title="Author" src="https://img.shields.io/badge/CHAT US-black?style=for-the-badge&logo=whatsapp">
<p/>
<p align="center">
<a href="https://github.com/Kgtech-cmr/KERM_MD-V2/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/Kgtech-cmr/KERM_MD-V2?color=white&style=flat-square"></a>
<a href="https://github.com/Kgtech-cmr/KERM_MD-V2/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Kgtech-cmr/KERM_MD-V2?color=yellow&style=flat-square"></a>
<a href="https://github.com/Kgtech-cmr/KERM_MD-V2/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/Kgtech-cmr/KERM_MD-V2?label=Watchers&color=red&style=flat-square"></a>
<a href="https://github.com/Janithsadanuwan/Queen-Nilu-Md/"><img title="Size" src="https://img.shields.io/github/repo-size/AlipBot/Api-Alpis?style=flat-square&color=darkred"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Janithsadanuwan/Queen-Nilu-Md/%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2304FF00&title=hits&edge_flat=false"/></a>
        <a href = ""><img alt="KermHack Tools" src="https://img.shields.io/youtube/channel/subscribers/UCjDKRYcwd5ZIpGICcVVL96Q" target="_blank" /></a>

### 1. FORK THIS REPO

<a href='https://github.com/Kgtech-cmr/KERM_MD-V2/fork' target="_blank"><img alt='Fork repo' src='https://img.shields.io/badge/Fork This Repo-black?style=for-the-badge&logo=git&logoColor=white'/></a>
<p align="center">

#### 𝐒𝐄𝐓𝐔𝐏


1.𝐆𝐄𝐓 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃 𝐅𝐑𝐎𝐌 𝐒𝐄𝐑𝐕𝐄𝐑

<a href="https://kerm-session-2c65.onrender.com/pair"><img src="https://img.shields.io/badge/PAIR_CODE-blue" alt="Click Here to Get Pair-Code" width="110"></a>   

<a href="https://kerm-session-2c65.onrender.com/wasiqr"><img src="https://img.shields.io/badge/QR CODE-green" alt="Click Here to Get QR-Code" width="90"></a> 

## How To Deploy On Github.
* [![YOUTUBE](https://img.shields.io/badge/HOW_TO_DEPLOY-red?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/T77rQM7Nk5k?si=gg-LJxS6vC6kBEpJ)

• Create a new file [`.github/workflows/deploye.yml`] After created, copy this code👇🏽and paste it there
```yml
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */24 * * *'  # Relance toutes les 6 heures

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.18.0]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 50590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
```
#### DEPLOY TO HEROKU 

1. If You don't have a account in Heroku. Create a account.
    <br>
<a href='https://heroku.com' target="_blank"><img alt='Replit' src='https://img.shields.io/badge/-Create-black?style=for-the-badge&logo=heroku'/></a>
   <br>
2. Now Deploy
    <br>
<a href='https://heroku.com/deploy?template=https://github.com/Kgtech-cmr/KERM_MD-V2' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=heroku'/></a>

#### DEPLOY TO KOYEB 

1. If You don't have a account in koyeb. Create a account.
    <br>
<a href='https://app.koyeb.com/auth/signup' target="_blank"><img alt='koyeb' src='https://img.shields.io/badge/-Create-black?style=for-the-badge&logo=koyeb'/></a>

2. Get [Koyeb api key](https://app.koyeb.com/account/api)

4. Now Deploy
    <br>
<a href='https://app.koyeb.com/services/deploy?type=git&repository=https://github.com/Kgtech-cmr/KERM_MD-V2&branch=main&name=xbotmd&builder=dockerfile&env[SESSION_ID]=%20&env[WORK_TYPE]=private&env[HANDLER]=.&env[BOT_INFO]=KERM_MD-V2;ASWIN%20SPARKY;https://i.imgur.com/QH7T7u9.jpeg&env[SUDO]=237656520674,237650564445&env[STICKER_DATA]=KG TECH&env[DATABASE_URL]' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=koyeb'/></a>

#### DEPLOY ON RAILWAY

1. If You don't have a account in Railway. Create a account.
    <br>
<a href='https://railway.app' target="_blank"><img alt='Replit' src='https://img.shields.io/badge/-Create-black?style=for-the-badge&logo=railway'/>
2. Now Deploy
    <br>
<a href='https://railway.app' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=railway'/></a>

#### DEPLOY ON MOGENIUS

1. If You don't have a account in Replit. Create a account.
    <br>
<a href='https://mogenius.com' target="_blank"><img alt='Replit' src='https://img.shields.io/badge/-Create-black?style=for-the-badge&logo=genius'/></a>
2. Now Deploy
    <br>
<a href='https://mogenius.com' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=genius'/></a>

  **Do not forget to give a star⭐️ please**

### A special thank to

<details close>
<summary>Read More</summary>

<br>

* [`TOGE SASAKI`](https://github.com/toge012345)
* [`ARTHUR SASAKI`](https://github.com/Alp24ni)
* ## Contact Dev of KERM🤪
* [`RAYAN`](https://wa.me/237656520674?text=Hi+Bro+Rayan+Big+Fan😍)
* [`GIFFARENO`](https://wa.me/237650564445?text=Hi+Bro+Giffareno+Big+Fan😍)
 </details>
 
