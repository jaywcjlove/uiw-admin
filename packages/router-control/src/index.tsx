import React from 'react';
import { StaticContext } from 'react-router';
import * as H from 'history';
import { RouteComponentProps, Router, HashRouter } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history'
import dynamic from 'react-dynamic-loadable';

export * from './utils';

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

export interface match<Params extends { [K in keyof Params]?: string } = {}> {
  params: Params;
  isExact: boolean;
  path: string;
  url: string;
}

export type DefaultProps = React.PropsWithChildren<
    RouteComponentProps<any, StaticContext, H.LocationState>
  > & {
  routes: Routers[];
}

// wrapper of dynamic
const dynamicWrapper = (component: () => Promise<any>, modelFun: Promise<any>[]) =>
  dynamic({
    models: (modelFun || null) as any,
    // models: () =>
    //   models.map((m: string) => {
    //     return import(`../models/${m}.ts`).then((md) => {
    //       const modelData = md.default || md;
    //       store.model({ name: m, ...modelData });
    //     });
    //   }),
    component,
    LoadingComponent: () => <span>loading....</span>,
  });

export interface ControllerProps {
  /** 是否为 hash 路由 */
  isHashRouter?: boolean;
  routes?: Routers[];
  /**
   * 加载 models
   */
  loadModels?: (models: string[]) => Promise<any>[];
}

export default function Controller(props: ControllerProps = {}) {
  const { routes = [], loadModels = () => [] } = props;
  const Child = () => (
    <Switch>
      {routes.map((item, index) => {
        if (item.redirect) {
          return <Redirect key={index} from={item.path} to={item.redirect} />
        }
        if (!item.component) {
          return null;
        }
        const modelFun = loadModels(item.models || []);
        const Com = dynamicWrapper(item.component, modelFun) as any;
        return (
          <Route
            path={item.path}
            key={index}
            render={(childProps) => (
              <Com {...childProps} {...props} routes={item.routes || []} />
            )}
          />
        );
      })}
    </Switch>
  );
  return (
    <Router history={createBrowserHistory()}>
      {props.isHashRouter ? (
        <HashRouter>
          <Child />
        </HashRouter>
      ) : (
        <Child />
      )}
    </Router>
  );
}
