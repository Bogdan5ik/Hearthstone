let getRandom = function(){
			let rond = Math.round(Math.random() * 10);
			return rond;
		}


		let player = {
			name : "player",
			img : "images/1.png",
			hp : getRandom(),
			damage : getRandom()
	    }
		let enemy = {
			name : "enemy",
			img : "images/2.png",
			hp : getRandom(),
			damage : getRandom()
		}

		document.querySelector('.player_name').innerHTML = player.name;
	document.querySelector('.player_img').style.backgroundImage = `url(${player.img})`;
	document.querySelector('.player_hp').innerHTML = player.hp;
	document.querySelector('.player_damage').innerHTML = player.damage;

	document.querySelector('.enemy_name').innerHTML = enemy.name;
	document.querySelector('.enemy_img').style.backgroundImage = `url(${enemy.img})`;
	document.querySelector('.enemy_hp').innerHTML = enemy.hp;
	document.querySelector('.enemy_damage').innerHTML = enemy.damage;


	setTimeout(function(){
		dmg1 = player.damage;
		dmg2 = enemy.damage;
		
		hp1 = player.hp;
		hp2 = enemy.hp;

		hp2 -= dmg1;
		hp1 -= dmg2;

		document.querySelector('.player_hp').innerHTML = hp1;
		document.querySelector('.enemy_hp').innerHTML = hp2;

		if(hp1 > hp2){
			alert("Игрок победил!")
			document.querySelector('.enemy').style.opacity = "0";
		} else if(hp2 > hp1){
			alert("Враг победил")
			document.querySelector('.player').style.opacity = "0";
		} else if(hp1 = hp2){
			alert("Ничья")
		}
		
	}, 5000)