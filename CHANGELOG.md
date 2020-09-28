# Changelog

## [1.1.2] - 2020-09-23

### Changed
- Allow sendLocalAudio:false

## [1.1.1] - 2020-09-17

### Fixed
- Call onTimedOut at end of timeout
- Center Suggested Responses on tablet-size layout
- Adjust bottom limit of OnScreenInfo to avoid overlap with user question text

### Changed
- Add 'video' to example privacy policy

## [1.1.0] - 2020-09-11

### Changed
- Colors for Push-to-Talk button are now set in the theme
  - see example-app/src/theme.ts `// PTT animation` and `// PTT desktop colors & gradients`
- PDF Downloads can include SessionId
  - see example-app/src/app/downloadPdf.ts
- Feedback form remembers user input
- Improvements to example-app home page

### Fixed
- Bug causing Escalation Form to show when `config.showEscalationForm=false`
- PDF download bug on Android
- Passcode Overlay scroll bug

## [1.0.0] - 2020-09-02

### Added
- Generic analytics implementation - no longer reliant on Google Analytics (see `config.analytics`)
- Add `postinstall` script to build packages
- Increased test coverage

### Changed
- Update `uneeq-js` to `0.30`
- Improve onscreen-information layout
- rename CONVERSATION_ID to PERSONA_ID in example-app
  - If you were to overwrite your own `config.ts` with `example-app/src/config.ts` you would also need to update your `.env` file to specify  `REACT_APP_UNEEQ_PERSONA_ID`
- make privacy policy a blank template

### Docs
- Improve avatarPosition docs in config.js

### Fixed
- Layout bugs in Home and Passcode 
- Saved items state not updating

### Removed
- Google Analytics - Generic analytics implementation added

### Tidy
- Merge & deduplicate OnScreenInfo translations
- Update packages and readme to reflect new repo location
- License field in package.json files
- Use to generic avatar name "Digital Human"