# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Andrew Pavlik**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/plastic-abyssinian-brace

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Here is an example of the player winning the game:
![](https://cdn.glitch.com/d66e3d5c-a639-47a8-b23d-572dfaf176b1%2FMemoryGame1.gif?v=1616636456220)

Here is an example of the player using the start and stop buttons:
![](https://cdn.glitch.com/d66e3d5c-a639-47a8-b23d-572dfaf176b1%2FMemoryGame4.gif?v=1616636483398)

Here is an example of the player losing after making 3 mistakes:
![](https://cdn.glitch.com/d66e3d5c-a639-47a8-b23d-572dfaf176b1%2FMemoryGame2.gif?v=1616636464811)

Here is an example of the player losing by letting the timer run out:
![](https://cdn.glitch.com/d66e3d5c-a639-47a8-b23d-572dfaf176b1%2FMemoryGame3.gif?v=1616636473231)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

I used W3Schools and Stackoverflow when I encountered some problems working on the optional features.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I had no idea where to begin with changing the appearance of the buttons to have an image flash when they were being held down. I intuitively
knew to place the image tags within the button tags, but I couldn't get my images to show up after using their file path in my assets folder for
the src field. I searched for information about the image tag, and I learned that the src field needs a URL to the image, not its file path. Then for the
hard part of making the images disappear and reappear, I used the CSS file made from following the tutorial for the required features and used the styling for the start
and stop buttons as a reference of how to make my images disappear. I noted that the start and stop buttons have their class changed to denote that they are hidden or not, so I decided that
my images would belong to class "hiddenImg" or "showImg" depending on their visibility, and I toggled betweem these classes in the startTone, stopTone, lightButton, and clearButton functions.
When a picture would reveal itself, it would mess up the alignment of all the other buttons whose images were hidden. This led me to read about
the differences between display and visibility, and switching to visibility solved my problem. So in short, it was a very trial and error process.
When I encountered a problem, first I looked for other pieces of code in the project that I could reference if it tackled an
issue similar to the one I was struggling with. If that didn't work, an internet search led me to the proper pages where I digested more educational aspects
that cleared up my confusion. I could apply those rules that I saw demonstrated in other general scenarios online to solve my problem.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After taking a long time to work out some small styling kinks, I wonder how website designs can turn out to be so sleek when all the CSS rules I know so far seem so rigid. While I'm proud of the work I have accomplished, anyone
could tell that it was made by a student because of the rudimentary layout. Granted, I have never taken a course devoted to CSS or to web development for that matter,
with all of my knowlege coming from a previous internship or from side projects I work on in my free time, but I would really love to get to the point where I can build
websites from scratch that look professional. What is the best way to improve my skills with CSS? Are there resources other than CSS that are used to stylize an HTML document?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

The first thing I would do would be to make the styling more interesting. I wouldn't have everything aligned to the left. I would have the arrangement of the game buttons to
always be in a 3x2 rectangle instead of having all 6 buttons on one line when the window is stretched out. I want the mistake counter and timer to be on the same line, aligned
with the edges of the two columns that the buttons form. It would be nice if the mistake counter and timer incorporated some graphics instead of just being text. As for refactoring functions, there
are a few redundancies between functions that could be eliminated with the implementation of helper functions. For example, a separate function should probably be used to reset
the timer instead of writing the same three lines of code in three different functions. An additional feature could be to make the pattern go on long enough that it would seem endless for the user, maybe consisting of 250 notes, so that there could be a
leaderboard for the users that earn the highest scores.



## License

    Copyright Andrew Pavlik

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.