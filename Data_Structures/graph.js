/***************** GRAPHS  *********************/

// A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.

/* Adjancency List           VS              Adjancency Matrix  

- Can take up less space                     
- Faster to iterate over 
  all edges 
                                        - Faster to lookup specific edge

*/
class Graph{
  constructor(){
      this.adjacencyList = {};
  }

  // addVertex: accepts a vertex, adds a vertex to the adjacency list 
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // AddEdge: accepts two values, finds the adjacency list key of v1 and v2 and push to the array 

  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
}
  // RemoveEdge: accepts two values, reassigns the key of v1 and v2 to be an array that does not contain v1 & v2
removeEdge(vertex1,vertex2){
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
  );
}

  // RemoveVertex: accepts a vertex to remove, loops as long as there any other vertices in the adjacency list of that vertex. calls the removeEdge to remove the values. 
removeVertex(vertex){
  while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
  }
  delete this.adjacencyList[vertex]
}


  // end 
}