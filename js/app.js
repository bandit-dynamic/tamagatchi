

document.addEventListener("DOMContentLoaded", function() {
    // console.log("hello world")

    // create buttons
    const sleepBtn = document.querySelector("#action-sleep");
    const feedBtn = document.querySelector("#action-feed");
    const playBtn = document.querySelector("#action-play");
    const nightModeOffBtn = document.querySelector("#nightmode-off")
    const nightModeOnBtn = document.querySelector("#nightmode-on");
    const startBtn = document.querySelector("#action-menu-start-game");
    const settingsBtn = document.querySelector("#action-menu-settings");
    const settingsBackBtn = document.querySelector("#action-settings-back");
    const difHardBtn = document.querySelector("#action-settings-difficulty-hard");
    const difNormalBtn = document.querySelector("#action-settings-difficulty-normal");
    const difEasyBtn = document.querySelector("#action-settings-difficulty-easy");


    // main bar
    const sleepHp = document.querySelector("#sleep-hp");
    const hungerHp = document.querySelector("#hunger-hp");
    const playHp = document.querySelector("#play-hp");
    const scoreBar = document.querySelector("#score");


    //Game settings
    const maxSleep = 300;
    const maxHunger = 300;
    const maxPlay = 300;

    let day = 20;

    //New object
    function Tamagotchi() {
        this.sleep = maxSleep;
        this.hunger = maxHunger;
        this.play = maxPlay;
    }
    
    //Abilities
    Tamagotchi.prototype.actionSleep = function() {
        this.sleep+=40 / (day * 2)
    };
    
    Tamagotchi.prototype.actionEat = function() {
        this.hunger+=120 / (day * 2)
    };
    
    Tamagotchi.prototype.actionPlay = function() {
        this.play+=80 / (day * 2)
    };
    
    Tamagotchi.prototype.tick = function() {
        this.sleep--;
        this.hunger-=3;
        this.play-=2;
    };
    
    let tmgch = new Tamagotchi();
    let sleepHpCount;
    let hungerHpCount;
    let playHpCount;
    let score = 0;
    
    //Controllers
    sleepBtn.addEventListener("click", function() {
        tmgch.actionSleep();
    });
    
    feedBtn.addEventListener("click", function() {
        tmgch.actionEat();
    });
    
    playBtn.addEventListener("click", function() {
        tmgch.actionPlay();
    });
    
    startBtn.addEventListener("click", function() {
        startGame();
    });
    
    settingsBtn.addEventListener("click", function() {
        settingsMenu();
    });
    
    difHardBtn.addEventListener("click", function() {
        day = 5;
        document.querySelector("#difSet").innerHTML = "Hard";
    });
    
    difNormalBtn.addEventListener("click", function() {
        day = 20;
        document.querySelector("#difSet").innerHTML = "Normal";
    });
    
    difEasyBtn.addEventListener("click", function() {
        day = 40;
        document.querySelector("#difSet").innerHTML = "Easy";
    });
    
    settingsBackBtn.addEventListener("click", function() {
        MainMenu();
    });
    
    nightModeOffBtn.addEventListener("click", function() {
        nightModeOff();
    })
    
    nightModeOnBtn.addEventListener("click", function() {
        nightModeOnBtn();
    })

    // NightMode toggle
    function nightModeOn() {
        document.querySelector('body').classList.add("nightmode-on");
        document.querySelector('#nightmode').innerHTML = "on";
    }

    function nightModeOff() {
        document.querySelector('body').classList.remove("nightmode-on");
        document.querySelector('#nightmode').innerHTML = "off";
    }


    //Togglers for buttons
    document.querySelector(".game-screen").classList.toggle("hide");
    document.querySelector(".menu-screen-settings").classList.toggle("hide");
    
    function MainMenu() {
        document.querySelector(".menu-screen-settings").classList.toggle("hide");
        document.querySelector(".main-menu-screen").classList.toggle("hide");
    }
    
    function settingsMenu() {
        document.querySelector(".main-menu-screen").classList.toggle("hide");
        document.querySelector(".menu-screen-settings").classList.toggle("hide");
    }
    
    function startGame() {
        document.querySelector(".game-screen").classList.toggle("hide");
        document.querySelector(".main-menu-screen").classList.toggle("hide");

        //Tamagatchi's name
        const tamagatchiName = prompt("Please, enter a name of your tamagatchi:", "");
        //   document.querySelector("#name").innerHTML = tamagatchiName;
        if (tamagatchiName == null || tamagatchiName.replace(/\s/g, '') == "") {
            tamagatchiName = "Tamagatchi";
            document.querySelector("#name").innerHTML = tamagatchiName;
        }
        alert(`Your tamagatchi alien's name is ${tamagatchiName}`);
        }
        //Start game
        core();
        let coreUpdate = setInterval(core, 30 * day);
    
        //Main function of tamagotchi
        function core() {
            sleepHpCount = (tmgch.sleep / maxSleep * 30).toFixed(2);
            hungerHpCount = (tmgch.hunger / maxHunger * 30).toFixed(2);
            playHpCount = (tmgch.play / maxPlay * 30).toFixed(2);
    
            //Scores
            score++;
            scoreBar.innerHTML = score;
    
            //Death ability
            
            let death= document.querySelector("#ellen-ham")
            if ((playHpCount <= 0) || (sleepHpCount <= 0) || (hungerHpCount <= 0)) {
                playHpCount = 0;
                sleepHpCount = 0;
                hungerHpCount = 0;
                clearInterval(coreUpdate);
                document.querySelector("#ellen-ham").src="https://64.media.tumblr.com/d87139bc126ba73e715d215914ddbbd1/tumblr_odo8oo2b3H1qdhps7o4_r1_250.gif" 
                alert(`Your score is ${score}, your tamagatchi alien is dead, and you failed to spread throughout the galaxy`);
            } 
    
            //transformation gifs
 
            let born= document.querySelector("#alien-egg")
            let alienEgg = document.querySelector("#alien-egg")
            let alienBurster = "#alien-burster"
            let alienQueen = "#alien-queen"

            setTimeout (() => {
            // alert("Your alien tamagatchi pet is a face hugger!")
                born.visibility = 'visible'
            }, 10000)

            setTimeout (()=> {
                born.src="https://media.tenor.com/TxZdT5_swY0AAAAM/chestbuster-aliens.gif"
                born.visibility = 'visible'
            }, 20000)

            setTimeout (()=> {
                born.src= "https://media.tenor.com/aCzTFgsn5qUAAAAC/aliens-xenomorph-queen.gif"
                born.visibility = 'visible'
            }, 30000)

            setInterval(() => {
                const x = Math.floor(Math.random() *10)
                const y = Math.floor(Math.random() * -4)
                alienEgg.style.transform = `translate(${x}px,${y}px)`;
            },1000)


            


            //Max health percentage
            if (tmgch.sleep >= (maxSleep + (maxSleep / 50 * 20))) {
                tmgch.sleep = maxSleep + (maxSleep / 50 * 20);
            }
    
            if (tmgch.hunger >= (maxHunger + (maxHunger / 50 * 20))) {
                tmgch.hunger = maxHunger + (maxHunger / 50 * 20);
            }
    
            if (tmgch.play >= (maxPlay + (maxPlay / 50 * 20))) {
                tmgch.play = maxPlay + (maxPlay / 50 * 20);
            }
    
            //Max health percentage (for player)
            if ((tmgch.sleep / maxSleep * 50) > 50) {
                sleepHpCount = 100;
            }
            if ((tmgch.hunger / maxHunger * 50) > 50) {
                hungerHpCount = 100;
            }
            if ((tmgch.play / maxPlay * 50) > 50) {
                playHpCount = 50;
            }
    
            //Show HP on screen
            sleepHp.innerHTML = sleepHpCount;
            hungerHp.innerHTML = hungerHpCount;
            playHp.innerHTML = playHpCount;
    
            //Remove HP every tick
            tmgch.tick();
            }


})