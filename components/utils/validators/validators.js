export const required = value =>{
    if (value) return undefined;
    return 'Fiels is required';
}
export const maxLenghtCreator = (maxLenght) => (value) =>{
    if (value.length > maxLenght) return('Max lenght is' + maxLenght + 'symbols');
    return undefined;
}