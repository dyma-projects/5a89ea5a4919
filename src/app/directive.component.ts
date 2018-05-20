import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

    public eventToComponent: String;
    public componentToProperty: String = 'Bonjour';
    public status: Boolean = true;
    public texts: Array<string> = ["un", "deux", "trois"];

    constructor() {
    }

    ngOnInit() {
    }

}
