      const oddsAndEvens = [13, 3, 4, 10, 7, 2];
      
      compareNumbers = (a, b) => a - b;
      
      oddsAndEvens.sort(compareNumbers);

      console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`);