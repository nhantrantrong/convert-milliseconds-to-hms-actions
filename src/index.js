
const core = require('@actions/core')

function msToHMS(ms) {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    // 2- Extract hours:
    let hours = seconds / 3600; // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    let minutes = seconds / 60; // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    // Convert output value with hh:mm:ss format
    hours = parseInt(hours).toString();
    hours = hours.length > 1 ? hours : `0${hours}`;
    minutes = parseInt(minutes).toString();
    minutes = minutes.length > 1 ? minutes : `0${minutes}`;
    seconds = parseInt(seconds).toString();
    seconds = seconds.length > 1 ? seconds : `0${seconds}`;
    return hours + ":" + minutes + ":" + seconds;
}

try {
    const inputMilliseconds = core.getInput('inputMilliseconds');
    console.log(`The input millisecond: ${inputMilliseconds}`);

    const hmsFormatted = msToHMS(parseInt(inputMilliseconds))
    core.setOutput("hmsFormatted", hmsFormatted);
    console.log(`The formated value: ${hmsFormatted}`)

} catch (error) {
    core.setFailed(error.message);
}