
function Tree() {
	this.root = null;
}

Tree.prototype.addValue = function(val) {
	var n = new Node(val)
	if (this.root == null) {
		this.root = n;
	} else {
		this.root.addNode(n);
	}
};

Tree.prototype.traverse = function() {
	this.root.visit();
}

Tree.prototype.search = function(val) {
	this.root.search(val)
}



function Node() {

	this.val = val;
	this.left = null;
	this.right = null; 
}

Node.prototype.addNode = function(n){
	if (n.val < this.val){
		if (this.left == null) {
			this.left = n;
		} else {
		this.left.addNode(n);
		}
	} else {
		if (this.right == null) {
			this.right = n;
		} else {
		this.right.addNode(n);
		}
	}
}

Node.prototype.visit = function() {
	if (this.left != null) {
		this.left.visit();
	} 
	console.log(this.val)
	if (this.right != null) {
		this.right.visit()
	}
}


Node.prototype.search = function(val) {
	if (this.val == val) {
		return this;
	} else if ( val < this.val && this.left != null) {
		return this.left.search(val);
	} else if (val > this.val && this.right != null) {
		return this.right.search(val);
	}
	return null;
} 
	

