function valorantGame() {

    let attackTeamScore = 0
    let defenseTeamScore = 0

    while (attackTeamScore < 13 && defenseTeamScore < 13) {
        
        let attaquants =  [
            "Omen",
            "Phoenix",
            "Jett",
            "Fade",
            "Chamber"
        ]
        let defenseurs = [
            "Omen",
            "Phoenix",
            "Jett",
            "Fade",
            "Chamber"
        ]

        let spike_planted = false
        let spike_plantable = true


        while (attaquants.length > 0 && defenseurs.length > 0) {
            
            let random_team_death = Math.random()
            let random_does_plant = Math.random()


            // chance qu'un attaquant gagne le duel
            if ((!spike_planted && random_team_death <= 0.5) || (spike_planted && random_team_death <= 0.7)) {
                
                console.log("Les attaquants prennent le duel !")
                defenseurs.splice(0, 1)
                console.log(defenseurs.length + " défenseurs restants !")

                if (spike_plantable) {
                    
                    spike_plantable = false
                    
                    
                    if (random_does_plant >= 0.4) {

                        spike_planted = true
                        spike_plantable = false

                        console.log("Le spike a été planté !")

                    }

                }

            }

            //chance qu'un défenseur gagne le duel
            else if ((!spike_planted && random_team_death > 0.5) || (spike_planted && random_team_death > 0.7)) {
                
                console.log("Les défenseurs prennent le duel !")
                attaquants.splice(0, 1)
                console.log(attaquants.length + " attaquants restants !")

                if (spike_plantable) {
                    
                    
                    if (random_does_plant < 0.4) {

                        spike_planted = true
                        spike_plantable = false

                        console.log("Le spike a été planté !")

                    }

                }

            }

        }

        /*
        switch (true) {
            case attaquants.length <= 0 :
                defenseTeamScore += 1
                console.log("Les défenseurs gagnent le round : Attaquants " + attackTeamScore + " - " + defenseTeamScore + " Défenseurs")
                break;
        
            default:
                attackTeamScore += 1
                console.log("Les attaquants gagnent le round : Attaquants " + attackTeamScore + " - " + defenseTeamScore + " Défenseurs")
                break;
        }
        */

        if (attaquants.length <= 0) {
            defenseTeamScore += 1
            console.log("Les défenseurs gagnent le round : Attaquants " + attackTeamScore + " - " + defenseTeamScore + " Défenseurs")
        }

        else if (defenseurs.length <= 0) {
            attackTeamScore += 1
            console.log("Les attaquants gagnent le round : Attaquants " + attackTeamScore + " - " + defenseTeamScore + " Défenseurs")
        }

    }

    if (attackTeamScore >= 13) {
        console.log("VICTOIRE DES ATTAQUANTS")
    }

    else if (defenseTeamScore >= 13) {
        console.log("VICTOIRE DES DEFENSEURS")
    }
}

valorantGame()