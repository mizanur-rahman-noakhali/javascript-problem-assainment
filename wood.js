function woodCalculator(chairCount, tableCount, bedCount) {
    // Calculate the total wood required
    const chairWood = chairCount * 1;
    const tableWood = tableCount * 3;
    const bedWood = bedCount * 5;
    const totalWood = chairWood + tableWood + bedWood;
  
    // Return the total wood required
    return totalWood;
  }
   var result=woodCalculator(14,7,12);
   console.log(result);
   