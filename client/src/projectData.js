
/*
    can't comment projectData definition line otherwise it is undefined upon export, but gives 
    warning that it's never used without defining without using eslint disable comment or 
    actually using it for some useless task... cool story?
*/
// eslint-disable-next-line
var projectData; 
export default projectData = [
    {
        hrefDeployed: "https://www.npmjs.com/package/chesssk",
        thumb: "img/doom-code-tile.jpg",
        title: "CheSSsk",
        text: "A Node.js library for chess move validation based on location and board data.",
        hrefGithub: "https://github.com/shmoesolid/CheSSsk",
    },
    {
        hrefDeployed: "https://patrolroom.com/gss",
        thumb: "img/thumb_gss.png",
        title: "Guardian Security Services",
        text: "A website that was developed for Guardian Security Services, Inc. It utilizes "
            + "reactive styling based on the size of the window through javascript.",
        hrefGithub: "",
    },
    {
        hrefDeployed: "", //https://patrolroom.com/gss/gsecurio
        thumb: "img/thumb_gsecurio.png",
        title: "Proposal Generator",
        text: "Proposal system that generates and emails PDF files to potential customers while in the field.  "
            + "Designed for tablets and phones utilizing a centralized database of customers and proposals "
            + "(example site down temporarily).",
        hrefGithub: "",
    },
    {
        hrefDeployed: "https://github.com/shmoesolid/DS3231_Binary_Clock",
        thumb: "img/thumb_binclock.png",
        title: "Binary Clock",
        text: "I rewrote Gabriel J. Pensky's C++ binary clock code to utilize a newer Arduino clock chip (DS3231) while still"
            + "maintaining the same wiring diagram.  I used a library for this newer chip developed by Henning Karlsen.  "
            + "While restructuring and converting the code, I also fixed a light dimming bug with Mr. Pensky's original code.  "
            + "By stabilizing the refresh rate, I was able to create constant bright LEDs while also reducing voltage usage.",
        hrefGithub: "",
    },
    {
        hrefDeployed: "img/impound_manager.png",
        thumb: "img/thumb_impound_manager.png",
        title: "Impound Manager",
        text: "While employed with the City of Balcones Heights, I created a frontend program to manage their impound lot utilizing a "
            + "centralized Microsoft Access database.  It's able to calculate appropriate costs and generate receipts, release "
            + "agreements, certified letters, sticky mailing labels for the certified letters, and more.",
        hrefGithub: "",
    },
    {
        hrefDeployed: "https://empyriononline.com/threads/empdsm-server-manager-with-auto-update.5811/",
        thumb: "img/thumb_empdsm.jpg",
        title: "Empyrion Dedicated Server Manager",
        text: "I'm a gamer.  I played Empyrion on Steam quite a bit and I enjoyed hosting servers.  Early in development of Empyrion "
            + "there was no auto update feature available in their dedicated server program.  I created a wrapper for the said "
            + "program that communicated with the dedicated server via telnet and periodically checked for updates utilizing SteamCMD.  When an update "
            + "was located, it would notify every player in the server that it was shutting down prior to update, give the players "
            + "time to exit the server, then proceed to update and restart the server.",
        hrefGithub: "",
    },
    {
        hrefDeployed: "img/winordice.png",
        thumb: "img/thumb_winordice.png",
        title: "WinOrdice",
        text: "I worked for a time at Amenity Computer Services as a service manager.  I created this program to serve as their service management system.",
        hrefGithub: "",
    },
    {
        hrefDeployed: "https://shmoesolid.github.io/Coffee-Run",
        thumb: "img/thumb_coffee-run.png",
        title: "Coffee Run",
        text: "An web application that utilizes your location to get nearby coffee shops.  It gives you "
            + "a list of the locations and displays them using embedded Google Maps.",
        hrefGithub: "https://github.com/shmoesolid/Coffee-Run",
    },
    {
        hrefDeployed: "https://shmoesolid.github.io/Day-Planner",
        thumb: "img/thumb_day-planner.png",
        title: "Day Planner",
        text: "A dynamic day planner with time blocks by hour so you can plan your work day.",
        hrefGithub: "https://github.com/shmoesolid/Day-Planner",
    },
    {
        hrefDeployed: "https://shmoesolid.github.io/Weather-Dashboard",
        thumb: "img/thumb_weather-dashboard.png",
        title: "Weather Dashboard",
        text: "A simple weather application that gets weather data by city and displays it accordingly.",
        hrefGithub: "https://github.com/shmoesolid/Weather-Dashboard",
    },
    {
        hrefDeployed: "https://github.com/shmoesolid/README-Generator",
        thumb: "img/doom-code-tile.jpg",
        title: "README Generator",
        text: "A CLI application that generates a README markdown file for a project.",
        hrefGithub: "https://github.com/shmoesolid/README-Generator",
    },
    {
        hrefDeployed: "https://github.com/shmoesolid/Team-Generator",
        thumb: "img/doom-code-tile.jpg",
        title: "Team Generator",
        text: "A CLI application that generates an HTML file of your team.",
        hrefGithub: "https://github.com/shmoesolid/Team-Generator",
    },
    {
        hrefDeployed: "https://utsa-express-note-taker.herokuapp.com/",
        thumb: "img/doom-code-tile.jpg",
        title: "Express Note Taker",
        text: "An Express NodeJS utilzing a JSON database file that handles note taking without security.",
        hrefGithub: "https://github.com/shmoesolid/Express-Note-Taker",
    },
    {
        hrefDeployed: "https://github.com/shmoesolid/Employee-Tracker",
        thumb: "img/doom-code-tile.jpg",
        title: "Employee Tracker",
        text: "A CLI NodeJS application that manages an employee MySQL database.",
        hrefGithub: "https://github.com/shmoesolid/Employee-Tracker",
    },
    {
        hrefDeployed: "https://utsa-burger.herokuapp.com/",
        thumb: "img/thumb_burger.png",
        title: "Burger",
        text: "An Express NodeJS utilzing MySQL database that adds/updates/removes burgers via a webpage.",
        hrefGithub: "https://github.com/shmoesolid/Burger",
    },
    {
        hrefDeployed: "https://exchange-stuff.herokuapp.com/",
        thumb: "img/doom-code-tile.jpg",
        title: "Better Barter",
        text: "A web application (early concept), where you have a user account and can list items for "
            + "trade based on a declared value.  You can then browse/compare other items for trade "
            + "in a singulatory fasion accepting or refusing said trade.  Refused items will not be listed "
            + "again unless otherwise stated.  Accepted items move both items into a trade status where "
            + "the users would eventually complete said trade.",
        hrefGithub: "https://github.com/shmoesolid/Exchange-Stuff",
    },
    {
        hrefDeployed: "https://utsa-fitness.herokuapp.com/",
        thumb: "img/doom-code-tile.jpg",
        title: "Fitness Tracker",
        text: "A web application that tracks workout progress and displays stats.  Front-end was not developed "
            + "by me, though I had to provide a fix for the stats display as they were incorrect.",
        hrefGithub: "https://github.com/shmoesolid/Fitness-Tracker",
    },
    {
        hrefDeployed: "https://utsa-budget-tracker.herokuapp.com/",
        thumb: "img/doom-code-tile.jpg",
        title: "Budget Tracker",
        text: "A web application that tracks funds offline and online. Stores data locally when no longer connected "
            + "to server. When app comes back online, it makes sure the local changes are stored in remote database.",
        hrefGithub: "https://github.com/shmoesolid/Budget-Tracker",
    },
    {
        hrefDeployed: "https://utsa-employee-directory.herokuapp.com/",
        thumb: "img/doom-code-tile.jpg",
        title: "Employee Directory",
        text: "A web application that simply lists an employee directory via randomuser.me API using React.",
        hrefGithub: "https://github.com/shmoesolid/employee-directory",
    },
    /* copy for dupes
    {
        hrefDeployed: "",
        thumb: "",
        title: "",
        text: "",
        hrefGithub: "",
    },
    */
];