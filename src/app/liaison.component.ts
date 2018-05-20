import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-liaison',
    templateUrl: './liaison.component.html',
    styleUrls: ['./liaison.component.css']
})
export class LiaisonComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    methodeClick() {
        console.log('Clic');
    }
}
