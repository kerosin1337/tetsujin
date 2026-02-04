import { type FC, memo, type NamedExoticComponent, Suspense } from 'react';
import { Spin } from 'antd';

export const LoadComponent = <Props extends object>(Component: FC<Props>): NamedExoticComponent<Props> =>
  memo((props) => (
    <Suspense fallback={<Spin />}>
      <Component {...props} />
    </Suspense>
  ));
