// The Story: 

//Bob is working as a bus driver. However, he has become extremely popular 
//amongst the city's residents. With so many passengers wanting to get aboard
//his bus, he sometimes has to face the problem of not enough space left 
// on the bus! He wants you to write a simple program telling him if he will 
//be able to fit all the passengers.

// Task Overview: 
//You have to write a function taht accepts three parameters: 
// 1. Cap is the amount of people the bus can hold excluding the driver. 
// 2 On is the number of people on the bus. 
//3. wait is the number of people waiting to get on the bus. 
//If there is enough space, return 0, and if there isn't, return the bus. 

function enough(cap, on, wait) {
    return (on+wait > cap) ? on+wait-cap : 0; 
}