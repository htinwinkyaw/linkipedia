export const toggleState = (
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setState(!state);
};
