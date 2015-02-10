# Application Design - Steal the content

## Stage One

1. Clone this repository.
2. Create your own branch.  Name it "yourfirstname-yourlastname-stage1".
2. Take a look at [client/stealthecontent.js](client/stealthecontent.js).  This is a pure content representation of I saw [when I googled "boring"](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=boring).
3. Choose a similar content rich site where you could do the same thing.  It should be a site that is highly dynamic in nature, meaning it changes based on your query or over time due to user activity.  Examples: CNN, Facebook, BoingBoing
4. Remove the object from the `data` helper and replace it with the content from your choosen site.  If there's text there, copy-and-paste it, if the page has images, grab the urls to the images. Note: I'm not including anything static like button names or links from the navigation.  I want content only, not parts of the UI that stay the same page to page!
5. Commit your new version of the data

## Stage Two
1. Look through the existing stage1 branches and choose someone elses.   
2. Create a branch from their branch, call it "yourfirstname-yourlastname-stage2".
3. Now begin flushing out [client/stealthecontent.html](client/stealthecontent.html) so that the data shows up on the page in some logical manner.  If you want to try and mimic the design of the source of the data? That's fine.  Do something totally different?  That's fine too.
