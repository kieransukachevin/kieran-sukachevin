import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectsInfo = [
    {'title': 'Playlist Alphabetizer', 'img': 'assets/projects/playlist-alphabetizer.gif',
    'description': `<p>An Angular web app that alphabetizes your Spotify playlists. Utilizes the Angular Http Client Module
    to make requests to Spotify API endpoints including user authentication, retrieving user information, and retrieving user playlists.
    Leverages the Angular component structure with a shared service module for backend functions (including http calls) and data retrieval.
    Uses the Bubble Sort Algorithm for sorting the songs on a playlist alphabetically.
    </p>`,
    'source': 'https://kieransukachevin.github.io/playlist-alphabetizer/'
    },
    {'title': 'Alkalinity Titrator - UI State Machine', 'img': 'assets/projects/titrator.png',
    'description': `<p>A new UI state machine framework for the UI framework for the open source Alkalinity Titrator project. 
    The UI framework additionally includes a comprehensive test suite (unit and acceptance tests) using Pytest. 
    This project written in Python.</p>`,
    'source': 'https://github.com/Open-Acidification/AlkalinityTitrator'
    },
    {'title': 'Lights Out', 'img': 'assets/projects/lights-out.gif', 
      'description': `<p>Night has come and to keep the monster away, you can't let your house go dark. Survive as long as you can by keeping the lights on.
      This project uses the Flame package for Flutter as the game engine and 
      uses the Flutter SDK structure to componentize game parts (player, door, background, etc).
      Original artwork as sprites and other assets was created for this game.</p>`,
      'source': 'https://github.com/kieransukachevin/Lights-Out'
    },
    {'title': 'Theatre Simulator', 'img': 'assets/projects/theatre-simulator.jpeg', 
    'description': `<p>A simple GUI theatre simulator that allows the user to sell seats, rows, or columns. 
    This project uses the MVC design pattern as the model of interaction between the three main classes (model, view, and controller). 
    This project was written in Python and implements a graphical user interface using the PyQt5 package.</p>`,
    'source': 'https://github.com/kieransukachevin/theatre-seating-simulator'
    },
    {'title': 'Future Frog', 'img': 'assets/projects/future-frog.gif',
    'description': `<p>You are an advanced frog in the year 2300 and you must defend yourself against angry hordes of bugs.
    This project was written in JavaScript and implements the Babylon.js 3D engine. 
    Original artwork using Blender was created for this game.</p>`,
    'source': 'https://github.com/kieransukachevin/FutureFrog'
    },
    {'title': 'Drawit', 'img': 'assets/projects/drawit.png',
    'description': `<p>A simple Drawing app for Android devices. Features include brush size, color, and an option to switch between brush and eraser.
    This project uses the Path, Paint, and Canvas classes to enable drawing and was written in Java using the Android SDK.
    Original artwork for button and menu assets was created for this game.</p>`,
    'source': 'https://github.com/kieransukachevin/Drawit'
    },
    {'title': 'Personal Website', 'img': 'assets/projects/personal-website.gif',
    'description': `<p>This website! This website is an ongoing project written in TypeScript using the Angular framework. TypeScript features
    include dynamic changes in HTML and CSS (changes in opacity, mouse events, and menu fading) as well as data sharing using services and property bindings.
    </p>`,
    'source': 'https://github.com/kieransukachevin/kieran-sukachevin'
    },
  ]

  constructor() { }

  getProjectsInfo() {
    return this.projectsInfo;
  }
}
