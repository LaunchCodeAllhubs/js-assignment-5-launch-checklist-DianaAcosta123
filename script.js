// Write your JavaScript code here!



window.addEventListener("load", function () {

    const formList = document.getElementById("faultyItems");

    const form = document.querySelector("form");

    formList.style.visibility = "hidden";

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const pilot = document.querySelector("input[name=pilotName]");
        const copilot = document.querySelector("input[name=copilotName]");
        const fuelLevel = document.querySelector("input[name=fuelLevel]");
        const cargoLevel = document.querySelector("input[name=cargoMass]");
        

        formSubmission(document, formList, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)


    })
    

    let listedPlanets;
   
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        const chosenPlanet = pickPlanet(listedPlanets);     
        
        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
    
      
    })

});