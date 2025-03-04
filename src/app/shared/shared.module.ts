import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatChipsModule,
  MatTableModule,
  MatTabsModule,
  MatInputModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSidenavModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSortModule,
  MatCheckboxModule,
  MatProgressSpinnerModule
   } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DeviceListCheckboxedComponent } from '../devices/device-list-checkboxed/device-list-checkboxed.component';
import { EnumAsStringPipe } from '../pipes/enum-as-string.pipe';
import { RolesAllowedDirective } from '../directives/roles-allowed.directive';


@NgModule({
  declarations: [DeviceListCheckboxedComponent, EnumAsStringPipe, RolesAllowedDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatTableModule,
    MatTabsModule,
    FlexLayoutModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSidenavModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatMomentDateModule,
    FormsModule,
    NgxMatSelectSearchModule,
    MatSortModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatTableModule,
    MatTabsModule,
    FlexLayoutModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    FormsModule,
    MatSortModule,
    DeviceListCheckboxedComponent,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    EnumAsStringPipe,
    RolesAllowedDirective
  ]
})
export class SharedModule { }
