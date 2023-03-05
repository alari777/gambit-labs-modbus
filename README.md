# Table of content

[Getting Started](#getting_started)
- [Spoiler](#spoiler)
- [Introduction](#introduction)

[How to start](#how_to_start)  
[Tests](#tests)  
[GitHub actions](#github_actions)

[In conclusion](#in_conclusion)  
[Thank you!](#thank_you)

# <a name="getting_started">Getting Started</a>

## <a name="spoiler">Spoiler</a>
It is spoiler. You can see how this application works here:
- [Gambit-labs Modbus project at custom my instance](http://34.23.45.250/).
- [Gambit-labs Modbus project at Vercel](https://gambit-labs-modbus.vercel.app/).

## <a name="introduction">Introduction</a>

TUF-2000M is an ultrasonic energy meter that has a Modbus interface described in docs/tuf-2000m.pdf.

Gambit has access to one of these meters and it is providing you a [live text feed](http://tuftuf.gambitlabs.fi/feed.txt) that shows the time of the reading followed by the first 100 register values.

My task. Create UI for showing the data for user:
- Modern javascript frameworks or maybe a mobile app.
- Easily deployable and testable.
- UX will be also a key factor on this.
- Authentication.

