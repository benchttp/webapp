// Overrides create-react-app webpack configs without ejecting
// https://github.com/timarney/react-app-rewired

const { useBabelRc, override } = require('customize-cra')
// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc())
