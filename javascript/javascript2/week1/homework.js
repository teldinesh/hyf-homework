const findShortestWordInArray = a => {
    let shortWord = '';
    for (let element of a) {
      if (typeof element === 'string' &&
          (shortWord === '' || element.length < shortWord.length)) {
            shortWord = element;
      }
    }
    return shortWord;
  };
  
  /* ===== */
  
  console.log(
    findShortestWordInArray(["bil", "plante", "kaffe", "bog", "ø", "planetarium"])
  );

  

  const counter = str => {
    const æ = [...str].filter(letter => letter === 'æ').length;
    const å = [...str].filter(letter => letter === 'å').length;
    const ø = [...str].filter(letter => letter === 'ø').length;
    return `Total: ${æ+å+ø}, æ: ${æ}, å: ${å}, ø: ${ø} `;
      };
    
  
  const danishString = "Jeg har en blå bil";
  console.log(counter(danishString));

  const danshString = "Blå grød med røde bær";
  console.log(counter(danshString));
  

