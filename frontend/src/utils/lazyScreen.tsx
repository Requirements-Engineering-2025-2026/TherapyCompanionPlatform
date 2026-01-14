import React, { lazy, Suspense } from 'react';
import type {
  ComponentType,
  LazyExoticComponent,
  PropsWithChildren,
} from 'react';

type Importer<TProps extends object> = () => Promise<{
  default: ComponentType<TProps>;
}>;

type LazyScreenOptions<TProps extends object> = {
  wrapper?: ComponentType<PropsWithChildren>;
  fallback?: React.ReactNode;
  select?: (mod: any) => ComponentType<TProps>;
  disableSuspense?: boolean;
};

export function lazyScreen<TProps extends object = {}>(
  importer: Importer<TProps>,
  {
    wrapper: Wrapper,
    fallback = null,
    select,
    disableSuspense,
  }: LazyScreenOptions<TProps> = {},
) {
  const LazyComp: LazyExoticComponent<ComponentType<TProps>> = lazy(
    async () => {
      const mod = await importer();
      const Comp = select ? select(mod) : mod.default;

      if (!Comp) {
        throw new Error(
          '[lazyScreen] No component found. Ensure a default export or provide `select` for a named export.',
        );
      }

      return { default: Comp };
    },
  );

  const Screen: ComponentType<TProps> = (props: TProps) => {
    const content = Wrapper ? (
      <Wrapper>
        <LazyComp {...props} />
      </Wrapper>
    ) : (
      <LazyComp {...props} />
    );

    if (disableSuspense) return content;
    return <Suspense fallback={fallback}>{content}</Suspense>;
  };

  return Screen;
}
