const { shield } = require('graphql-shield')
const rules = require('./rules')

module.exports = shield({
  Mutation: {
    lockCompetitionLeaderboards: rules.isAuthenticated,
    unlockCompetitionLeaderboards: rules.isAuthenticated
  },
  Query: {
    getRelevantLeaderboard: rules.isAuthenticated,
    me: rules.isAuthenticated
  }
})