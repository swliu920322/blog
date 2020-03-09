var obj = {
  id: "awesome",
  cool: function coolFn() {
    console.log( this.id );
  } };
var id = "not awesome"
obj.cool(); // 酷
setTimeout( obj.cool, 100 ); // 不酷
