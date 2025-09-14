// time string
const timeCalculation = (time) => {
  const day = parseInt(time / 86400);

  let remainingSecond = time % 86400;

  const hour = parseInt(remainingSecond / 3600);

  remainingSecond = remainingSecond % 3600;

  const minute = parseInt(remainingSecond / 60);

  remainingSecond = remainingSecond % 60;

  console.log(day, hour, minute, remainingSecond);
};

timeCalculation(464626);
