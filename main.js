function calHouse() {
    let n = document.getElementById("numOfHouses").value;
    let i = document.getElementById("numOfI").value;
    let p = document.getElementById("prize").value;
    let b = parseInt(document.getElementById("budget").value, 10);

    console.log(n, i, p, b); 
    // convert p into an array and sort
    let array = p.split(",");
    array.sort();
    console.log(array)

    //convert elements of array to intergers
    for (let i = 0; i < array.length; i++)  array[i] = parseInt(array[i], 10);  
    console.log(array);

    // value of A which is the summation of all the cost of houses
    let sum = array.reduce(function(a, b) {
        return a + b;
    }, 0);
    console.log(`cost of all houses: ${sum}`);
     
    function buyHouse() {
        for (let i = 0; i <= array.length && b >= array[i]; b-array[i] && i++) {
            if (i >= 0) {
		num = b - array[i]
                let inc = i + 1;
                console.log(`You can purchase ${inc} houses`);
		console.log(num);
                document.getElementById("result").innerHTML = (`You can purchase ${inc} houses`);
            } 
        }
    }
    buyHouse();
}
