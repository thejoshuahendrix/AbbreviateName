function AbbreviateName(name){
    let fullname = name.split(' ')
    let firstname = fullname[0][0]+'. '
    let lastname = fullname[1][0]+'.'
    return (firstname + lastname)
}
console.log(AbbreviateName("Josh Hendrix"))