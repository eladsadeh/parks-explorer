# pArk-Z: Find Your Advanture

## Introduction
pArk-Z (A-Z parks) is an app developt with React that let the use explore national parks. 
The use select a state and the app uses the National Parks Services API to fetch a list of parks in the selected state.
The user can filter the results by activities.

## Deployed App
https://park-z-explorer.netlify.app/

## How to use the app

- At the home screen, select the state you want to search for national parks.

- You can filter the parks by typing in the "Filter By Activity" input and the app will show parks that include activities that matches the typed string.

- Click any park card to see more details on the park:
    - Carousel with images.
    - Accordion with description, weather, and list of activities.

## Screen shots

### Home screen
![Screen Shot 2022-01-10 at 7 30 34 PM](https://user-images.githubusercontent.com/93807931/148860880-f57e837b-e59c-49c8-bee9-20748c9cf8ec.png)

### Results screen
![Screen Shot 2022-01-10 at 7 30 59 PM](https://user-images.githubusercontent.com/93807931/148860947-1c9402c4-8938-4a14-ac58-e0bc77902777.png)


### Park details
![Screen Shot 2022-01-10 at 7 31 19 PM](https://user-images.githubusercontent.com/93807931/148860961-fd6345ba-da24-456e-b5f2-9e79e5044e86.png)

## API Used
https://developer.nps.gov/api/v1/

## Technologies Used

- JavaScript
- React
    - React Router
    - Styled Components
- CSS

## Instalation

- Fork and clone the repository
- go to the new directory
- run `create-react-app .` to install React
- run `npm install styled-components`
- run `npm start` to run the app on local server
