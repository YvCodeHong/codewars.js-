//If there is enough space, return 0, and if there isn't
//return the number of passengers he can't take.

function enough(cap, on, wait){
    return Math.max(on + wait + -cap, 0)
}