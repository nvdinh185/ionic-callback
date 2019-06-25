import { Component, } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-dynamic-form-web',
  templateUrl: 'dynamic-form-web.html',
})
export class DynamicFormWebPage {

  dynamicForm: any = {};
  callback: any; // ham goi lai khai bao o trang root gui (neu co)
  parent: any;    // Noi goi this

  constructor(private viewCtrl: ViewController
    , private navParams: NavParams
  ) { }

  ngOnInit() {
    this.dynamicForm = this.navParams.get("form") ? this.navParams.get("form") : this.dynamicForm;
    this.callback = this.navParams.get("callback");
    //this.parent = this.navParams.get("parent");
  }

  onClick(btn) {
    console.log("0k", btn);
    let keyResults = {};
    btn.next_data = {
      data: keyResults
    }
    this.next(btn);
  }

  next(btn) {
    console.log(btn)
    if (btn.next == 'CLOSE') {
      console.log(1)
      this.viewCtrl.dismiss()
    } else if (btn.next == 'CALLBACK') {
      console.log(2)
      this.callback(123)
        .then(nextStep => {
          console.log(nextStep)
          this.next(nextStep)
        });
    }
  }

}
