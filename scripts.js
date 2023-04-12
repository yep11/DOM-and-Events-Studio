// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function (e) {
    let takeOffButton = document.getElementById('takeoff');
    takeOffButton.addEventListener('click', event => {
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.')
        if (response) {
            // set flight status
            document.getElementbyId = ("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight.";
            //  change background color
            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = 'blue';

            // shuttle heigh increase
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            let currentShuttleHeight = Number(spaceShuttleHeight.innerHTML);
            spaceShuttleHeight.innerHTML = currentShuttleHeight + 10000;
        }
    })


    let landButton = document.getElementById('landing');
    landButton.addEventListener('click', event => {
        window.alert('The shuttle is landing. Landing gear engaged.')
        
            // set flight status
            document.getElementbyId = ("flightStatus");
            flightStatus.innerHTML = "The shuttle has landed.";
            //  change background color
            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = 'green';
            // shuttle height
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            let currentShuttleHeight = Number(spaceShuttleHeight.innerHTML);
            spaceShuttleHeight.innerHTML = currentShuttleHeight + 10000;
        
    })

    let missionAbortButton = document.getElementById('missionAbort');
    missionAbortButton.addEventListener('click', event => {
        let response = window.confirm('Confirm that you want to abort the mission.')
        if (response) {
            // set flight status
            document.getElementbyId = ("flightStatus");
            flightStatus.innerHTML = "Mission aborted.";
            //  change background color
            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = 'green';

            // shuttle height
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            let currentShuttleHeight = Number(spaceShuttleHeight.innerHTML);
                spaceShuttleHeight.innerHTML = currentShuttleHeight + 10000;}

        });

});
