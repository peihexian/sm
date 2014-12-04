package com.shinowit.framework.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

public class TreeNode<T> {

	private T data;
	
	@JsonIgnore
	private TreeNode<T> parent;
	
	private List<TreeNode<T>> children=new ArrayList<TreeNode<T>>();
	
	public TreeNode(){}
	
	public TreeNode(T data){
		this.data=data;
	}
	
	public TreeNode<T> addChild(TreeNode<T> child){
		child.parent=this;
		this.children.add(child);
		return child;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public TreeNode<T> getParent() {
		return parent;
	}

	public void setParent(TreeNode<T> parent) {
		this.parent = parent;
	}

	public List<TreeNode<T>> getChildren() {
		return children;
	}

	public void setChildren(List<TreeNode<T>> children) {
		this.children = children;
	}
}
