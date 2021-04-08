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
      imgUrl: "/assets/skills/file_type_js_official.svg",
      name: "JavaScript"
    },
    {
      imgUrl: "/assets/skills/file_type_html.svg",
      name: "HTML"
    },
    {
      imgUrl: "/assets/skills/file_type_css.svg",
      name: "CSS"
    },
    {
      imgUrl: "/assets/skills/file_type_sass.svg",
      name: "SCSS"
    },
    {
      imgUrl: "/assets/skills/file_type_node.svg",
      name: "NodeJS"
    },
    {
      imgUrl: "/assets/skills/file_type_angular.svg",
      name: "Angular"
    },
    {
      imgUrl: "/assets/skills/file_type_vue.svg",
      name: "Vue"
    },
    {
      imgUrl: "/assets/skills/file_type_flutter.svg",
      name: "Flutter"
    },
    {
      imgUrl: "/assets/skills/github.svg",
      name: "GitHub"
    },
    {
      imgUrl: "/assets/skills/file_type_netlify.svg",
      name: "Netlify"
    },
    {
      imgUrl: "/assets/skills/file_type_typescript_official.svg",
      name: "TypeScript"
    },
    {
      imgUrl: "/assets/skills/file_type_firebase.svg",
      name: "Firebase"
    },
    {
      imgUrl: "/assets/skills/file_type_mongo.svg",
      name: "MongoDB"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
