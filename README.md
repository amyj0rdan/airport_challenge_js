# Airport Challenge in JavaScript

Week 5 Challenge from Makers Academy.

Full instructions are [here](https://github.com/makersacademy/airport_challenge).

[Getting started](#getting-started) | [Usage](#Usage) | [Running tests](#running-tests)

[User stories](#user-stories) | [Approach](#Approach) | [Areas for development](#Areas-for-development)

## Getting started

```
git clone https://github.com/amyj0rdan/airport_challenge_js
```

## Usage

Open `index.html` in browser and use in `Console`

## Running tests

Open `SpecRunner.html` in browser.

## User stories

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

## Approach

This was my first independent challenge working in JavaScript.

I used this challenge to:

- follow an effective process for learning a new language
- use TDD in a new language, with a new testing framework

I have already completed [this challenge](https://github.com/amyj0rdan/airport_challenge) in Ruby so I had a roadmap laid out for what the program would look like. I could therefore focus on the above two goals rather than modelling or solving the problem.

### Learning something new

NEED TO UPDATE THIS

### TDD process

- I started by writing feature tests based on the user stories. I didn't do this with the Ruby version of this challenge, but I found this incredibly useful for guiding my programming process.
- Starting with simple feature tests, I found that this entirely led the writing of my unit tests. I ran the code every time I amended it, and used the error message to guide what needed to be built next. Even though the errors aren't quite as helpful as RSpec, they were still able to guide what object, function or functionality I needed to build next.
- Following a strict TDD process enables me to build up functionality, objects and functions in a considered manner, and guides my writing to write simpler and more easily editable code.

## Areas for development
- I am yet to test for edge cases, however as my objective with this challenge was to follow as above, I am ok at the moment that I am yet to cover these:     
  * Ensuring that planes can only take off from airports they are in
  * Planes that are already flying cannot takes off and/or be in an airport
  * Planes that are landed cannot land again and must be in an airport
