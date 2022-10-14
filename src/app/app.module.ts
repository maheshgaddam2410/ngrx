import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './store/reducers/counter.reducer';
import { UserComponent } from './user/user.component';
import { userFeatureKey, userReducer } from './store/reducers/user.reducer';
import { reducers } from './store/reducers';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    // StoreModule.forRoot({counter: counterReducer}),
    // StoreModule.forFeature(userFeatureKey, userReducer),
    // StoreModule.forRoot(userReducer),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
