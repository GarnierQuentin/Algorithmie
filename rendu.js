function valorantGame() {

    let attackTeamScore = 0
    let defenseTeamScore = 0

    let round_count = 0

    let no_spike_attacker_duel = 0.5

    while (attackTeamScore < 13 && defenseTeamScore < 13) {
        
        round_count += 1

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


        //exercice bonus Omen
        if (attaquants.includes("Omen")) {
                
            let does_smoke = Math.random()

            if (does_smoke <= 0.5) {

                no_spike_attacker_duel = 0.6
                console.log("Le Omen attaquant bloque la vision !")

            }

        }


        //exercice bonus Phoenix
        if (attaquants.includes("Phoenix")) {

            if (!spike_planted) {

                let does_flash = Math.random()

                if (does_flash <= 0.5) {

                    console.log("Phoenix lance sa flash !")
                    target_flashed = Math.random()

                    if (target_flashed <= 0.8) {
                        
                        console.log("Les ennemis sont aveuglés !")
                        no_spike_attacker_duel = 0.6

                    }

                    else {

                        console.log("Il a aveuglé sa propre équipe !")
                        no_spike_attacker_duel = 0.3

                    }

                }

            }

        }


        while (attaquants.length > 0 && defenseurs.length > 0) {
            
            let random_team_death = Math.random()
            let random_does_plant = Math.random()


            //exercice bonus de Jett
            if (attaquants.includes("Jett")) {
                
                if (round_count == 3) {
                
                    round_count = 0
                    does_jett_attack = Math.random()
    
                    if (does_jett_attack <= 0.8) {
                        defenseurs.splice(0, 1)
                        console.log("Jett a fait un pick ! Plus que " + defenseurs.length + " défenseurs !")
                    }
                }

            }


            // chance qu'un attaquant gagne le duel
            if ((!spike_planted && random_team_death <= no_spike_attacker_duel) || (spike_planted && random_team_death <= 0.7)) {
                
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