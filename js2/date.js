const getAge = (birth) => {
    let now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    if(now.getMonth() < birth.getMonth()) {
        age--;
    } else if(now.getMonth()==birth.getMonth() && now.getDate()<birth.getDate()) {
        age--;
    }
    return age;
}

console.log(getAge(new Date(1978, 11, 02)))