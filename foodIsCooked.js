/**
 * Determines whether meat temperature is high enough
 * @param {string} kind 
 * @param {number} internalTemp 
 * @param {string} doneness
 * @returns {boolean} isCooked
 */
const foodIsCooked = function(kind, internalTemp, doneness) {
  if(kind === 'chicken')
  {
    if(internalTemp > 165)
    {
      return true;
    }
    else {
      return false;
    }
  }
  else // beef
  {
    if(doneness == 'well')
    {
      if(internalTemp >= 155)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else if (doneness == 'medium')
    {
      if(internalTemp >= 138)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else 
    {
      if(internalTemp >= 125)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  }
  // Write function HERE

}



// Test function
console.log(foodIsCooked('chicken', 90)); // should be false
console.log(foodIsCooked('chicken', 190)); // should be true
console.log(foodIsCooked('beef', 138, 'well')); // should be false
console.log(foodIsCooked('beef', 138, 'medium')); // should be true
console.log(foodIsCooked('beef', 138, 'rare')); // should be true