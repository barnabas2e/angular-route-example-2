import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'audio', component: AudioComponent },
      { path: 'video', component: VideoComponent },
      { path: '', redirectTo: "/audio", pathMatch: "full" },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
