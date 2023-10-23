export const useFlexBasis = (split) => {
  let flexBasis = 1 / 2
  switch (split) {
    case "3/4":
      flexBasis = 3 / 4;
      break;
    case "2/3":
      flexBasis = 2 / 3;
      break;
    case "1/1":
      flexBasis = 1;
      break;
    case "1/2":
      flexBasis = 1 / 2;
      break;
    case "1/3":
      flexBasis = 1 / 3;
      break;
    case "1/4":
      flexBasis = 1 / 4;
      break;
    case "1/5":
      flexBasis = 1 / 5;
      break;
    case "1/6":
      flexBasis = 1 / 6;
      break;

    default:
      break;
  }

  return {
    primaryFlexBasis: `${flexBasis * 100}%`,
    secondaryFlexBasis: `${100 - flexBasis * 100}%`
  }
}