import * as Matter from '../../../vendor/matter.min.js';

let Render = Matter.Render;

export class CanvasRender {
  constructor(engine, container) {
    this.container = container;
    this.containerRect = this.container.getBoundingClientRect();

    this.engine = engine;
    this.init = this.init.bind(this);

    this.init();
  }

  init() {
    this.render = Render.create({
      element: this.container,
      engine: this.engine,
      options: {
        pixelRatio: window.devicePixelRatio,
        width: this.containerRect.width,
        height: this.containerRect.height,
        // showPerformance: true,
        background: 'transparent',
        wireframes: false,
        showSleeping: false,
      },
    });
  }
}

