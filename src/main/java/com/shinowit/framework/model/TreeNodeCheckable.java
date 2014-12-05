package com.shinowit.framework.model;

public class TreeNodeCheckable<T> extends TreeNode<T> {

    private boolean checked;

    public boolean isChecked() {
        return checked;
    }

    public void setChecked(boolean checked) {
        this.checked = checked;
    }
}
