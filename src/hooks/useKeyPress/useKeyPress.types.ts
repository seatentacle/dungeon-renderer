export type UseKeyPsessProps = {
  targetKey: string;
  onPressDown?: () => void;
  onPressUp?: () => void;
};

export type UseKeyPress = (
  targetKey: string,
  onPressDown?: () => void,
  onPressUp?: () => void,
) => boolean;
