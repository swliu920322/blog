function Node(element) {
  this.element = element;
  this.prev = null;
  this.next = null;
}

function find(item) {
  var cur = this.head;
  while (cur.element !== item) {
    cur = cur.next;
  }
  return cur;
}

function findLast() {
  var cur = this.head;
  while (cur.next !== null) {
    cur = cur.next
  }
  return cur;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var cur = this.find(item);
  newNode.next = cur.next;
  newNode.prev = cur;
  cur.next = newNode;
  if (newNode.next && newNode.next.prev) {
    newNode.next.prev = newNode;
  }
}

function remove(item) {
  var cur = this.find(item);
  if (cur.next !== null) {
    cur.next.prev = cur.prev;
  }
  if (cur.prev !== null) {
    cur.prev.next = cur.next;
  }
  cur.next = null;
  cur.prev = null;
}

function display() {
  var cur = this.head;
  while (cur.next !== null) {
    cur = cur.next
  }
}

function displayReverse() {
  var cur = findLast();
  while (cur.prev !== null) {
    cur = cur.prev;
  }
}

function LTList() {
  this.head = new Node('head');
  this.find = find;
  this.findLast = findLast;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.displayReverse = displayReverse;
}

var a = new LTList();
a.insert('Apple', 'head');
a.insert('Banana', 'head');
a.insert('Orange', 'head');
console.log(a.find('Apple').prev.element);
console.log(a.find('Banana').prev.element);
