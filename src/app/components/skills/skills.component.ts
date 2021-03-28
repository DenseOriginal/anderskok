import { Component, OnInit } from '@angular/core';

interface Skill {
  imgUrl: string,
  name: string
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
