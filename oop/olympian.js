class Olympian{
    constructor(nameInput, ageInput){
        //instance variables, or member variables, or in javascript---> object properties
        this.name = nameInput
        this.age = ageInput
        this.health = 100
        this.energy = 100
        if(nameInput == "Allen Iverson"){
            this.speed = 100
        }else{
            this.speed = 70
        }
        this.strength = 70
    }

    //olympians can also perform methods
    showStats(){
        let info = `My stats are this: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength} \n Energy: ${this.energy}`
        console.log(info)
    }

    //take ice bath to increase health
    takeIceBath(){
        console.log("this the wim hof way, taking an ice bath...")
        this.health += 10
    }
}

class Swimmer extends Olympian{
    constructor(nameInput, ageInput){
        super(nameInput, ageInput)
        this.strength = 60 //swimmer can have different qualities than general olympians
        this.swimSpeed = 70
    }
    swimAndRecover(){
        console.log("swimming pools ...drank")
        this.energy -= 10
        console.log("time to recover with ice bath")
        super.takeIceBath()
    }
}






//instances of the olympian class --> Olympian objects
o1 = new Olympian("Kobe Bryant", 32)
o2 = new Olympian("Allen Iverson", 31)
o3 = new Olympian("Carmelo", 28)

//instance of swimmer
s1 = new Swimmer("Michael Phelps", 30)

s1.swimAndRecover()
s1.showStats()










