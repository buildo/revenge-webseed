import container from 'container';
import Hello from './Hello';
import { TransitionFunction } from 'state';
import { noLoaderLoading } from 'react-avenger/lib/loading';

type MapProps = {
  transition: TransitionFunction,
  formal?: boolean,
  user: string,
  doRefreshUser: () => Promise<void>
};

export default container(noLoaderLoading(Hello))({
  connect: ['formal'],
  queries: ['user'],
  commands: ['doRefreshUser'],
  mapProps: ({ transition, formal = false, user, doRefreshUser }: MapProps) => ({
    toggle: () => {
      transition({ formal: !formal });
    },
    formal,
    user,
    onRefreshClick: () => doRefreshUser()
  })
}) as any as React.ComponentType;
