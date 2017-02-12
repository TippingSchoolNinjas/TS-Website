import {
  Input,
  Component,
  ViewEncapsulation,
  ViewContainerRef
} from '@angular/core';

@Component({
  
  selector: 'ng2-tab',
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`,
  styleUrls:['ng2-tab.component.css']
})
export class Ng2TabComponent {
  @Input('selected') 
  selectedIndex: string;
  @Input('selected-index-class')
  selectedIndexClass: string = 'selected';
  @Input('selected-contents-class')
  selectedContentsClass: string = 'selected';
  @Input('selected-circle-class')
  selectedCircleClass: string = 'selected';
  @Input('abc')
  abc: string = 'selected';

  

  el: HTMLElement;
  indexEls:  HTMLElement[];
  contentsEls: HTMLElement[];
  circleEls :  HTMLElement[];
  abcEls : HTMLElement[];

  constructor(private viewContainer: ViewContainerRef) {
    this.el = this.viewContainer.element.nativeElement;
    
  }

  ngAfterViewInit() {
    this.indexEls = [].slice.call(this.el.querySelectorAll('[index]'));
    this.contentsEls = [].slice.call(this.el.querySelectorAll('[contents]'));
    this.circleEls = [].slice.call(this.el.querySelectorAll('[circle]'));
    this.abcEls = [].slice.call(this.el.querySelectorAll('[pops]'));


    this.selectTab(this.selectedIndex);
    this.indexEls.forEach(el => {
      el.addEventListener('click', () => {
        this.selectTab(el.getAttribute('index'));
      })
    })
     this.circleEls.forEach(el => {
      el.addEventListener('click', () => {
        this.selectTab(el.getAttribute('circle'));
      })
    })

this.abcEls.forEach(el => {
      el.addEventListener('click', () => {
        this.selectTab(el.getAttribute('pops'));
      })
    })

  }

  selectTab(id) {
    console.log(id);
    id = id || this.indexEls[0].getAttribute('index');
    
    console.log(id);
    console.log('1');

    


    this.indexEls.forEach(el => {
      this.removeClass(el, this.selectedIndexClass);
      if (el.getAttribute('index') == id) {
        this.addClass(el, this.selectedIndexClass);
        console.log(this.el);
        console.log('2');
      }
    })

    this.circleEls.forEach(el => {
      this.removeClass(el, this.selectedCircleClass);
      id = id || this.circleEls[0].getAttribute('circle');
      console.log(id);
      console.log('3');
      if (el.getAttribute('circle') == id) {
        console.log(el.getAttribute('circle'));
        console.log('4');
        this.addClass(el, this.selectedCircleClass);
        console.log(this.el);
        console.log('5');
      }
    })

    this.contentsEls.forEach(el => {
      el.style.display = 'none';
      this.removeClass(el, this.selectedContentsClass);
      if (el.getAttribute('contents') == id) {
        el.style.display = '';
        this.addClass(el, this.selectedContentsClass);
      }
    })

     this.abcEls.forEach(el => {
      this.removeClass(el, this.abc);
      if (el.getAttribute('pops') == id) {
        this.addClass(el, this.abc);
        console.log(this.el);
        console.log('2');
      }
    })

  }

  private addClass(el, str) {
    let classNames = (el.className ||'').split(' ');
    classNames.push(str);
    el.className = classNames.join(' ');
  }

  private removeClass(el, str) {
    el.className = (el.className ||'').replace(
      new RegExp('[ ]*'+ str), ''
    );
  }
}