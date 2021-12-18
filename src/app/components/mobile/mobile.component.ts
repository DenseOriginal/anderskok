import { Component, OnInit } from '@angular/core';

interface Skill {
  imgUrl: string,
  name: string
}

interface Project {
  imgUrl: string,
  name: string,
  description: string,
  facts?: string[],
  link: string,
}

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  copyrightYear = new Date().getFullYear();
  skills: Skill[] = [
    {
      imgUrl: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_js_official.svg",
      name: "JavaScript"
    },
    {
      imgUrl: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_html.svg",
      name: "HTML"
    },
    {
      imgUrl: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_css.svg",
      name: "CSS"
    },
    {
      imgUrl: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_sass.svg",
      name: "SCSS"
    },
    {
      imgUrl: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_node.svg",
      name: "NodeJS"
    },
    {
      imgUrl: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_angular.svg",
      name: "Angular"
    },
    {
      imgUrl: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_vue.svg",
      name: "Vue"
    },
    {
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png",
      name: "GitHub"
    },
    {
      imgUrl: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_netlify.svg",
      name: "Netlify"
    },
    {
      imgUrl: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_typescript_official.svg",
      name: "TypeScript"
    },
    {
      imgUrl: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_firebase.svg",
      name: "Firebase"
    },
    {
      imgUrl: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_mongo.svg",
      name: "MongoDB"
    },
  ];

  projects: Project[] = [
    {
      imgUrl: "/assets/projects/aglan.png",
      name: 'AGLan website',
      description: "Website for LAN parties at Aarhus Gymansium, used to register for the event.",
      link: "https://aglan.dk",
      facts: [
        "Build using Express JS",
        "Secure with HTTPS",
        "Integrated with Discord server"
      ]
    },
    {
      imgUrl: "/assets/projects/ttt-squared.png",
      name: 'Tic-Tac-Toe Squared',
      description: "Play ultimate tic tac toe online with a friend.",
      link: "https://ttt-squared.netlify.app/",
      facts: [
        "Cross device playing using WebRTC",
        "Build using Angular",
        "100% lighthouse score"
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
