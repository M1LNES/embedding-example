*** Short recapitulation about the tests ***

I'm currently executing testing scripts by "react-scripts test" using Jest. 

The problem occurs when i import "minimalized" version of external libraries from /assets/embedding.js

Sometimes the tests just freezed with error: "RangeError: Invalid string length". 

But most of the time, i just receive errors showed in "npm.txt". 

Firstly, i received error that ResizObserver is not defined, so i added him into testing file. I also defined his functions, but as you can see,
it is still saying that e.observe is not a function. It happens only when using thse components - when i tried to renedr common 
<div>, it work out normally. 

I also tried to switch from Jest to Mocha (shown in file pokus.test.js), but when i tried to import things from libraries such as chai, i got error:

Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/milan.janoch/Documents/example_app/node_modules/chai/chai.js from /Users/milan.janoch/Documents/example_app/src/tests/pokus.test.js not supported.
Instead change the require of chai.js in /Users/milan.janoch/Documents/example_app/src/tests/pokus.test.js to a dynamic import() which is available in all CommonJS modules.
(i did use import, but still i receive error that i use require)

It happens only during importing from that libraries - e.g. when i tried to import my own function or components, there were no issues.

I also tried directly testing <Vision> component from @sbks/prejson, but i still received that errors.

PACKAGE_URL and ACCESS_TOKEN (public api token) needs to be specified in .env file to download the minimilazed libraries versions.



