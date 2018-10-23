const getState = scope => {
	return {
		store: {
			listOfItems: [
				{
					itemText: "Item 1",
					isDone: false
				},
				{
					itemText: "Item 2",
					isDone: false
				},
				{
					itemText: "Item 3",
					isDone: false
				}
			]
			/*demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]*/
		},
		actions: {
			addToDo: item => {
				let store = scope.state.store;
				store.listOfItems.push({
					itemText: item,
					isDone: false
				});
				scope.setState({ store });
			},
			deleteItem: index => {
				let store = scope.state.store;
				store.listOfItems.splice(index, 1);
				scope.setState({ store });
			},
			markDone: index => {
				let store = scope.state.store;
				store.listOfItems[index].isDone = true;
				scope.setState({ store });
			},
			markNotDone: index => {
				let store = scope.state.store;
				store.listOfItems[index].isDone = false;
				scope.setState({ store });
			}
			/*changeColor: (element, color) => {
				let store = scope.state.store;
				store.demo[element].background = color;
				scope.setState({ store });
			}*/
		}
	};
};

export default getState;
