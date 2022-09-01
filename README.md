# Developing a Fridge Inventory Tracker from scratch!

![](https://github.com/faithyeenxin/fridge-daddy-final/blob/main/public/images/fridge-daddy-mockup.png)

It's easy to use and what's better is that it's responsive (mobile compatible)!

Start using Fridge Daddy now!: https://fridge-daddy.vercel.app/

## Project Description

Having personally faced many situations whereby I had to throw out expired food because my mother "forgot that she had bought that" I decided to take matters into my own hands by solving this simple but age old issue!

Fridge Daddy was created simple and minimalistic so that anyone could easily understand how it works and start using it on the get go.

## User Story

1. Start up page would introduce the website simply, upon clicking the Get Started button users would then be redirectly to the Homepage where they can start all their tracking

![](https://github.com/faithyeenxin/fridge-daddy-final/blob/main/public/images/keepfoodtabs.gif)

2. Users would be able to enter the food/ingredient and quantity they would like to track.

3. They would then be allowed to select a category their food belongs to. This would suggest the respective shelf life day provided by airTable API with my own personal database.

4. Expiry date would then change according to the default Purchase Date (today) or user specified Purchase Date.

5. Upon submission of the item, sorting would happen in the background where duration till expiry is calculated. The number of days is the delta between today and the expiration date.

6. If item has a positive number of days, it would then be entered into the Evergreen List. If negative number of days, it would be sorted into the Rotten List.

7. Items can be binned (into Trashed List) or remove from bin.

![](https://github.com/faithyeenxin/fridge-daddy-final/blob/main/public/images/addcategory.gif)

8. In the situation whereby users are not able to find their respective food's category, they can contribute to the community by submitting their own category and shelf life.

9. Upon submission of food item, Spoonacular API would be called to get the ingredient/food's image and display it as a card.

10. All categories will be displayed at the bottom of the Categories page where filtering is allowed. Users are able to sort and filter through existing categories by toggling the table header.

11. Aside from merely tracking I wanted to make it easier for users to decide on what to make depending on what they had in their fridge (only those before the expiry date of course!) As such I introduced the Recipes page.

![](https://github.com/faithyeenxin/fridge-daddy-final/blob/main/public/images/recipes.gif)

12. Upon start up of recipes page, users will be served random recipes.

13. Users are also able to select their items by toggling the + or - buttons. They are given a choice to define the Cuisine they would like as well as the Meal type. They can also be left blank!

14. Upon submission of the request, Fridge Daddy will serve up the best choices of recipes and even state how many ingredients are missing.

15. Clicking the recipe would lead the user to a webpage where it's link is sharable. They are able to share this link to their housemates or partners in discussion as to what they'd have tonight with what's left in their fridge. How convenient!

## Tech Stack Utilized

- HTML, CSS, Javascipt (React and inbuilt Fetch API)
- Powered by airTable API & Spoonacular API
- Clothed by Material UI
