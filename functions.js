function mostPopulated(mPArray) {
    return mPArray.filter(data => data.population > 100000)
}

function lessPopulated(mPArray) {
    return mPArray.filter(data => data.population < 100000)
}

module.exports = { mostPopulated, lessPopulated }