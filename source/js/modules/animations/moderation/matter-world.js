import * as Matter from '../../../vendor/matter.min.js';
import {CanvasRender} from './canvas-renderer.js';
import {resizeObserver} from '../../../utils/observers.js';
import {pageScroller} from '../../scroll-smoother/init-scroll-trigger.js';

let Engine = Matter.Engine;
let Bodies = Matter.Bodies;
let Body = Matter.Body;
let Composite = Matter.Composite;
let MouseConstraint = Matter.MouseConstraint;
let Mouse = Matter.Mouse;
let Render = Matter.Render;
let Runner = Matter.Runner;
let Sleeping = Matter.Sleeping;

const wallsOptions = {
  isStatic: true,
  friction: 1,
  restitution: 1,
  thickness: 200,
  fillStyle: '#060a19',
};

const bricks = [
  {
    url: './img/content/moderation-patterns/pic-1.png',
    x: 425,
    y: 100,
    width: 425,
    height: 147,
    borderRadius: 309,
  },
  {
    url: './img/content/moderation-patterns/pic-2.png',
    x: 750,
    y: 30,
    width: 235,
    height: 80,
    borderRadius: 168,
  },
  {
    url: './img/content/moderation-patterns/pic-3.png',
    x: 300,
    y: 0,
    width: 345,
    height: 117,
    borderRadius: 245,
  },
  {
    url: './img/content/moderation-patterns/pic-4.png',
    x: 800,
    y: 0,
    width: 411,
    height: 137,
    borderRadius: 290,
  },
  {
    url: './img/content/moderation-patterns/pic-5.png',
    x: 1100,
    y: 200,
    width: 209,
    height: 71,
    borderRadius: 149,
  },
  {
    url: './img/content/moderation-patterns/pic-6.png',
    x: 500,
    y: 0,
    width: 196,
    height: 67,
    borderRadius: 139,
  },
  {
    url: './img/content/moderation-patterns/pic-7.png',
    x: 1200,
    y: 0,
    width: 298,
    height: 101,
    borderRadius: 212,
  },
  {
    url: './img/content/moderation-patterns/pic-8.png',
    x: 400,
    y: 0,
    width: 215,
    height: 73,
    borderRadius: 152,
  }
];

const circles = [
  {
    x: 50,
    y: 200,
    radius: 30,
  },
  {
    x: 300,
    y: 100,
    radius: 12,
  },
  {
    x: 500,
    y: 20,
    radius: 50,
  },
  {
    x: 800,
    y: 300,
    radius: 17,
  },
  {
    x: 1400,
    y: 100,
    radius: 20,
  }
];

const borderRadiusCoefficient = 4.2;
const mobileCoefficient = 1.5;
const desktopVp = 1440;

export class MatterWorld {
  constructor() {
    this.container = document.querySelector('[data-animation="moderation"]');
    if (!this.container) {
      return;
    }
    this.canvasContainer = this.container.querySelector('[data-animation-canvas]');

    this.vp767 = window.matchMedia('(max-width: 767px)');
    this.pixelRate = () => this.vp767.matches ? (window.innerWidth / desktopVp) * mobileCoefficient : (window.innerWidth / desktopVp);
    this.bodies = [];

    this.init = this.init.bind(this);
    this._addTextureBlock = this._addTextureBlock.bind(this);
    this._addBodies = this._addBodies.bind(this);
    this.stop = this.stop.bind(this);
    this.run = this.run.bind(this);

    resizeObserver.subscribe(this.init);
    this.init();
  }

  _setMouseControl() {
    this.mouse = Mouse.create(this.canvasRender.render.canvas);
    this.mouseConstraint = MouseConstraint.create(this.engine, {
      mouse: this.mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(this.world, this.mouseConstraint);
  }

  _addTextureBlock(options) {
    const body = Bodies.rectangle(options.x * this.pixelRate(), (options.y - this.size.height / 2), this.pixelRate() * options.width, this.pixelRate() * options.height, {
      chamfer: {radius: options.borderRadius * this.pixelRate() / borderRadiusCoefficient},
      render: {
        sprite: {
          texture: options.url,
          xScale: 0.5 * this.pixelRate(),
          yScale: 0.5 * this.pixelRate(),
        },
      },
      angle: Math.PI * gsap.utils.random(0, 0.15),
    });
    Composite.add(this.world, body);
    // Body.setAngularSpeed(body, gsap.utils.random(-0.05, 0.05));
    this.bodies.push(body);
  }

  _addCircle(options) {
    const body = Bodies.circle(options.x * this.pixelRate(), (options.y - this.size.height / 2), options.radius * this.pixelRate(), {
      render: {
        fillStyle: '#FFFFFF',
      },
    });
    Composite.add(this.world, body);
    this.bodies.push(body);
  }

  _addBodies() {
    // add объявления
    bricks.forEach((brick) => this._addTextureBlock(brick));


    // add walls
    Composite.add(this.world, [
      // top
      Bodies.rectangle(this.size.width / 2, -this.size.height / 2 - wallsOptions.thickness / 2, this.size.width, wallsOptions.thickness, wallsOptions),
      // right
      Bodies.rectangle(this.size.width + wallsOptions.thickness / 2 + 1, 0, wallsOptions.thickness, this.size.height * 2, wallsOptions),
      // bottom
      Bodies.rectangle(this.size.width / 2, this.size.height + wallsOptions.thickness / 2, this.size.width, wallsOptions.thickness, wallsOptions),
      // left
      Bodies.rectangle(-wallsOptions.thickness / 2 - 1, 0, wallsOptions.thickness, this.size.height * 2, wallsOptions)
    ]);

    // add circles
    circles.forEach((circle) => this._addCircle(circle));
  }

  _clearMatter() {
    Render.stop(this.canvasRender.render);
    // World.clear(this.engine.world);
    Engine.clear(this.engine);
    this.canvasRender.render.canvas.remove();
    this.canvasRender.render.canvas = null;
    this.canvasRender.render.context = null;
    this.canvasRender.render.textures = {};
    this.canvasRender = null;
    this.bodies = [];
  }

  setSleeping(state) {
    this.bodies.map((body) => Sleeping.set(body, state));
  }

  down() {
    this.world.gravity.y = 1;
    this.bodies.map((body) => Body.setAngularSpeed(body, gsap.utils.random(-0.05, 0.05)));
  }

  up() {
    this.world.gravity.y = -1;
    this.bodies.map((body) => Body.setAngularSpeed(body, gsap.utils.random(-0.05, 0.05)));
  }

  stop() {
    Runner.stop(this.engine);
    Render.stop(this.canvasRender.render);
  }

  run() {
    Runner.run(this.engine);
    Render.run(this.canvasRender.render);
  }

  init() {
    if (this.canvasRender) {
      this._clearMatter();
      this.toggleTrigger.kill();
    }
    this.engine = Engine.create({enableSleeping: true});
    this.engine.timing.timeScale = 0.65;
    this.world = this.engine.world;
    this.canvasRender = new CanvasRender(this.engine, this.canvasContainer);
    this.size = this.canvasRender.containerRect;

    this._addBodies();
    this._setMouseControl();
    Runner.run(this.engine);
    Render.run(this.canvasRender.render);
    this.setSleeping(true);
    this.stop();
    Runner.isFixed = true;
    Runner.delta = 50;

    this.toggleTrigger = gsap.timeline();
    ScrollTrigger.create({
      scroller: pageScroller,
      trigger: this.container,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => this.run(),
      onEnterBack: () => this.run(),
      onLeave: () => this.stop(),
      onLeaveBack: () => this.stop(),
      animation: this.toggleTrigger,
    });
  }
}
