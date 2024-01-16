import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { data } from '../../data/dataFake'


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  contentPhotoCover:string = ""
  @Input()
  contentTitle:string = ""
  @Input()
  contentDescription:string = ""
  private id : string | null = ""

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'))
    this.setValueToComponent(this.id)
  }

  setValueToComponent(id:string | null) {
    const result = data.filter(article => article.id == id)[0]
    this.contentDescription = result.description
    this.contentPhotoCover = result.photo
    this.contentTitle = result.title
  }
}
