import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  templateUrl: './form.component.html',
  styles: ``
})
export class CategoryFormComponent{

  ngOnInit(): void {
  }
  
  private fb = inject(FormBuilder)
  categoryForm = this.fb.group({
    id: [null],
    name: ["", [Validators.required, Validators.minLength(3)]],
    description: ["", Validators.required]

  })

  @Output() back = new EventEmitter();

  onSubmit() {
    console.log('Botão salvar clicado no CategoryFormComponent')
    // this.save.emit(this.categoryForm.value)
  }

  onBack() {
    this.back.emit();
  }

}
