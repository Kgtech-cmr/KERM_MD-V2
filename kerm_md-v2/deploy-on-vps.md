## Deploy on VPS or PC.
- You need to Install git,ffmpeg,curl,nodejs,yarn with pm2 
   1. Install git ffmpeg curl 
      ```
       sudo apt -y update &&  sudo apt -y upgrade 
       sudo apt -y install git ffmpeg curl
      ```
   2. Install nodejs 
      ```
      sudo apt -y remove nodejs
      curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
      ```

   3. Install yarn
      ```
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
      sudo apt -y update && sudo apt -y install yarn
      ```

   4. Install pm2
      ```
      sudo yarn global add pm2
      ```

   5. Clone Repo and install required packages
      ```
      git clone https://github.com/Kgtech-cmr/KERM_MD-V2
      cd KERM_MD-V2 npm cd
      yarn install --network-concurrency 1
      ```

   6. Create an env file for ENV. 
      ```
      touch config.env
      nano config.env
      ```
      copy paste lines below.

      ```
      OWNER_NUMBER="237656520674"
      MONGODB_URI=mongodb+srv://rahul:rahul@cluster0.ik98tiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      SESSION_ID = "ID-here"
      THUMB_IMAGE = "https://telegra.ph/file/40ffc2a288542560c887c.jpg"
      port = 5000
      email = "Kermd237@gmail.com"
      global_url = "https://www.instagram.com/_________rahul004_________?igsh=MTYyNWVmejAwejN1aA=="
      OWNER_NAME = "☞⌜ KG TECH⌝☜"
      READ_MESSAGE = false
      PREFIX = .
      WARN_COUNT = 3
      DISABLE_PM = false
      ANTI_BAD_WORD = "fuck"
      LEVEL_UP_MESSAGE= true
      WELCOME_MESSAGE =  "*Hi,* @user \n*Welcome in* @gname \n*Member count* : @count th"
      THEME= KERM_MD-V2
      WORKTYPE = public
      PACK_NAME = "Kerm-MD-V2"
      ANTILINK_VALUES = "chat.whatsapp.com"
      
      ```
      ctrl + o and ctrl + x, To save and exit

   7. start and stop bot

      To start bot ``` npm start ```,
      To stop bot ``` npm stop ```
