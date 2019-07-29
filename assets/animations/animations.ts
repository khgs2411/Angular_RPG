import {
  trigger,
  state,
  transition,
  animate,
  style
} from "@angular/animations";

export function animationInformation() {
  //https://angular.io/guide/transition-and-triggers
  // example on how to change states dynamically
  //   currentState = 'initial';
  // changeState() {
  //   this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  // }
  //   <h3>Change the div size</h3>
  //   <button (click)="changeState()">Change Size</button>
  //   <br />
  //   <div [@changeDivSize]=currentState></div>
  //   <br />
  //
  //
  // animations notes:
  //   any element created will be affected by the `trigger` with the void=> * type `transition`
  //   void : element before creation
  //   * default state (exmp: opacity is default 1)
  // animations: [
  //   trigger(
  //     "fade" first arg: name of animation ,
  //     second arg: array of operations  [
  //       transition("void => *", [
  //          style function is the css we want to create the element with - will then be overriden by the animate function
  //         style({ opacity: 0 }),
  //         animate can call the style function while creating the element before applying the default state
  //         second arg - style({ backgroundColor: "blue", opacity: 1 }) can be added to create an element with a blue background while animating and then move to default*/
  //         animate(2000)
  //       ])
  //       fadeout
  //       transition("* => void", [animate(2000, style({ opacity: 0 }))]),
  //       if we set the state of void to opacity: 0 - we don't have to set style opacity in the fade in transition
  //       state("void", style({ opacity: 0 }))
  //       or transition('void' <=> *) will do the action and undo once the element is gone frm default to void - removed
  //     ]
  //   )
  // ]
  /* states can define the css applie to an element affected by a specfic trigger

so this trigger can go from open to close with the transition function
animations: [
  trigger('openClose', [
    // ...
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green'
    })),
    transition('* => closed', [
      animate('1s')
    ]),
    transition('* => open', [
      animate('0.5s')
    ]),
  ]),
],
*/
}

export let fade = trigger("fade", [
  transition("void => *", [style({ opacity: 0 }), animate(1000)]),
  transition("* => void", [animate(500), style({ opacity: 0 })])
]);

export let expand = trigger("expand", [
  transition("void => *", [
    style({ width: "0%" }),
    animate(1000),
    style({ width: "100%" })
  ]),
  transition("* => void", [animate(500), style({ width: "0%" })])
]);
