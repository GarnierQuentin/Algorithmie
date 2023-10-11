class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        const lucky_attack = Math.random()*100
        return lucky_attack
    }

    attackPokemon(attack_attacker, def_defender) {
        if (this.isLucky()<=this.luck) {
            const damage = attack_attacker - def_defender
            return damage    
        }
        return 0
    }
}

let ouisticram = new Pokemon("Ouisticram", 58, 44, 44, 61)
let metamorph = new Pokemon("Métamorph", 48, 48, 48, 100)

console.log(ouisticram.attack)

function pokemonFight(pokemon1, pokemon2) {
    while (pokemon1.hp > 0 || pokemon2.hp > 0) {

        let pokemon1_damage = pokemon1.attackPokemon(pokemon1.attack, pokemon2.defense)
        console.log("Dégats de " + pokemon1.name + " : " + pokemon1_damage)
        pokemon2.hp -= pokemon1_damage
        
        if (pokemon2.hp <= 0) {
            console.log(pokemon1.name + " a gagné !!!")
            break
        }
        
    
    
        let pokemon2_damage = pokemon2.attackPokemon(pokemon2.attack, pokemon1.defense)
        console.log("Dégats de " + pokemon2.name + " : " + pokemon2_damage)
        pokemon1.hp -= pokemon2_damage
        
        if (pokemon1.hp <= 0) {
            console.log(pokemon2.name + " a gagné !!!")
            break
        }
    }
}

pokemonFight(ouisticram, metamorph)