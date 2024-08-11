fetch('./animal.json')
    .then(response => response.json())
    .then(animal => {        
            animal.forEach(animal => {
                console.log(getAnimalDesc(animal));
                console.log(animalDiet(animal));
                console.log(getAge(animal));
                console.log(getAnimalName(animal));
                console.log(revenueDisplay(animal));
                console.log(expensesDisplay(animal));
                console.log(animalProfit(animal));    
            })
            const container = document.createElement('div');
            container.id = 'animalsContainer';

        // Loop through an array in the JSON data
            animal.forEach(animal => {
        // Create a new div for each person
            const animalDiv = document.createElement('div');
            animalDiv.className = 'animal';

        // Add the person's data to the div
            animalDiv.innerHTML = `
            <p><h1>${getAnimalName(animal)}, ${animal.commonName}</h1>
                ${getAnimalDesc(animal)}<br>
                ${getAnimalName(animal)} brought in $${animalProfit(animal)} this year.<br>
                ${animalDiet(animal)}<br><br>
            </p>
            `
;

        // Add the person's div to the container
            container.appendChild(animalDiv);
        });

    // Add the container to the body of the HTML
        document.body.appendChild(container);
    })

    .catch(error => {
        console.error('Fetch error:', error);
    });
    
    
    function animalDiet(animal) {
        switch (animal.diet)
        {
            case "Herbivore":
                return `${animal.animalName} should be fed a PLANT based diet`;
                break;
            case "Carnivore":
                return `${animal.animalName} should be fed a MEAT based diet`;
                break;
            case "Omnivore":
                return `${animal.animalName} should be fed a MEAT and Plant based diet`;
                break;
        }
      }
    function getAnimalDesc(animal) {
        return `${animal.animalName}, ${animal.commonName}, Scientific name: ${animal.species}, Age: ${getAge(animal)}, Lifespan: ${animal.lifeSpan}`;
    }

    function getAge(animal) {    
        return `${animal.animalName} is ${new Date().getFullYear() - 
            new Date(animal.birthdate).getFullYear()}`;

    }
    function getAnimalName(animal) {
        return `${animal.animalName}`
    }

    function revenueDisplay(animal) {
        return `${animal.revenue}`
    }

    function expensesDisplay(animal) {
        return `${animal.expenses}`
    }

    function animalProfit(animal) {
        return (animal.revenue) - (animal.expenses)
    }
   
    