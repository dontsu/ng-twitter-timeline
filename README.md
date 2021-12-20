# twitter-timeline
An angular library to display twitter timeline for Angular  projects

  Current Version: 0.0.8
  
  Latest Update: 20th of Dec 2021
  
  Contributors: Diana Raileanu http://dontsu.github.io


## Installation

`npm install ng-twitter-timeline`


## Usage

Import in `app.module.ts`

```javascript
import { NgTwitterTimelineModule } from 'ng-twitter-timeline';

imports: [
  NgTwitterTimelineModule
],
```

And then use this component in your template:

```javascript
<ng-twitter-timeline [dataSrc]="{sourceType: 'profile',screenName: 'lokers_one'}" [opts]="{tweetLimit: 2}"></ng-twitter-timeline>
```

The `dataSrc` is the Twitter `data source` object
The `opts` is the Twitter `options` object

Full documentation on twitter timeline widget can be found on https://dev.twitter.com/web/javascript/creating-widgets#create-timeline


## Licence

MIT License

Copyright (c) 2019 Diana Raileanu, http://dontsu.github.io

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
