import { resizeObserver } from "../../utils/observers";

export class AnimationInstance {
  constructor(container) {
    this.container = container;
    if (!this.container) {
      return;
    }

    this.timelines = [];

    this.resize = this.resize.bind(this);
    this.removeTimelines = this.removeTimelines.bind(this);
  }

  removeTimelines() {
    this.timelines.forEach((timeline) => {
      timeline.seek(0).kill();
      timeline = null;
    });
    this.timelines = [];
  }

  setTimelines() {
    const timeline = gsap.timeline({paused: true});
    this.timelines.push(timeline);
  }

  resize() {
    if (this.timelines.length) {
      this.removeTimelines();
    }

    this.setTimelines();
  }

  init() {
    if (!this.container) {
      return;
    }
    this.resize();
    resizeObserver.subscribe(this.resize);
  }
}
