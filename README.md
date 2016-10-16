# gecko-o-meter

![gecko-o-meter](gecko-o-meter.png)

## Set up

To ensure this will run, please use at least `v6.0.0` of __Node.js__.

Once you have cloned the repository, run:

```
$ npm install
$ npm start
```

Then open your browser and go to `http://localhost:8080`.

## The stack

This set-up comprises a similar set of tooling that I have used for previous learning exercises – I used this as a starting point for this challenge.

* React
* Mocha, Chai, Sinon and Enzyme
* Webpack
* Babel
* SASS and CSS Modules

## Approach

Most of my focus in this challenge was around testing – I felt that having well tested functionality was the most important issue for me to address.

The biggest challenge, which I had to step back from in the interests of time, was around testing the asynchronous API call in `componentDidMount` and my desired resulting _state_ updates.

I found articles and blog posts demonstrating how you might do this (involving libraries such as [nock](https://github.com/node-nock/nock)), however there seemed to be differences in opinion for a 'best practice' and given the time, I didn't feel comfortable lifting code without understanding it properly.

I ended up focussing my efforts on getting the basic functionality working, and displaying that in a reasonably styled manner for an end-user.

## Next steps/improvements

Below are number of things that I would have liked to have tackled/addressed had I had more time:

* __Error/incorrect data handling__ – this solution only deals with the _fixed_ API endpoint. I would like to have looked at handling 500 and 400 error codes. Along with the `server on fire` error, I noticed some of the values had `min > max` (as an example). I assume a scenario like this could result from buggy integration, or an API that has changed, so handling this for developers and end-users would have been good.
* __Async/state testing__ – as outlined in 'Approach', this is something that I would like to get working properly as it is a key cog in the component's functionality.
* __Better tests__ – I'm pretty new to TDD, so one of the areas I need to better understand is what are the right things to test for. I have read opinions stating that testing for functionality while leaving room for refactoring is a good approach – I need to get more practice/experience in this.
* __Refactoring__ – Had I gotten further with the above points, and had the component grown in complexity, it may have been worth looking into splitting out the component in to _smart_ and _dumb_ components. I didn't want to do this prematurely, but is something I would have looked into.
* __SVG__ – Ideally I would have liked to have gone full SVG for the dial. I have only just begun looking into SVG (not in the context of React) and given the time constraints, I wasn't comfortable implementing that without understanding it properly. Longer term, I would also be interested in looking in to D3.
* __UI__ – Some UI embellishments would have been really nice. Simple, subtle animations/transitions – for example an animated loader while data is being fetched and an animated needle. This goes along with the previous point about SVG – animated SVG would have been great. I still need more experience in this in general.
* __Production build__ – This is something I need to look into further with Webpack – bundle splitting (app, vendor, manifest, stylesheets) and how to cache these for best performance.