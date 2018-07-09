import { NgModule } from '@angular/core'

// Material Modules
import {
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatTabsModule,
  MatMenuModule,
  MatExpansionModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatDialogModule,
  MatChipsModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatStepperModule,
  MatToolbarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material'

import { CustomErrorStateMatcherDirective } from './error-state-matcher'
import { NgrxMatSelectValueAccessor } from './mat-select-value-accessor'

const MODULES = [
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatTabsModule,
  MatMenuModule,
  MatExpansionModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatDialogModule,
  MatChipsModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatStepperModule,
  MatToolbarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
]

const COMPONENTS = [
  CustomErrorStateMatcherDirective,
  NgrxMatSelectValueAccessor
]

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class MaterialModule { }
