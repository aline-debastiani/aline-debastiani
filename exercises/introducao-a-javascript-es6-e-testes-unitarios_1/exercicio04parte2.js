const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function changeString (name) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(name)}

    Minhas cinco principais habilidades são:`
    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
    ${result}

    #goTrybe
    `

    return result
}

console.log(changeString("Lucas"));
