import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { provideStorage, getStorage} from '@angular/fire/storage'

//Modulos Personalizados

import { PagesModule } from './pages/pages.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


	/*=============================================
	Modulo para Traduccion
	=============================================*/

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';


export function HttpLoaderFactory (http:HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
/*-----------------------------------------------------------------------------*/



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    provideStorage(() => getStorage()),
    TranslateModule.forRoot ({
      loader: {
         provide    : TranslateLoader,
         useFactory : HttpLoaderFactory,
         deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
