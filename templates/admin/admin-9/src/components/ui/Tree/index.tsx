import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, File } from 'lucide-react';

export interface TreeNode {
  label: string;
  children?: TreeNode[];
}

export function Tree({ data }: { data: TreeNode[] }) {
  return (
    <div className="space-y-1 pl-1">
      {data.map((node, i) => (
        <TreeItem key={i} node={node} />
      ))}
    </div>
  );
}

function TreeItem({ node }: { node: TreeNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!node.children && node.children.length > 0;

  return (
    <div className="space-y-1">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1 rounded text-xs hover:bg-accent cursor-pointer transition-colors"
      >
        {hasChildren ? (
          isOpen ? <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
        ) : (
          <span className="w-3.5"></span>
        )}
        {hasChildren ? (
          <Folder className="h-4 w-4 text-primary" />
        ) : (
          <File className="h-4 w-4 text-muted-foreground" />
        )}
        <span className="font-medium text-foreground">{node.label}</span>
      </div>
      {isOpen && hasChildren && (
        <div className="pl-4 border-l border-border/80 ml-3.5 space-y-1">
          {node.children!.map((child, index) => (
            <TreeItem key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}
