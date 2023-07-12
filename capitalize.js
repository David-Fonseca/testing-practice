function capitalize(string){
    if(typeof string !== 'string'){
        throw new Error('input was not a string');
    }
    return string[0].toUpperCase() + string.slice(1,string.length);
}

export default capitalize