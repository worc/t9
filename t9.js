const t9Map = [
    ['0'],
    ['1'], // common punctuation: ,.?!"'
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
    ['J', 'K', 'L'],
    ['M', 'N', 'O'],
    ['P', 'Q', 'R', 'S'],
    ['T', 'U', 'V'],
    ['W', 'X', 'Y', 'Z'],
    [''], // *, uncommon punctuation: :;()&%
    [''] // #, press to indicate a following number, hold to access full symbol set
];

function t9(input = '') {
    const parsedKeys = input.split('').map(key => { return t9Map[parseInt(key, 10)] });

    return parsedKeys.reduce((words, key) => {
        return words.reduce((prevWords, word) => {
            return prevWords.concat(key.map(value => {
                return word + value;
            }));
        }, []);
    });
}

export default t9;
