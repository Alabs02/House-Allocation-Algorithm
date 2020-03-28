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

    function maxHouses() {
      let prevBought = array[0];
      let houses = prevBought;
      for (let i = 0; i <= array.length && b >= array[i]; i++) {
        spend = b;
        let x = Math.min(spend - array[i]);
        prevBought = x;
        if (i >= 0 && prevBought >= array[i]) {
          alert(x)
          let counter = i + 1;
          console.log(counter);
          document.getElementById('result').innerText = (`You can purchase ${counter} houses`)
          houses += x;
          prevBought = x;
          console.log(prevBought);
        }
        else if(1 == array.length && b < array[i] ) {
          let counter = i - i;
          console.log(`You can purchase ${counter} houses!`);
        }
      }
    }
    maxHouses();
}
