import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngular';
  name="BRIAN DUDAY";
  address="23,rp sundaram street ,yolo nagar,chennai99999 | 9999-9999-9999 | hello@hello.com | www.hello.com";
  heading=[{
    name:"profile",
    content:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
    passages, and more`
  },
{
  name:"Skills",
  subHead:["Technical Skills","Additional Skills"],
  tech:["Java","Python","HTML","CSS"],
  
},
{
  name:"Work Experience",
  title:"Event Manager",
  date:"03/2014",
  place:"C3 Presents,washington DC",
  content:["It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ","Lorem Ipsum is simply dummy text of the printing and typesetting industry. ","Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"," but also the leap into electronic typesetting, remaining essentially unchanged."]
},{
  name:"Work Experience",
  title:"Event Manager",
  date:"03/2014",
  place:"C3 Presents,washington DC",
  content:["It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ","Lorem Ipsum is simply dummy text of the printing and typesetting industry. ","Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"," but also the leap into electronic typesetting, remaining essentially unchanged."]
},{
  name:"Education",
  title:"Event Manager",
  date:" 03/2014",
  place:"C3 Presents,washington DC",
  para:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
  content:["It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ","Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,","but also the leap into electronic typesetting, remaining essentially unchanged.","It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ","Lorem Ipsum is simply dummy text of the printing and typesetting industry. ","Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,","but also the leap into electronic typesetting, remaining essentially unchanged."],
  ftitle:"BA,English",
  fdate:"                   03/2014",
  fplace:"C3 Presents,washington DC"
}]
}
