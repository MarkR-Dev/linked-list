import LinkedList from "./linked-list.mjs";

const list = new LinkedList();

list.append(2);
list.prepend(1);
console.log(list.getTail());
