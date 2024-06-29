import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackDropService {
  showBackdrop() {
    const backdrop = <HTMLDivElement>document.querySelector('#custom-backdrop');
    backdrop.style.display = 'block';
  }

  hideBackDrop() {
    const backdrop = <HTMLDivElement>document.querySelector('#custom-backdrop');
    backdrop.style.display = 'none';

    // const backdrops = <HTMLDivElement[]>(
    //   (<unknown>document.querySelectorAll('.custom-backdrop-class'))
    // );
    // //backdrop.style.display = 'none';
    // backdrops.forEach((backdrop) => {
    //   backdrop.style.display = 'none';
    // });
  }
}
