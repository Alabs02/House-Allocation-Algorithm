const maxHouses = (T, N, B, prizes) => {
    for (let x in parseInt(T, 10)) {
        let count = 0, sum = 0;
        
        // Convert elements in the array to integers
        for (let i = 0; i < prizes.length; i++)  prizes[i] = parseInt(prizes[i], 10);
        
        // Sort array
        prizes.sort();
        for (let i = 0; i < prizes.length; i++) 
        {
            if (sum+prizes[i] <= parseInt(B, 10)) {
                sum = sum + prizes[i];

                // Increment Count
                count++;
            } else {
                break;
            }
        }
        console.log(`Case #${x+1}: ${count}`);
    }
};

