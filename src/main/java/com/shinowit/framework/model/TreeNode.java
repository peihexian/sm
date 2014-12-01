package com.shinowit.framework.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class TreeNode<T> {

	public T data;
	
	@JsonIgnore
	public TreeNode<T> parent;
	
	public List<TreeNode<T>> child_nodes=new ArrayList<TreeNode<T>>();
	
	public TreeNode(){}
	
	public TreeNode(T data){
		this.data=data;
	}
	
	public TreeNode<T> addChild(TreeNode<T> node){
		node.parent=this;
		this.child_nodes.add(node);
		return node;
	}
	
	
}
