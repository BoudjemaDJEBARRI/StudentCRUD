import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

import { HttpClientModule } from '@angular/common/http';

import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';// Ajouter si l'auth ne fonctionne pas

import { AngularFireModule } from '@angular/fire/compat';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FileListComponent } from './pages/file-list/file-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    FileuploadComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    FileListComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    // Very important : error solution NullInjectError
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    // AngularFireAuthModule,// Ajouter si l'auth ne fonctionne pas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
