import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {
  age = signal(45);
  name = signal('Ironman');

  heroDescription = computed(()=>{
    const description = `${ this.name() } - ${ this.age() }`;
    return description;
  })

  resetForm(): void {
    this.age.set(45);
    this.name.set('Ironman');
  }

  changeHero(): void {
    this.age.set(22);
    this.name.set('Spiderman');
  }

  getHeroDescription(): string {
    return `${ this.name() } - ${ this.age() }`;
  }

  changeAge(): void {
    this.age.set(60);
  }

}
