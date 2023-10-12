list_of_names = [
    "Nicolas le",
    "Teemo le",
    "Glados le",
    "Woody le",
    "George le ",
    "Adam le",
    "Chloé la",
    "Géraldin le",
    "Huguette la",
    "René le"
]

list_of_caracteristics = [
    "Curieux(se)",
    "Fougeux(se)",
    "Social(e)",
    "Marrant(e)",
    "Humble",
    "Zen",
    "Sanguin(e)",
    "Mélomane",
    "Leader(euse)",
    "Pacificateur(trice)"
]



class Survivant {
    constructor(name, death, damage, dying_and_damage) {
        this.name = name
        this.death = death
        this.damage = damage
        this.dying_and_damage = dying_and_damage
    }


}

function name_randomizer(name, nickname) {
    return name[Math.floor(Math.random()*name.length)] + " " + nickname[Math.floor(Math.random()*nickname.length)]
}

let survivant1 = new Survivant(name_randomizer(list_of_names, list_of_caracteristics), 0.4, 0.5, 0.1)
let survivant2 = new Survivant(name_randomizer(list_of_names, list_of_caracteristics), 0.3, 0.4, 0.3)
let survivant3 = new Survivant(name_randomizer(list_of_names, list_of_caracteristics), 0.2, 0.5, 0.3)
let survivant4 = new Survivant(name_randomizer(list_of_names, list_of_caracteristics), 0.3, 0.2, 0.5)
let survivant5 = new Survivant(name_randomizer(list_of_names, list_of_caracteristics), 0.7, 0.1, 0.2)


let survivant_list = [
    survivant1,
    survivant2,
    survivant3,
    survivant4,
    survivant5
]

survivant_list.forEach(element => {
    console.log(element)
});

//console.log(".")
//console.log(survivant_list[0].damage)

let death_list = []



function game(survivors) {

    let jason_life = 100

    while (jason_life > 0 && survivors.length > 0) {

        let luck = Math.random()

        random_survivor = Math.floor(Math.random()*survivors.length)

        let min_stat = survivors[random_survivor].death
        let max_stat = survivors[random_survivor].death
        //let mid_stat = survivors[random_survivor].death

        for (const key in survivors[random_survivor]) {

            if (survivors[random_survivor][key] % 1 !== 0) {

                if (survivors[random_survivor][key] < min_stat) {
                    min_stat = survivors[random_survivor][key];
                }

                if (survivors[random_survivor][key] > max_stat) {
                    max_stat = survivors[random_survivor][key];
                }
            }
        }

        

        //console.log("Le survivant actuel : " + survivors[random_survivor].name)
        //console.log("Stat 1 : " + survivors[random_survivor].death)
        //console.log("Stat 2 : " + survivors[random_survivor].damage)
        //console.log("Stat 3 : " + survivors[random_survivor].dying_and_damage)
        //console.log("La plus petite valeur : " + min_stat)
        //console.log("La plus grande valeur : " + max_stat)

        function action(stat, survivors, actual_survivor, jason_life, death_list) {
            switch (true) {
                case stat == survivors[actual_survivor].death :
                    console.log("Jason a tué " + survivors[actual_survivor].name + " !")
                    death_list.push(survivors[actual_survivor].name)
                    survivors.splice(survivors[actual_survivor], 1)
                    break;
            
                case stat == survivors[actual_survivor].damage :
                    console.log("Jason a été blessé !")
                    jason_life -= 10
                    break
                
                default:
                    console.log("Jason a tué " + survivors[actual_survivor].name + " mais s'est quand même fait touché !")
                    jason_life -= 15
                    death_list.push(survivors[actual_survivor].name)
                    survivors.splice(survivors[actual_survivor], 1)
                    break;
            }
        }

        switch (true) {
            case luck < min_stat:
                action(min_stat, survivors, random_survivor, jason_life, death_list)
                break;

            case luck > max_stat:
                action(max_stat, survivors, random_survivor, jason_life, death_list)
                break;
        
            default:
                action(0.0, survivors, random_survivor, jason_life, death_list)
                break;
        }
    }

    if (jason_life <= 0) {
        console.log("Jason est mort ! Les survivants ont gagné !")
    }
    else {
        console.log("Jasons a gagné")
    }

    console.log("RIP à " + death_list)
    console.log(death_list)
}

game(survivant_list)