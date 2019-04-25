define( 'templates.pyrkon', [], function() { 'use strict'; return {
    "questionBox" : '<div class="pyrkon-question-box"><h1 class="pyrkon-question-box__header">Pyrkon Scavenger Hunt</h1><section class="pyrkon-question-box__body"><h2 class="pyrkon-question-box__title">{{question}}<span class="pyrkon-question-box__close"></span></h2><form class="pyrkon-question-box__form"><input class="pyrkon-question-box__input" placeholder="Enter your answer here..."><button class="pyrkon-question-box__submit" type="submit">Submit</button></form><a class="pyrkon-question-box__skip-link">Skip this question</a></section></div>',
    "questionBoxFinal" : '<div class="pyrkon-question-box"><h1 class="pyrkon-question-box__header">Pyrkon Scavenger Hunt</h1><section class="pyrkon-question-box__body"><h2 class="pyrkon-question-box__title">Congratulations on finishing the scavenger hunt, {{nick}}!</h2><div class="pyrkon-question-box__final-text"><p>Your score: <strong>{{score}}</strong></p><p>Your time: <strong>{{time}}</strong></p></div><button class="pyrkon-question-box__submit">New game</button></section></div>',
    "questionBoxInitial" : '<div class="pyrkon-question-box"><h1 class="pyrkon-question-box__header">Pyrkon Scavenger Hunt</h1><section class="pyrkon-question-box__body"><h2 class="pyrkon-question-box__title">Answer our questions in shortest possible time and win prizes!<span class="pyrkon-question-box__close"></span></h2><form class="pyrkon-question-box__form"><input class="pyrkon-question-box__input" placeholder="Your nickname..."><button class="pyrkon-question-box__submit" type="submit">Start!</button></form></section></div>',
    "results" : '{{#data}}<tr><td>{{index}}</td><td>{{userName}}</td><td>{{totalScore}}</td><td>{{totalTime}}</td></tr>{{/data}}',
    "done": "true"
  }; });
