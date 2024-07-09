import type { CameraProps, DrawableFrame } from 'react-native-vision-camera';
export type {
  DrawableFrame,
  DrawableFrameProcessor,
  Frame,
  FrameProcessorPlugin,
  ReadonlyFrameProcessor,
} from 'react-native-vision-camera';

export type Position = { x: number; y: number };
export type PoseType = Record<
  | 'leftShoulderPosition'
  | 'rightShoulderPosition'
  | 'leftElbowPosition'
  | 'rightElbowPosition'
  | 'leftWristPosition'
  | 'rightWristPosition'
  | 'leftHipPosition'
  | 'rightHipPosition'
  | 'leftKneePosition'
  | 'rightKneePosition'
  | 'leftAnklePosition'
  | 'rightAnklePosition'
  | 'leftPinkyPosition'
  | 'rightPinkyPosition'
  | 'leftIndexPosition'
  | 'rightIndexPosition'
  | 'leftThumbPosition'
  | 'rightThumbPosition'
  | 'leftHeelPosition'
  | 'rightHeelPosition'
  | 'leftFootIndexPosition'
  | 'rightFootIndexPosition'
  | 'nosePosition'
  | 'leftEyeInnerPosition'
  | 'leftEyePosition'
  | 'leftEyeOuterPosition'
  | 'rightEyeInnerPosition'
  | 'rightEyePosition'
  | 'rightEyeOuterPosition'
  | 'leftEarPosition'
  | 'rightEarPosition'
  | 'leftMouthPosition'
  | 'rightMouthPosition',
  Position
>;

export interface PoseDetectionOptions {
  // @default stream
  mode?: 'stream' | 'single';
  // @default min
  performanceMode?: 'min' | 'max';
}

export type CameraTypes = {
  callback: (pose: PoseType, frame: DrawableFrame) => void;
  options?: PoseDetectionOptions;
} & CameraProps;
