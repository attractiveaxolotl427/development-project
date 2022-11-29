# Development

### Link to Deployed Website
https://development-project.pages.dev/

### Goal and Value of the Application
The goal of the application is to be able to browse and purchase Kirby merchandise (essentially a very small online store). This can be valuable to a user who is looking to buy new Kirby-themed merchandise, as they can sort via price or item name, and browse using keyboard/letter inputs to search through the items conveniently.

### Usability Principles Considered
If someone is on my website, I figured that what they primarily want to see is Kirby merchandise. Thus, that is the biggest component on the website. I also considered that the assignment required the aggregator and the cards to be on the same page; thus, the cart + filter/sort settings scroll with the user as they look at the different Kirby merchandise. This way, it is convenient for the user to see what they have already put in their cart, look at the total cost (if they have a budget they want to stick to), or filter through the items. 

### Organization of Components
I used solely functional components for this assignment. I component-ized the cart and the card layout area, and I borrowed some other components from the MUI library (Button, Input fields). The buttons and input fields help change the respective states of the cart and Kirby merch displayed while the user is browsing the website.

### How Data is Passed Down Through Components
Several of the components have props passed into their respective component functions from the general App (i.e. functions like addToCart or data from the data.json file via cart or items). 

### How the User Triggers State Changes
The user can trigger state changes via the various buttons on the website (i.e. "Empty Cart" changes the cart's state and empties the cart, or the user can use the respective 'Add to Cart' and 'X' buttons to change the cart's state and add and remove items they want or do not want). The user can also type in searchable terms to look for an item they want (i.e. if the user types in 'hat' they will see all the Kirby themed hats) or filter for the items below the maximum price they're willing to pay for Kirby merchandise. 

If anything goes wrong while searching, there is a reset button that clears filter/sorting settings and takes the user back to all the items in their original order! :)
