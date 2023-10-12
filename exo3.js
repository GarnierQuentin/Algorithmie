list_of_names = [
    "Nicolas le",
    "Teemo le",
    "Glados le",
    "Woody le",
    "George le ",
    "Adam le",
    "Chloé la",
    "Gabin le",
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

let death_list = []



function game(survivors) {

    let jason_life = 100

    while (jason_life > 0 && survivors.length > 0) {

        let luck = Math.random()

        random_survivor = Math.floor(Math.random()*survivors.length)


        switch (true) {
            case luck < survivors[random_survivor].death:
                console.log("Jason a tué " + survivors[random_survivor].name + " !")
                death_list.push(survivors[random_survivor].name)
                survivors.splice(random_survivor, 1)
                break;

            case luck > 1 - survivors[random_survivor].dying_and_damage:
                console.log("Jason a tué " + survivors[random_survivor].name + " mais s'est quand même fait touché !")
                jason_life -= 15
                death_list.push(survivors[random_survivor].name)
                survivors.splice(random_survivor, 1)
                break;
        
            default:
                console.log("Jason a été blessé !")
                jason_life -= 10
                break;
        }
    }

    if (jason_life <= 0) {
        console.log("Jason est mort ! Les survivants ont gagné !")
    }
    else {
        console.log("Jason a gagné")
    }

    console.log("RIP à " + death_list)
    console.log(death_list)
}

game(survivant_list)