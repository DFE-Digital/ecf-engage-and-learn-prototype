const express = require('express')
const router = express.Router()


router.post('/finish-session-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var lessonPart4 = req.session.data['finish-session']

  // Check whether the variable matches a condition
  if (lessonPart4 == "yes") {
    // Send user to next page
    res.redirect('/it3/lesson-list-complete')
  }

  if (lessonPart4 == "discussion") {
    // Send user to next page
    res.redirect('/it3/lesson-list-discussion')
  }
  else {
    // Send user to ineligible page
    res.redirect('/it3/lesson-list')
  }

})
// Add your routes here - above the module.exports line

module.exports = router
