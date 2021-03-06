# Sisters of the Road Cafe Admin and POS system

At Sisters of the Road Cafe, anyone can come in and purchase an affordable meal.
Those without the ability to afford a meal can trade volunteer time for cafe
credits. Currently, these volunteer credits are tracked manually, and the purpose
of this app is twofold:

- Provide a **Point of Sale** style interface, suitable for an iPad, for checking out with credits
- Provide an administrative view into volunteers' credit balances

With a system like this, the checkout process at the cafe can go more smoothly,
making running the checkout counter easier and faster. Administrators at the
cafe will be able to log into the Django Admin to look at volunteers, make
notes, and adjust balances as needed.

# Technology

This tool is a Django app. The POS interface will likely require some kind of
Javascript layer, but a heavy single page app is not required. Either standalone
vanilla JS, jQuery or Angular should suffice.

# Event MVP Functionality Overview

Staff users can... 

* Log in and see the main barter-checkout page
* Search for a barter account by customer name (fuzzy search)
* Checkout a meal with a barter account
* Add volunteer credit to a barter account

Admin users can...

* Log in and see the main admin page
* Add new barter accounts
* Add new staff accounts
* Search for barter accounts
* View all barter accounts
* View credit balance for customer
* See log of how credits were used

Checkout interface is...

* optimized for iPad
* intuitive for users with variety of tech experience
* easy to read

Admin interface is…

* not accessible to regular staff users

# Contributors

* Rachel Wilson
* Andrew Harvey
* Schola Choi
* Cynthia Prevatte
* Juliana Arrighi
* [Melissa Lewis](https://twitter.com/iff_or)
* Ashley Fisher
* Treasure Porth

# License

GNU AGPL 3.0
