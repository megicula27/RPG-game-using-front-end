let GameManager = {
    SetGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType){
        switch (classType) {
            case 'Urza':
                player = new Player(classType , 180 , 0 , 200 , 70 , 50);
                break;

            case 'Tefari':
                player = new Player(classType , 180 , 0 , 150 , 80 , 120);
                break;

            case 'Karn':
                player = new Player(classType , 180 , 0 , 200 , 75 , 50);
                break;
                
            case 'Sorin Markov':
                player = new Player(classType , 200 , 0 , 80 , 125 , 100);
                break;

            case 'Nissa Revane':
                player = new Player(classType , 180 , 125 , 80 , 120 , 50);
                break;     
           
        }
        
        // let gettempHeader = document.querySelector(".header").style.gridArea = "header";
        // let gettempAction = document.querySelector(".action").style.gridArea = "action";
        // let gettempArena = document.querySelector(".arena").style.gridArea = "arena";
        // let gettempEnemy = document.querySelector(".enemy").style.gridArea = "enemy";
        let getInterface = document.querySelector(".interface");
        let getEnemy1 = document.querySelector(".enemy");
        // let getWrapper   = document.querySelector(".wrapper");
        document.body.style.backgroundColor = "black";
        
        // getWrapper.style.gridTemplateColumns ="1fr 1fr 1fr 1fr 1fr 1fr";
        // getWrapper.style.gridTemplateRows ="1fr 1fr 1fr";
        // getWrapper.style.gridTemplateAreas ='"header header header header header header" "interface interface arena arena enemy enemy" ". . action action . ."'; 


        getInterface.style.width = "30vw";
        getInterface.innerHTML = '<img src = "/heroes/'+classType.toLowerCase()+'.jpg" class = "img-avatar" style = "width : 30vw; margin : 0px; height : 17.5vw;"><div class ="container" ><h3>'+classType+
        '</h3><p class = "health-player">Health&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;'+player.health +
        '</p><p>Mana&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ player.mana +
        '</p><p>Strength&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;'+ player.strength +
        '</p><p>Agility&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;'+ player.agility +
        '</p><p>Speed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;'+ player.speed +'</p></div>' ;

        
        getEnemy1.innerHTML = '<img src = "/Enemy/unknown.jpg" class = "img-avatar" style = "width : 20vw; margin : 0px;"><div class ="container" ><h3>Unknown</h3><p class = "health-player">Health&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;?</p><p>Mana&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;?</p><p>Strength&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;?</p><p>Agility&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;?</p><p>Speed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;?</p></div>' ;

        
    },
    setPreFight: function(){

        let getHeader = document.querySelector(".header");
        let getAction = document.querySelector(".action");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p style="color : red; border-bottom : 2px solid red; width : 25vw; margin : 0 auto; padding-bottom : 10px;">Task : Find An Enemy!</p>';
        
        getAction.innerHTML = '<a href="#" onclick="GameManager.setFight()">Search Enemy!</a>'

        getArena.innerHTML = '<img src = "/loading.gif" class = "arena-img">';
    },
    setFight: function(){

        let getHeader = document.querySelector(".header");
        let getAction = document.querySelector(".action");
        let getEnemy  = document.querySelector(".enemy");
        let getArena = document.querySelector(".arena");


        let enemy00 = new Enemy("Eldrazi", 120 , 0 , 110, 100, 100);
        let enemy01 = new Enemy("Heloid", 150 , 0 , 100, 130, 50);
        let enemy02 = new Enemy("Nahiri", 150 , 0 , 160, 75, 50);
        let enemy03 = new Enemy("Nicol Bolas", 200 , 0 , 100, 110, 50);
        let enemy04 = new Enemy("Tezzeret", 200 , 0 , 200, 60, 60);

        let randomNumber = Math.floor(Math.random() * Math.floor(5));
        
        switch (randomNumber) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
            case 4:
                enemy = enemy04;
                break;

           }

           getHeader.innerHTML = '<p style = "color : red; width :25vw; margin : 15px auto 40px auto; padding-bottom : 10px; border-bottom : 2px solid red;">Choose your move!</p>';
           getAction.innerHTML = '<a href = "#" onclick = "PlayerMoves.calcAttack()">Attack!</a>';
           getArena.innerHTML = '<img src = "/arena.jpg" class = "arena-img2">';
           getEnemy.innerHTML = '<img src = "/enemy/'+ enemy.enemyType +'.jpeg" alt = "'+ enemy.enemyType +' class="enemy-img"><div><h3>'+ enemy.enemyType +'</h3><p class="health-enemy">Health&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; '+enemy.health +
           '</p><p>Mana&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;'+ enemy.mana +
           '</p><p>Strength&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;'+ enemy.strength +
           '</p><p>Agility&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;'+ enemy.agility +
           '</p><p>Speed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;'+ enemy.speed +'</p></div>' ;
           
    }
}