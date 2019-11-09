# notify-rc

NPM (shields.io)
[![npm version](http://img.shields.io/npm/v/notify-rc.svg?style=flat)](https://npmjs.org/package/notify-rc 'View this project on npm')

[![Build Status](https://travis-ci.com/JamesPortelli/notify-rc.svg?branch=master)](https://travis-ci.com/JamesPortelli/notify-rc)

[![codecov](https://codecov.io/gh/JamesPortelli/notify-rc/branch/master/graph/badge.svg)](https://codecov.io/gh/JamesPortelli/notify-rc)

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/JamesPortelli/notify-rc/blob/master/LICENSE)

notify-rc is a small package which allows developers to easily display notifications to the users.

# Usage

The package is hosted on npm and can be installed within your repository using the following command:

    npm install --save notify-rc

The notification system makes use of the React Context API to allow for any component within the tree to easily display notifications at any level of the render tree.

The package surfaces the context provider and a custom hook which provides some helper functions to display Info, Success, Warning and Error notifications whilst abstracting away the Context API.

At the root of you application, import the NotifierProvider and wrap your 'App' with it.

    ...
    import { NotifierProvider } from 'notify-rc'

    function Root() {
    	return (
    		<NotifierProvider>
    			<App />
    		</NotifierProvider>
    	);
    }
    ...

This will setup the notifier context and give every component within the provider access to it.

You can then import the custom notifier hook in any of your functional components and use it. This will provide access to four helpers functions allowing you to display the different kinds of notifications.

    ...
    import {useNotifier} from 'notify-rc'

    const Component = ()=> {
        const {
    	    showSuccessNotification,
    	    showInfoNotification,
    	    showWarningNotification,
    	    showErrorNotification
        } =  useNotifier();

        return (
    	    <div>
    		    <button onClick={() => showSuccessNotification('Success')}>Success</button>
    		    <button onClick={() => showInfoNotification('Info Banner')}>Info</button>
    		    <button onClick={() => showWarningNotification('Warning')}>Warning</button>
    		    <button onClick={() => showErrorNotification('Error')}>Error</button>
    	    </div>
        );
    };
    ...

## Options

In addition to the message, the helper functions provided by the custom hook allow for an object of options to be passed.

These options allow you to set the positioning or add on a timer to the notification.

### Positioning

The Notification system supports the following positions:

- Top
- Bottom
- TopLeft
- TopRight
- BottomLeft
- BottomRight
- Centre

Top and Bottom are rendered as 'Banners' which span across the full width of the screen.

TopLeft, TopRight, BottomLeft, BottomRight are rendered as 'Toastrs' with a fixed width.

Centre is rendered as an overlay in the centre of the screen with a fixed width.

By default if no position is provided the notification will be displayed on the Top as a banner.

### Timed Notifications

The notification supports a timed mode, whereby the notification will close automatically after the elapsed time has passed.

This mode is optional and can be activated by simply passing the number of seconds you want the notification to display for in the options parameter of the custom hook functions.

# Future Work

- Add support for class components.
- Add theming capabilities.
- Add ability to default options at an app Level.
- Enhance styles and add optional animations.
