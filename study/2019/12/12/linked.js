
function Node(element) {
  this.element = element;
  this.next = null;
}


function find(item) {
  var curNode = this.head;
  while(curNode.element !== item) {
    curNode = curNode.next;
  }
  return curNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var curNode = this.find(item);
  newNode.next = curNode.next;
  curNode.next = newNode;
}

function findPrev(item) {
  var cur = this.head;
  while(cur.next.element !== item && cur.next !== null) {
    cur = cur.next;
  }
  return cur;
}

function remove(item) {
  var prev = this.findPrev(item);
  if (prev.next !== null) {
    prev.next = prev.next.next;
  }
}


function display() {
  var cur = this.head;
  while(cur.next !== null) {
    console.log(cur.next.element);
    cur = cur.next;
  }
}

function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findPrev = findPrev;
  this.display = display;
}

var fruits = new LList();
fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.display();
fruits.remove('Apple');
fruits.display();
