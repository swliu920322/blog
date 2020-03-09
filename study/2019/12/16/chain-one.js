function Node(element) {
  this.element = element;
  this.next = null;
}

function find(element) {
  var cur = this.head;
  while (cur.element !== element) {
    cur = cur.next;
  }
  return cur;
}

function insert(newElement, element) {
  var cur = this.find(element);
  var newNode = new Node(newElement);
  newNode.next = cur.next;
  cur.next = newNode;
}

function display() {
  var cur = this.head;
  while(cur.next !== null) {
    console.log(cur.next.element);
    cur = cur.next;
  }
}

function findLast() {
  var cur = this.head;
  while (cur.next !== null) {
    cur = cur.next;
  }
  return cur;
}

function INode() {
  this.head = new Node('head');
  this.insert = insert;
  this.find = find;
  this.findLast = findLast;
  this.display = display;
  this.reverse = reverse;
}

function reverse() {
  var last = this.findLast();
}

var a = new INode();
a.insert('Apple', 'head');
a.insert('Banana', 'Apple');
a.insert('Orange', 'Apple');
a.display();
