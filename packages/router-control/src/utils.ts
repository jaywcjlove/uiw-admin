import React from 'react';

export interface Routers {
  path: string;
  key?: string;
  redirect?: string;
  name?: string;
  icon?: string;
  component?: () => Promise<React.ReactNode>;
  models?: string[];
  routes?: Routers[];
}

export function getRouterList(data: Routers[] = [], treeList: Routers[] = []) {
  data.forEach((node) => {
    if (node.routes) {
      treeList = getRouterList(node.routes, treeList);
    } else if (node.path) {
      node.key = node.path;
      treeList.push(node);
    }
  });
  return treeList;
}
