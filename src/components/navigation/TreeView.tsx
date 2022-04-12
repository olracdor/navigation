import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export interface RenderTree {
  id: string;
  name: string;
  children?: RenderTree[];
}
export interface RenderTreesState {
  renderTree: RenderTree[];
}

export const initialState: RenderTreesState = {
  renderTree: [{
    id: "",
    name: ""
  }]
};

interface RichObjectTreeViewProperties {
  tree: RenderTree[];
}

export default function RichObjectTreeView(props: RichObjectTreeViewProperties) {
  const {tree} = props;
  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {tree.map((option) => (
             renderTree(option)
          ))}
     
    </TreeView>
  );
}