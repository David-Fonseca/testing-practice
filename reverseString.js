function reverseString(string){
    if(typeof string !== 'string'){
        throw new Error('input is not a string')
    }
    return string.split('').reverse().join('');
}

export default reverseString;