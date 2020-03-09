class Widget {
  constructor(width, height) {
    this.height = height;
    this.width = width;
    this.$elem = null;
  }
  render() {
    console.log(this);

  }
}

class Button extends Widget {
  constructor(width, height, label) {
    super(width, height);
    this.label = label || 'Default'
    this.$elem = 'aaa'
  }
}


var a = new Button(100,40);
a.render()
