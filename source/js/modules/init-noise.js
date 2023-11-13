import {resizeObserver} from '../utils/observers';

export class CanvasNoise {
  constructor(container) {
    this.canvas = container;
    if (!this.canvas) {
      return;
    }
    this.ctx = this.canvas.getContext('2d');
    this.wWidth = null;
    this.wHeight = null;
    this.preInit = this.preInit.bind(this);
  }

  createNoise() {
    const idata = this.ctx.createImageData(this.wWidth, this.wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.4) {
        buffer32[i] = 0xff202020;
      }
    }

    this.ctx.putImageData(idata, 0, 0);
  }

  preInit() {
    this.wWidth = this.canvas.offsetWidth;
    this.wHeight = this.canvas.offsetHeight;
    this.canvas.width = this.wWidth;
    this.canvas.height = this.wHeight;

    this.createNoise();
  }

  init() {
    resizeObserver.subscribe(this.preInit);
  }
}
