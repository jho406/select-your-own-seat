Select Your Own Seat
===

This application is an example of how to develop an interactive web page using:

* Rails
* BreezyJS
* React
* Redux

This repository serves as a demo and comparison between applications developed
using Rails + StimulusJS vs. Rails + BreezyJS (and React Redux).

The [original repository] was built by using Rails + StimulusJS by the extremely
talented [Sean Doyle]. This fork takes each commit in Sean's work and creates an
equivolent using BreezyJS, Rails / Redux; and ultimately, ending with a test
suite that doesn't require Javascript to run.

BreezyJS is a love letter to Rails. We love the philosophy, the monolithic
approach to web development, Unobtrusive Javascript, form helpers (SimpleForm)
and Turbolinks. We also love the value React and Redux adds to the our
development. So why not combine all of the ideas?

Like Sean's repo, the commit history is intentionally meticulous and verbose.


[original repository]: https://github.com/seanpdoyle/select-your-own-seat
[Sean Doyle]: https://github.com/seanpdoyle

Development
---

To develop the application locally, check it out with `git` then run the setup
script:

```bash
$ git clone git@github.com:jho406/select-your-own-seat.git
$ cd select-your-own-seat
$ bin/setup
$ rails server
```

Once the `rails server` command is running, visit the page at
<http://localhost:3000>.
