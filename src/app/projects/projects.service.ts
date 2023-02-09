import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectsInfo = [
    {'title': 'Playlist Alphabetizer', 'img': 'assets/projects/playlist-alphabetizer.gif',
    'description': `Built a single-page, responsive, Angular web app that alphabetizes Spotify playlists.
    Utilized the Angular HTTP Client Module to make requests to Spotify API endpoints including OAuth
    authorization, retrieving user listening data, and retrieving and modifying user playlists.
    Leveraged the Angular component structure and created a shared service module used for HTTP requests, data
    retrieval, and parsing JSON.`,
    'source': 'https://kieransukachevin.github.io/playlist-alphabetizer/'
    },
    {'title': 'Alkalinity Titrator - UI State Machine', 'img': 'assets/projects/titrator.png',
    'description': `Built a new UI framework for the open-source Alkalinity Titrator project (a device that performs the titration
      process on a sample of water) using a Python class based, state machine approach.
      Created a comprehensive unit and acceptance testing test suite for the UI state machine framework using Pytest.`,
    'source': 'https://github.com/Open-Acidification/AlkalinityTitrator'
    },
    {'title': 'Theatre Simulator', 'img': 'assets/projects/theatre-simulator.jpeg', 
    'description': `Built a Python theatre seating simulator that sells and refunds seats with a PyQt5 GUI.
    Implemented a MVC design pattern of interaction between Python classes (model, view, controller).`,
    'source': 'https://github.com/kieransukachevin/theatre-seating-simulator'
    },
    {'title': 'Personal Website', 'img': 'assets/projects/personal-website.gif',
    'description': `This website! Built a single-page, responsive, Angular website featuring my projects and art.
     Created dynamic CSS changes for elements (including changes in opacity, element positioning, and animation),
    leveraging component and template data binding.
     Wrote custom HTML for Angular templates and CSS for styling and varying media types.`,
    'source': 'https://github.com/kieransukachevin/kieran-sukachevin'
    },
    {'title': 'Future Frog', 'img': 'assets/projects/future-frog.gif',
    'description': `You are an advanced frog in the year 2300 and you must defend yourself against angry hordes of bugs.
    Built a simple 3D video game written in JavaScript and implementing the Babylon.js 3D engine. 
    Created original artwork using Blender for this game.`,
    'source': 'https://github.com/kieransukachevin/FutureFrog'
    },
    {'title': 'Drawit', 'img': 'assets/projects/drawit.png',
    'description': `Built an Android drawing app in Java using the Android SDK.
    Implemented an Object-Oriented design approach, utilizing the built in Path, Paint, and Canvas classes to enable simulated drawing on the screen.`,
    'source': 'https://github.com/kieransukachevin/Drawit'
    },
    {'title': 'Lights Out', 'img': 'assets/projects/lights-out.gif', 
    'description': `Night has come and to keep the monster away, you can't let your house go dark. Survive as long as you can by keeping the lights on.
    Built a simple 2D video game using the Flame package for Flutter as the game engine and 
    uses the Flutter SDK structure to componentize game parts (player, door, background, etc).
    Created original artwork as sprites and other assets for this game.`,
    'source': 'https://github.com/kieransukachevin/Lights-Out'
    },
  ]

  constructor() { }

  getProjectsInfo() {
    return this.projectsInfo;
  }
}
