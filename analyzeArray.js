function analyzeArray(arrayOfNumbers){
    let average = arrayOfNumbers[0];
    let min = arrayOfNumbers[0];
    let max = arrayOfNumbers[0];
    const arrayLength = arrayOfNumbers.length;

    for(let i = 1; i<arrayOfNumbers.length; i++){
        average += arrayOfNumbers[i];
        if(arrayOfNumbers[i]<min){
            min = arrayOfNumbers[i];
        }
        if(arrayOfNumbers[i]>max){
            max = arrayOfNumbers[i]
        }
    }
    average = average/arrayLength;
    return {average, min, max, arrayLength}
}

export default analyzeArray;