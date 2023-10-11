const personnage = {
    name: "Nicolas",
    mental_health: 10
}

const musics = [
    "Anissa - Wejdene",
    "Radioactive - ImagineDragons",
    "Viva la Vida - Coldplay",
    "Quand la musique est bonne - Jean Jacques Goldman",
    "Africa - Toto"
]

function trajet(musics, personnage) {
    feux_rouges = 30
    changements = 0

    for (let index = 0; index < feux_rouges; index++) {

        console.log("Santé mentale : " + personnage.mental_health)

        if (personnage.mental_health <= 0) {
            return console.log("explosion")
        }

        actual_rank = Math.floor(Math.random()*musics.length)

        console.log("Musique en cours : " + musics[actual_rank])

        if (musics[actual_rank] == musics[0]) {
            personnage.mental_health -= 1
            changements += 1
        }

    }

    console.log("Tu es bien arrivé et il t'a fallu " + changements + " changements.")
}

trajet(musics, personnage)