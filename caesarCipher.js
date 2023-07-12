function caesarCipher(string, shiftFactor){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const maxChar = alphabet.length-1;
    alphabet = alphabet.split('');

    let stringArray = string.split('');
    stringArray.forEach((character, index) => {
        if(character.match(/[a-z]/i)){
            let upperFlag = false;
            if(character === character.toUpperCase()){
                upperFlag = true;
                character = character.toLowerCase();
            }
            let indexOfChar = alphabet.indexOf(character);

            if(indexOfChar+shiftFactor > maxChar){
                indexOfChar = (indexOfChar+shiftFactor)%(maxChar+1);
            }
            else if(indexOfChar + shiftFactor < 0){
                indexOfChar = (indexOfChar + shiftFactor) % (maxChar + 1) + maxChar + 1;
            }
            else{
                indexOfChar = indexOfChar + shiftFactor;
            }

            character = alphabet[indexOfChar];
            
            if(upperFlag){
                character = character.toUpperCase();
            }

            stringArray[index] = character;
    }
    });

    return stringArray.join('');
}

export default caesarCipher;