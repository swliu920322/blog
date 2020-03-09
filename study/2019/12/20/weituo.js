var widget = {
  init(width, height) {
    this.width = width;
    this.height = height;
  },
  show() {
    console.log({ width: this.width, height: this.height })
  }
}

// var button = Object.create(widget);
var button = {
  cal: function cal() {
    const res = this.width + this.height
    console.log(res);
  }
}
Object.setPrototypeOf(button, widget);

var a = Object.create(button)
a.init(100, 40);
a.show();
a.cal()
