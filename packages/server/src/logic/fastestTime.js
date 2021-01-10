function FastestTime() {
  let fastestTime = 9999999999;

  this.get = () => fastestTime;
  this.update = (newTime) => {
    if (newTime < fastestTime) {
      fastestTime = newTime;
    }
  };
}

const fastestTime = new FastestTime();
export default fastestTime;
