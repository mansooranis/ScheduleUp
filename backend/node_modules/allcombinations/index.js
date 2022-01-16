function* createCombinations(input) {
    if (input.length == 1) {
        yield input;
        return;
    }

    for (let i = 0; i < input.length; i++) {
        const tail = input.concat([]);
        const head = input[i];
        tail.splice(i, 1);

        for (const combination of createCombinations(tail)) {
            yield [head].concat(combination);
        }
    }
}

module.exports = createCombinations;