import { Component, } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-dynamic-form-web',
  templateUrl: 'dynamic-form-web.html',
})
export class DynamicFormWebPage {

  dynamicForm: any = {};
  callback: any;

  constructor(private viewCtrl: ViewController
    , private navParams: NavParams
  ) { }

  ngOnInit() {
    this.dynamicForm = this.navParams.get("form") ? this.navParams.get("form") : this.dynamicForm;
    this.callback = this.navParams.get("callback");
  }

  onClickGoHome(){
    this.viewCtrl.dismiss()
  }

  onClick(btn) {
    btn.next_data = {
      data: "this is data"
    }
    this.next(btn);
  }

  next(btn) {
    if (btn.next == 'CLOSE') {
      this.viewCtrl.dismiss()
    } else if (btn.next == 'CALLBACK') {
      this.callback(btn.next_data)
        .then(nextStep => {
          this.next(nextStep)
        });
    }
  }

}
