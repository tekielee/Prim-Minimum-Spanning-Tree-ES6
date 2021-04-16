let graph = [
	[0, 3, 1, 6, 0, 0],
	[3, 0, 5, 0, 3, 0],
	[1, 5, 0, 5, 6, 4],
	[6, 0, 5, 0, 0, 2],
	[0, 3, 6, 0, 0, 6],
	[0, 0, 4, 2, 6, 0]
];

function primMST(graph) {
	let parent = [];
	let key = [];
	let visited = [];
	let len = graph.length;
	for(let i = 0; i < len; i++) {
		key[i] = Number.MAX_SAFE_INTEGER;
		visited[i] = false;
	}
	key[0] =0;
	parent[0] = 0;
	for(let count = 0; count < len - 1; count++) {
		let minValue = Number.MAX_SAFE_INTEGER;
		let minIndex = 0;
		for(let v = 0; v < len; v++) {
			if(visited[v] == false && key[v] < minValue) {
				minValue = key[v];
				minIndex = v;
			}
		}
		let u = minIndex;
		visited[u] = true;
		for(v = 0; v < len; v++) {
			if(graph[u][v] != 0 && visited[v] == false && graph[u][v] < key[v]) {
				parent[v] = u;
				key[v] = graph[u][v];
			}
		}
	}
	console.log('Edge	Weight')
	let minimumCost = 0;
	for(let i = 0; i < len; i++) {
		console.log(parent[i] + ' - ' + i + '	' + graph[i][parent[i]]);
		minimumCost += graph[i][parent[i]]
	}
	console.log('Minimu cost: ' + minimumCost);
}

primMST(graph);