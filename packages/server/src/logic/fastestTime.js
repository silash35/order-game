function FastestTime() {
  let fastestTime = undefined;

  this.get = () => fastestTime;
  this.update = (newTime) => {
    if (newTime <= 0) {
      return;
    }

    if (fastestTime == undefined || newTime < fastestTime) {
      fastestTime = newTime;
    }
  };
}

const fastestTime = new FastestTime();
export default fastestTime;
