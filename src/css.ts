import { createElement, ReactHTML, CSSProperties, useDebugValue } from 'react';

type StyledProps<P> = {
  [Key in keyof CSSProperties]:
    | CSSProperties[Key]
    | ((props: P) => CSSProperties[Key]);
};

export function styled<Tag extends keyof ReactHTML>(tag: Tag) {
  return <P>(style: StyledProps<P>) => {
    return function CSSStyledComponent(props: P) {
      const mergedStyled: CSSProperties = {};

      for (const key in style) {
        const value = style[key as keyof typeof style];

        if (!value) {
          continue;
        }

        if (typeof value === 'function') {
          const result = value(props);
          // @ts-expect-error
          mergedStyled[key] = result;
        } else {
          // @ts-expect-error
          mergedStyled[key] = value;
        }
      }

      const mergedProps: P = {} as P;

      for (const key in props) {
        // @ts-expect-error
        if (mergedStyled[key]) {
          continue;
        }

        mergedProps[key] = props[key];
      }

      useDebugValue({ mergedProps, mergedStyled });

      return createElement(tag, { ...mergedProps, style: mergedStyled });
    };
  };
}
