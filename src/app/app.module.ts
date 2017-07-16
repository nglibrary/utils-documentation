import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '@nglibrary/utils';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ControlInfoDirComponent } from './features/control-info-dir/component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ControlInfoDirComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    UtilsModule.forRoot({
      controlInfo: {
        prefix: 'info'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
