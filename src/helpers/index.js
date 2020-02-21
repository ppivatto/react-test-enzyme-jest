/**
 * @method getLetterMatchCount
 * @param {string} guessedWord
 * @param {string} secretWord
 * @return {number} - number of letters matched between secret word and guessed
 */

export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetterSet = new Set(secretWord.split(''));
    const guessedLetterSet = new Set(guessedWord.split(''));
    
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length; 
}