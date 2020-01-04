import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, 
MatCardModule, 
MatButtonModule, 
MatMenuModule, 
MatToolbarModule, 
MatIconModule,
MatSidenavModule, 
MatListModule} from '@angular/material';

const myModule = [
MatFormFieldModule, 
MatCardModule, 
MatButtonModule, 
MatMenuModule, 
MatToolbarModule, 
MatIconModule,
MatSidenavModule, 
MatListModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,  myModule
  ],
  exports:[myModule]
})

export class MaterialModule { }
