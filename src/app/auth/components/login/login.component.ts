import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Theme } from '@common/models';
import { ThemeService } from '@common/services';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public assets: string = environment.assets;
  public loginFormGroup!: FormGroup;
  public flgRemember: boolean = false;

  constructor(
    private fb: FormBuilder,
    private readonly themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.createFormLogin();
  }

  private createFormLogin(): void {
    this.loginFormGroup = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  public changeTheme(): void {

    const theme: Theme = new Theme(
      '#4527a0', '#0277bd', '#00c853'
    );

    this.themeService.setTheme( theme );
  }
}
