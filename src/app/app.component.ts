import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  langName = 'en'

  constructor(private translate: TranslateService){
translate.setDefaultLang('en')

  }
  switchLang(lang:any){
    this.translate.use(lang)
    this.langName = lang
  }
}
