# Changelog

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