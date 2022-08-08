let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}
let PlayerMoves = {
    calcAttack: function () {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        // PLAYER ATTACK VALUES

        let playerAttack = function () {
            let calcBaseDamage;

            if (player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000;
            } else {
                calcBaseDamage = player.strength * player.agility / 1000;

            }

            let OffsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + OffsetDamage;
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        // ENEMY ATTACK VALUES

        let enemyAttack = function () {
            let calcBaseDamage;

            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
            } else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000;

            }

            let OffsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + OffsetDamage;
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        // TAKING DOCUMENT INNER HTML

        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        // INITIATING ATTACKS IF PLAYER IS FASTER THAN ENEMY

        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {
                alert("You win! refresh browser to play again.");
                getPlayerHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; ' + player.health;
                getEnemyHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; 0';
                getEnemyHealth.style.backgroundColor = "red";
                getPlayerHealth.style.backgroundColor = "green";
                
            } else {
                getEnemyHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; ' + enemy.health;
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert(enemy.enemyType + " hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("You lose! refresh browser to play again.");
                    getEnemyHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; ' + enemy.health;
                    getPlayerHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; 0';
                    getEnemyHealth.style.backgroundColor = "green";
                    getPlayerHealth.style.backgroundColor = "red";
                } else {
                    getPlayerHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; ' + player.health;
                }
            }

            // IF ENEMY IS FASTER THAN PLAYER

        } else if (getPlayerSpeed < getEnemySpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert(enemy.enemyType + " hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            if (player.health <= 0) {
                alert("You lose! refresh browser to play again.");
                getEnemyHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; 0';
                getEnemyHealth.style.backgroundColor = "green";
                getPlayerHealth.style.backgroundColor = "red";
            } else {
                getPlayerHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; ' + player.health;
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                if (enemy.health <= 0) {
                    alert("You win! refresh browser to play again.");
                    getPlayerHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; ' + player.health;
                    getEnemyHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; 0';
                    getEnemyHealth.style.backgroundColor = "red";
                    getPlayerHealth.style.backgroundColor = "green";
                } else {
                    getEnemyHealth.innerHTML = 'Health&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; ' + enemy.health;
                }
            }
        }
    }
}