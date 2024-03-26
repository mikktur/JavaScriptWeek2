// Access User-Agent Client Hints headers
const ua = navigator.userAgent;
const isMobile = navigator.userAgentData.mobile;
const fullVersion = navigator.userAgentData.brands[0].version;
const platform = navigator.platform;
const architecture = navigator.userAgentData.platform;
const model = navigator.userAgentData.brands[0].brand;

// Log browser information
console.log('User-Agent:', ua);
console.log('Is Mobile:', isMobile);
console.log('Full Version:', fullVersion);
console.log('Platform:', platform);
console.log('Architecture:', architecture);
console.log('Model:', model);
