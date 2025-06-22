function delayMessage(message, time) {
  return new Promise((resolve, reject) => {
    if (!message || isNaN(time)) {
      return reject("Invalid message or time input");
    }

    setTimeout(() => {
      resolve({ message, delay: `${time}ms` });
    }, time);
  });
}

module.exports = delayMessage;
