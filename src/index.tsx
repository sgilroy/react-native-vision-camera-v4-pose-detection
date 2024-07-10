import { forwardRef, type ForwardedRef } from 'react';
import {
  Camera as VisionCamera,
  useSkiaFrameProcessor,
} from 'react-native-vision-camera';
import { useRunOnJS } from 'react-native-worklets-core';
import { detectPose } from './detectPose';
import type {
  CameraTypes,
  DrawableFrame,
  PoseType,
  DrawableFrameProcessor,
} from './types';

export { detectPose } from './detectPose';
export type { PoseType } from './types';

export const Camera = forwardRef(function Camera(
  props: CameraTypes,
  ref: ForwardedRef<any>
) {
  const { callback, device, options } = props;
  // @ts-ignore
  const useWorklets = useRunOnJS(
    (data: PoseType, frame: DrawableFrame): void => {
      callback(data, frame);
    },
    []
  );
  const frameProcessor: DrawableFrameProcessor = useSkiaFrameProcessor(
    (frame: DrawableFrame): void => {
      'worklet';
      const data: PoseType = detectPose(frame, options);
      // @ts-ignore
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useWorklets(data, frame);
    },
    []
  );
  return (
    !!device && (
      <VisionCamera ref={ref} frameProcessor={frameProcessor} {...props} />
    )
  );
});
