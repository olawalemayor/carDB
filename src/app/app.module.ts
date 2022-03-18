import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JQ_TOKEN } from './common/index';
import { appRoute } from './routes';
import { WrapComponent } from './wrapper/wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { CarService, CollapseComponent } from './shared';
import {
  ResultThumbnailComponent,
  ResultComponent,
  SidebarComponent,
} from './results/index';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ImagesComponent } from './carousel/images.component';
import { FilterService } from './shared/filter.service';

const jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapComponent,
    FooterComponent,
    FilterComponent,
    ResultComponent,
    ResultThumbnailComponent,
    SidebarComponent,
    CollapseComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    CarService,
    FilterService,
    { provide: JQ_TOKEN, useValue: jQuery },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
