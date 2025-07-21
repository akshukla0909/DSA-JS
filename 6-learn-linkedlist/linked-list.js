// Single linked list, Double LL, Circular LL, Medium Hard problems

// Introduction to LinkedList, learn about struct, and how is node represented

// In js to build linked list we can can Class or Factory function

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;        
    }
}


class LinkedList {
    constructor(){
        this.head = null;
    }

    // append at end
    append(data){
      const newNode = new Node(data);

    //   first check if head is empty if yes assign it and return
      if(!this.head){
        this.head = newNode;
        return
      }

    // then check if current list have any ref for next - keep checking until last list which has next ref is null
    // as soon as you got assign it
      let current = this.head
      while(current.next){
        current = current.next;
      }
      current.next = newNode;
    }

    // read:- traverse and print linked list
    print(){
      let current = this.head
      let result = ""
      while(current){
        result += current.value + "-> ";
        current = current.next;
      }
      console.log(result + "null")
    }

    update(index, newValue){
      let current = this.head;
      let currentIndex = 0;
   
      while(current){
        if(currentIndex === index){
          current.value = newValue;
          return list.print();  //updated list return optional
        }
        currentIndex++;
        current = current.next;
      }

      console.log("index out of bound")
    }

    deleteAt(index){
      // this.head = null;   delete all
      let current = this.head;
      let prev = null;
      let currentIndex = 0;

      if(index === 0){
        this.head = this.head.next;
        return
      }

      // It will stop when it reaches the exact node to delete
      // At this point(when while loop stop), we have both prev and current
      // Just unlink the current, but set its next pointer to prev
      while(current && currentIndex < index ){
         prev = current
         current = current.next;
         currentIndex++;
        }

         if(!current){
          console.log("index out of bound")
         }

        // Important point to remember: prev.next was pointing to the node to delete
        // So we update prev.next to current.next
        prev.next = current.next;

    }

    searchAt(index){
     let current = this.head;

     let currentIndex = 0;
     while(current){
       if(currentIndex === index){
        return current.value 
      }
      current = current.next;
      currentIndex++;
     }

     console.log("Index out of bound")
    }

    length(){
      let current = this.head;
      let count = 0;
      while(current){
        current = current.next
        count++
      }
      console.log(count, "is length")
      return count;
    }

}

const list = new LinkedList()

list.append(12)
list.append(14)
list.append("Aman")
list.print()
list.length()
list.searchAt(2)
list.deleteAt(1);


