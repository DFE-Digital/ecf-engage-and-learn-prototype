const express = require('express')
const router = express.Router()

router.post('/nqt1/it1/question-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var jugglingBalls = req.session.data['nqts']

  // Check whether the variable matches a condition
  if (jugglingBalls == "yes") {
    // Send user to next page
    res.redirect('/nqt1/it1/choose')
  }
  else {
    // Send user to ineligible page
    res.redirect('/nqt1/it1/no')
  }

})

router.post('/dev/ambition/guidance-question-answer', function (req, res) {
  const readGuidance = req.session.data['read-guidance']

  if (readGuidance === "yes") {
    res.redirect('/dev/ambition/guidance')
      } else if  (readGuidance === "no") {
      res.redirect('/dev/ambition/module-list')
    } else if  (!readGuidance) {
    res.redirect('/dev/ambition/guidance-question-error')
    }
})


router.post('/finish-session-answer', function (req, res) {
  const finishSession = req.session.data['finish-session']

  if (finishSession === "yes") {
    res.redirect('/it3/lesson-list-complete')
  } else if (finishSession === "discussion") {
    res.redirect('/it3/lesson-list-discussion')
  } else {
    res.redirect('/it3/lesson-list')
  }
})

router.post('/it4/create-username', function (req, res) {
  const email = req.session.data['email']

  if (email === "error") {
    res.redirect('/it4/sign-in-error')

  } else {
    res.redirect('/it4/create-username')
  }
})

router.post('/finish-session-answer-it4', function (req, res) {
  const finishSession = req.session.data['finish-session']

  if (finishSession === "yes") {
    res.redirect('/it4/lesson-list-complete')
  } else if (finishSession === "discussion") {
    res.redirect('/it4/lesson-list-todo')
  } else {
    res.redirect('/it4/lesson-list-inprogress')
  }
})

router.post('/guidance-question-answer', function (req, res) {
  const readGuidance = req.session.data['read-guidance']

  if (readGuidance === "yes") {
    res.redirect('/it4/guidance')
  } else {
    res.redirect('/it4/home')
  }
})

router.post('/dev/cip', function(req, res) {
  const email = req.session.data['email']

  if (email === "error") {
    res.redirect('/dev/sign-in-error')
  } else if (!email) {
    res.redirect('/dev/sign-in-error-none')
  } else if (email === "format") {
    res.redirect('/dev/sign-in-error-format')
  } else {
    res.redirect('/dev/cip')
  }
})

router.post('/nqt1-teachers/it1/cip', function(req, res) {
  const email = req.session.data['email']

  if (email === "error") {
    res.redirect('/nqt1-teachers/it1/sign-in-error')
  } else if (!email) {
    res.redirect('/nqt1-teachers/it1/sign-in-error-none')
  } else if (email === "format") {
    res.redirect('/nqt1-teachers/it1/sign-in-error-format')
  } else {
    res.redirect('/nqt1-teachers/it1/cip')
  }
})

router.post('/finish-session-answer-dev-ucl', function (req, res) {
  const finishSession = req.session.data['finish-session']

  if (finishSession === "yes") {
    res.redirect('/dev/ucl/lesson-list-complete')
  } else if (finishSession === "discussion") {
    res.redirect('/dev/ucl/lesson-list-todo')
  } else if (!finishSession) {
    res.redirect('/dev/ucl/lesson-error')
  } else {
    res.redirect('/dev/ucl/lesson-list-inprogress')
  }
})

router.post('/guidance-question-answer-dev', function (req, res) {
  const readGuidance = req.session.data['read-guidance']

  if (readGuidance === "yes") {
    res.redirect('/dev/guidance')
  } else {
    res.redirect('/dev/home')
  }
})



module.exports = router
