let amar={
    // name:"Amar",
    address:"Goa",
    proffesion:"Singer",
    Skill:function() {
        console.log(`I am Amar  from ${this.address} and my profession is ${this.proffesion}`)
    }
}

let akbar={
    // name:"Akbar",
    address:"Mumbai",
    proffesion:"Chef",
    Skill:function() {
        console.log(`I am Akbar  from ${this.address} and my profession is ${this.proffesion}`)
    }
}

let anthony={
    // name:"Anthony",
    address:"Kashmir",
    proffesion:"Magician",
    Skill:function() {
        console.log(`I am Anthony  from ${this.address} and my profession is ${this.proffesion}`)
    }
}

amar.Skill.call(anthony);
amar.Skill.call(akbar);

akbar.Skill.call(amar);
akbar.Skill.call(anthony);

anthony.Skill.call(amar);
anthony.Skill.call(akbar);