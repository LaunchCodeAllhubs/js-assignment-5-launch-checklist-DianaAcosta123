// Write your JavaScript code here!


window.addEventListener("load", function () {

    const formList = document.getElementById("faultyItems");

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        formList.style.visibility = "visible"

        const pilot = document.querySelector("input[name=pilotName]");
        const copilot = document.querySelector("input[name=copilotName]");
        const fuelLevel = document.querySelector("input[name=fuelLevel]");
        const cargoLevel = document.querySelector("input[name=cargoMass]");
        console.log(pilot);

        formSubmission(document, formList, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)


    })
    

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});