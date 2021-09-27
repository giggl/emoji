import React, {Component, MutableRefObject} from 'react';
import {FixedSizeGrid, FixedSizeGridProps, GridOnScrollProps} from 'react-window';
import {MathUtil} from '../utils/math';

export type EasingFn = (value: number) => number;

export interface Props extends FixedSizeGridProps {
	scrollToItem: number;
	easing?: EasingFn;
	onAnimationComplete: () => unknown;
	gridRef: MutableRefObject<FixedSizeGrid | null>;
	duration: number;
	itemSize: number;
}

export class AnimatedGrid extends Component<Props> {
	private scrollOffsetInitial = 0;
	private scrollOffsetFinal = 0;

	private animationStartTime = performance.now();

	componentDidMount() {
		if (this.props.scrollToItem) {
			this.initAnimation();
		}
	}

	componentDidUpdate(prevProps: Props) {
		if (this.props.scrollToItem !== prevProps.scrollToItem) {
			this.initAnimation();
		}
	}

	render() {
		const {scrollToItem, easing, onAnimationComplete, gridRef, duration, itemSize, ...props} =
			this.props;

		return <FixedSizeGrid {...props} ref={gridRef} onScroll={this.onScroll} />;
	}

	private animate() {
		requestAnimationFrame(() => {
			const {duration, easing} = this.props;
			const now = performance.now();
			const ellapsed = now - this.animationStartTime;
			const scrollDelta = this.scrollOffsetFinal - this.scrollOffsetInitial;
			const easedTime = (easing ?? MathUtil.easeInOut)(Math.min(1, ellapsed / duration));

			// prettier-ignore
			const scrollOffset = this.scrollOffsetInitial + (scrollDelta * easedTime);

			this.props.gridRef.current?.scrollTo({scrollTop: scrollOffset});

			if (ellapsed < duration) {
				this.animate();
			} else {
				this.animationStartTime = performance.now();
				this.scrollOffsetInitial = this.scrollOffsetFinal;
				this.props.onAnimationComplete();
			}
		});
	}

	private initAnimation() {
		if (this.animationStartTime) {
			return;
		}

		const {itemSize, scrollToItem} = this.props;

		this.scrollOffsetFinal = scrollToItem * itemSize;
		this.animationStartTime = performance.now();
		this.animate();
	}

	private readonly onScroll = ({scrollTop, scrollUpdateWasRequested}: GridOnScrollProps) => {
		if (!scrollUpdateWasRequested) {
			this.scrollOffsetInitial = scrollTop;
		}
	};
}
