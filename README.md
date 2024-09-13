# CaloriesApp
# KcalApp
Search food in Edamam database and add it to your daily database of food with all nutrients details.

Used tools: VSC, Apollo, Expo - Expo Go, Edamam API, IBM Stepzen.

Missing features: calories count, previous day summary, recipe log...


Calories Count:

- Using Edamam API, ensure you're fetching the calories field for each food item. You can sum up the calories for the day when tracking multiple items.
- Store this data in your local state or a database for daily calorie tracking.

Previous Day Summary:

- Implement a database table or state to store daily entries of food logs.
- Create a function to query the data for the previous day (or any specific date) to generate a summary, including total calories, macro/micronutrients, etc.

Recipe Log:

- Use the Edamam API's recipe feature to allow users to log complete recipes.
- Store the recipe name, ingredients, and nutritional values in the database.
- Allow users to tag recipes and search them in future logs.
