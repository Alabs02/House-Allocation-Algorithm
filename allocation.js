function maxHouses(cost, n, b, i) { // cost: price of houses; // n: number of houses; b: budgeted amount; i: Number of interested houses;
    if (1 <= i && i <= 100  && 1 <= b && b <= Math.pow(10,5) && 1 <= n && n <= Math.pow(10,5) ) {
        let count = 0, sum = 0;
        console.log(`Prices: ${cost}\n Number of Houses: ${n}\n Budget: ${b}\n Number of interested houses: ${i} `);

        // Convert elements in the array into integers
        for (let i = 0; i < cost.length; i++)  cost[i] = parseInt(cost[i], 10);
        console.log(cost);

        // sort array
        cost.sort();

        for (let i = 0; i < n; i++) 
        {
            // Check if we can buy ith toy or not 
            if (sum +cost[i] <= b && cost[i] <= 1000) 
            {
                sum = sum + cost[i];
                console.log(`Sum: ${sum}`);
                
                //Increment Counter
                count++; 
                alert(count); 
                console.log(`You can purchase ${count} houses`);
            } 
        }
        // counter
        return count; 
    } else {
        console.log(` Interested cannot be <1 &  > 100 & Budget cannot be < 1 & > 100000 prices`);
        
    }  
}
