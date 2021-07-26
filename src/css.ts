import {
  createElement,
  ReactHTML,
  CSSProperties,
  useDebugValue,
  FC,
} from 'react';

type StyledProps<P> = {
  [Key in keyof CSSProperties]:
    | CSSProperties[Key]
    | ((props: P) => CSSProperties[Key]);
};

export function styled<Tag extends keyof ReactHTML | FC>(tag: Tag) {
  return <P>(componentStyles: StyledProps<P>) => {
    return function CSSStyledComponent(props: P) {
      const style: CSSProperties = {};

      for (const key in componentStyles) {
        const value = componentStyles[key as keyof typeof componentStyles];

        if (!value) {
          continue;
        }

        // @ts-expect-error
        style[key] = typeof value === 'function' ? value(props) : value;
      }

      const mergedProps = {} as P;

      for (const key in props) {
        // If the key exists as a style, we don't want to add it to props,
        // we should just ignore it.
        // @ts-expect-error
        if (style[key]) {
          continue;
        }

        mergedProps[key] = props[key];
      }

      useDebugValue({ mergedProps, mergedStyled: style });

      return createElement<P>(tag, { ...mergedProps, style });
    };
  };
}
