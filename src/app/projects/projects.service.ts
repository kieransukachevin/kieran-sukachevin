import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectsInfo: Array<Object> = [
    {'title': 'Playlist Alphabetizer', 'img': 'assets/projects/playlist-alphabetizer.gif',
    'description': `Built a single-page, responsive, Angular web app that displays and alphabetizes Spotify playlists. 
    Created a shared service-module that handles HTTP requests to Spotify endpoints, including OAuth authorization, "get" requests for data retrieval, and "put" requests for editing playlists. 
    Designed and implemented the UI with custom Angular components that dynamically display content retrieved from the service-module.`,
    'source': 'https://kieransukachevin.github.io/playlist-alphabetizer/'
    },
    {'title': 'Alkalinity Titrator - UI State Machine', 'img': 'assets/projects/titrator.png',
    'description': `Built a new UI framework for the open-source Alkalinity Titrator project (a device that performs the titration process on a
    sample of water) using a Python, class based, state machine approach.
    Created a comprehensive unit and acceptance test suite for the UI state machine framework using Pytest.`,
    'source': 'https://github.com/Open-Acidification/AlkalinityTitrator'
    },
    {'title': 'Theatre Simulator', 'img': 'assets/projects/theatre-simulator.jpeg', 
    'description': `Built a Python theatre seating simulator that sells and refunds seats with a PyQt5 GUI.
    Implemented a MVC design pattern of interaction between Python classes (model, view, controller).`,
    'source': 'https://github.com/kieransukachevin/theatre-seating-simulator'
    },
    {'title': 'Personal Website', 'img': 'assets/projects/personal-website.gif',
    'description': `This website! Built a single-page, mobile-first, responsive, Angular website featuring my software projects and art.
    Created dynamic CSS changes for DOM elements (including changes in opacity, element positioning, and animation) for an interactive user experience, leveraging component and template data-binding.
    Designed the styling and layouts with semantic HTML, CSS variables, and media queries.`,
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
    Implemented an Object-Oriented design approach, utilizing the built in Path, Paint, and Canvas classes to enable simulate drawing on the screen.`,
    'source': 'https://github.com/kieransukachevin/Drawit'
    },
    {'title': 'Lights Out', 'img': 'assets/projects/lights-out.gif', 
    'description': `Built a Flutter app 2D arcade-style game utilizing the Flame package for Flutter as the game engine.
    Leveraged the Flutter framework to create components for the game parts (player, door, background, etc).`,
    'source': 'https://github.com/kieransukachevin/Lights-Out'
    },
  ]

  constructor() { }

  getProjectsInfo() {
    return this.projectsInfo;
  }

  getNumberOfProjects() {
    return this.projectsInfo.length;
  }
}
