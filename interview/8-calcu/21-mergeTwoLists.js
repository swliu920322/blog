var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};

var mergeTwoLists = function(l1, l2) {
  const head = new ListNode(-1);
  let prevListNode = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      prevListNode.next = l1;
      l1 = l1.next;
    } else {
      prevListNode.next = l2;
      l2 = l2.next;
    }
    prevListNode = prevListNode.next;
  }
  prevListNode.next = l1 || l2;
  return head.next;
}

