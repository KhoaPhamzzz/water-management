import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    standalone : true,
    imports    : [RouterOutlet],
})
export class AppComponent
{
    // Add the title property
    title: string = 'water-management';

    /**
     * Constructor
     */
    constructor()
    {
    }
}
