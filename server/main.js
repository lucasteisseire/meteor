import { dumbArticles } from '../imports/api/articles'
import { Meteor } from 'meteor/meteor';
import fakeArticles from '../imports/dumb-data/fakeArticles'
import Articles from '../imports/ui/Articles';
Meteor.startup(() => {
  console.log(fakeArticles)

  // UNCOMMENT TO INSERT DATA IN DB BEFORE START

  // fakeArticles.forEach(article => {
  //   dumbArticles.insert(article)
  // })

  console.log(dumbArticles.find().fetch())
})