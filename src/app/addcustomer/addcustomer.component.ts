import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  public addcustomer: any;
  customers: any = [];
  search:any;
  data: any = [];
  constructor(private _add: FirebaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showcustomers();
    this.addcustomer = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10)])
    })
  }
  submit() {
    this._add.addCustomer(this.addcustomer.value).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
    this.addcustomer.reset();
  }

  showcustomers() {
    this._add.getCustomer().subscribe((res) => {
      this.data = res;
    })
  }
  gotoCustomerPayment() {
    this.router.navigate(['/paymentpagecustomer'])
  }

  gotoCustomerOrder() {
    this.router.navigate(['/orderpagecustomer'])
  }
}
