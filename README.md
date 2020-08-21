# Packages
TODO
# Install, Run and Build
TODO
# Test
TODO
## testState
Allows the welcome & initialisation to be skipped to go directly to a certain state

* Base [testState=%7B%7D](http://localhost:3000/?testState=%7B%7D)
* Loading [testState=%7B%22ready%22%3Afalse%2C%22loadingPercentage%22%3A40%7D](http://localhost:3000/?testState=%7B%22ready%22%3Afalse%2C%22loadingPercentage%22%3A40%7D)
* Busy [testState=%7B%22unavailable%22%3Atrue%7D](http://localhost:3000/?testState=%7B%22unavailable%22%3Atrue%7D)
* Declined [testState=%7B%22permissionAllowed%22%3Afalse%7D](http://localhost:3000/?testState=%7B%22permissionAllowed%22%3Afalse%7D)
* Transcript [testState=%7B%22transcriptOpen%22%3Atrue%2C%22transcript%22%3A%5B%7B%22message%22%3A%22Does%20this%20look%20right%3F%22%2C%22time%22%3A%221970-01-01T00%3A00%3A00.000Z%22%2C%22user%22%3Afalse%7D%2C%7B%22message%22%3A%22Yes%22%2C%22time%22%3A%221970-01-01T00%3A00%3A00.000Z%22%2C%22user%22%3Atrue%7D%5D%7D](http://localhost:3000/?testState=%7B%22transcriptOpen%22%3Atrue%2C%22transcript%22%3A%5B%7B%22message%22%3A%22Does%20this%20look%20right%3F%22%2C%22time%22%3A%221970-01-01T00%3A00%3A00.000Z%22%2C%22user%22%3Afalse%7D%2C%7B%22message%22%3A%22Yes%22%2C%22time%22%3A%221970-01-01T00%3A00%3A00.000Z%22%2C%22user%22%3Atrue%7D%5D%7D)
* Transcript Minimised [testState=%7B%22transcriptHasOpened%22%3Atrue%7D](http://localhost:3000/?testState=%7B%22transcriptHasOpened%22%3Atrue%7D)
* User Question [testState=%7B%22question%22%3A%22Does%20this%20look%20right%3F%22%7D](http://localhost:3000/?testState=%7B%22question%22%3A%22Does%20this%20look%20right%3F%22%7D)
* With Saved Items [testState=%7B%22savedItems%22%3A%5B0%5D%7D](http://localhost:3000/?testState=%7B%22savedItems%22%3A%5B0%5D%7D)
* Input Error [testState=%7B%22noInput%22%3Atrue%7D](http://localhost:3000/?testState=%7B%22noInput%22%3Atrue%7D)
* With Saved Items and Minimised Transcript [testState=%7B%22savedItems%22%3A%5B0%5D%2C%22transcriptHasOpened%22%3Atrue%7D](http://localhost:3000/?testState=%7B%22savedItems%22%3A%5B0%5D%2C%22transcriptHasOpened%22%3Atrue%7D)
* Text Input [testState=%7B%22inputMode%22%3A%22text%22%7D](http://localhost:3000/?testState=%7B%22inputMode%22%3A%22text%22%7D)
* End Session [testState=%7B%22endConfirmOpen%22%3Atrue%7D](http://localhost:3000/?testState=%7B%22endConfirmOpen%22%3Atrue%7D)
* Escalation Form [testState=%7B%22escalationFormOpen%22%3Atrue%7D](http://localhost:3000/?testState=%7B%22escalationFormOpen%22%3Atrue%7D)
* Feedback [testState=%7B%22feedbackOpen%22%3Atrue%7D](http://localhost:3000/?testState=%7B%22feedbackOpen%22%3Atrue%7D)
* Settings [testState=%7B%22settingsOpen%22%3Atrue%2C%22selectedDevices%22%3A%7B%7D%2C%22devices%22%3A%7B%22audioInput%22%3A%5B%5D%2C%22videoInput%22%3A%5B%5D%2C%22audioOutput%22%3A%5B%5D%7D%7D](http://localhost:3000/?testState=%7B%22settingsOpen%22%3Atrue%2C%22selectedDevices%22%3A%7B%7D%2C%22devices%22%3A%7B%22audioInput%22%3A%5B%5D%2C%22videoInput%22%3A%5B%5D%2C%22audioOutput%22%3A%5B%5D%7D%7D)
* Menu [testState=%7B%22menuOpen%22%3Atrue%7D](http://localhost:3000/?testState=%7B%22menuOpen%22%3Atrue%7D)
* On-screen Info [testState=%7B%22onScreenInfo%22%3A%7B%22information%22%3A%5B%7B%22type%22%3A%22markdown%22%2C%22markdown%22%3A%22%23%20Heading%5CnParagraph%5Cn*%20Bullet%20%5Blink%5D(%2F)%22%7D%5D%7D%7D](http://localhost:3000/?testState=%7B%22onScreenInfo%22%3A%7B%22information%22%3A%5B%7B%22type%22%3A%22markdown%22%2C%22markdown%22%3A%22%23%20Heading%5CnParagraph%5Cn*%20Bullet%20%5Blink%5D(%2F)%22%7D%5D%7D%7D)
* Expanded On-screen Info [testState=%7B%22onScreenInfo%22%3A%7B%22information%22%3A%5B%7B%22type%22%3A%22markdown%22%2C%22markdown%22%3A%22%23%20Heading%5CnParagraph%5Cn*%20Bullet%20%5Blink%5D(%2F)%22%7D%5D%7D%2C%22expandedInfo%22%3Atrue%7D](http://localhost:3000/?testState=%7B%22onScreenInfo%22%3A%7B%22information%22%3A%5B%7B%22type%22%3A%22markdown%22%2C%22markdown%22%3A%22%23%20Heading%5CnParagraph%5Cn*%20Bullet%20%5Blink%5D(%2F)%22%7D%5D%7D%2C%22expandedInfo%22%3Atrue%7D)
* Suggested Responses [testState=%7B%22onScreenInfo%22%3A%7B%22suggestedResponses%22%3A%7B%22id%22%3A1%2C%22mainTitle%22%3A%22You%20can%20ask%20me%20about%3A%22%2C%22suggestedResponses%22%3A%5B%7B%22label%22%3A%22Suggestion%201%22%2C%22utterance%22%3A%221%22%7D%2C%7B%22label%22%3A%22Suggestion%202%22%2C%22utterance%22%3A%222%22%7D%2C%7B%22label%22%3A%22Suggestion%203%22%2C%22utterance%22%3A%223%22%7D%5D%7D%7D%7D* ](http://localhost:3000/?testState=%7B%22onScreenInfo%22%3A%7B%22suggestedResponses%22%3A%7B%22id%22%3A1%2C%22mainTitle%22%3A%22You%20can%20ask%20me%20about%3A%22%2C%22suggestedResponses%22%3A%5B%7B%22label%22%3A%22Suggestion%201%22%2C%22utterance%22%3A%221%22%7D%2C%7B%22label%22%3A%22Suggestion%202%22%2C%22utterance%22%3A%222%22%7D%2C%7B%22label%22%3A%22Suggestion%203%22%2C%22utterance%22%3A%223%22%7D%5D%7D%7D%7D* )