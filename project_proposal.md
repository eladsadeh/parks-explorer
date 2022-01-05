## Project Description

National Parks explorer: This app will let the user to explore national parks by location and activities and present details on selected park.

## Link to the API you plan to use

https://developer.nps.gov/api/v1/

## Example data response you plan to use

```json
{
	"id": "6DA17C86-088E-4B4D-B862-7C1BD5CF236B",
	"url": "https://www.nps.gov/acad/index.htm",
	"fullName": "Acadia National Park",
	"parkCode": "acad",
	"description": "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 3.5 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
	"latitude": "44.409286",
	"longitude": "-68.247501",
	"latLong": "lat:44.409286, long:-68.247501",
	"activities": [
		{
			"id": "D37A0003-8317-4F04-8FB0-4CF0A272E195",
			"name": "Stargazing"
		},
		{
			"id": "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
			"name": "Biking"
		},
		{
			"id": "071BA73C-1D3C-46D4-A53C-00D5602F7F0E",
			"name": "Boating"
		},
		{
			"id": "A59947B7-3376-49B4-AD02-C0423E08C5F7",
			"name": "Camping"
		}
	],
	"topics": [
		{
			"id": "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
			"name": "Arts"
		},
		{
			"id": "05B7868A-3F3C-433D-876E-A886C4BE7A12",
			"name": "Painting"
		},
		{
			"id": "9BD60DC0-C82B-42BA-A170-456B7423429D",
			"name": "Photography"
		},
		{
			"id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
			"name": "Trails"
		},
		{
			"id": "1365C347-952C-475A-B755-731DD523C195",
			"name": "Wetlands"
		}
	],
	"states": "ME",
	"contacts": {
		"phoneNumbers": [
			{
				"phoneNumber": "2072883338",
				"description": "",
				"extension": "",
				"type": "Voice"
			},
			{
				"phoneNumber": "2072888813",
				"description": "",
				"extension": "",
				"type": "Fax"
			},
			{
				"phoneNumber": "2072888800",
				"description": "",
				"extension": "",
				"type": "TTY"
			}
		],
		"emailAddresses": [
			{
				"description": "",
				"emailAddress": "acadia_information@nps.gov"
			}
		]
	},
	"entranceFees": [
		{
			"cost": "30.00",
			"description": "Admits private, non-commercial vehicle (15 passenger capacity or less) and all occupants. Valid for 7 days. If a vehicle pass is purchased, no other pass is necessary.",
			"title": "Acadia Entrance Fee - Private Vehicle"
		},
		{
			"cost": "25.00",
			"description": "Admits one or two passengers on a private, non-commercial motorcycle. Valid for 7 days.",
			"title": "Acadia Entrance Fee - Motorcycle"
		},
		{
			"cost": "15.00",
			"description": "Admits one individual with no car (bicyclist, hiker, pedestrian). Youth 15 and under are admitted free of charge. Valid for 7 days.",
			"title": "Acadia Entrance Fee - Per Person"
		}
	],
	"entrancePasses": [
		{
			"cost": "55.00",
			"description": "Valid for 12 months from purchase date. This pass provides access to Acadia National Park only. This pass admits the pass holder and passengers in a non-commercial vehicle.",
			"title": "Acadia Annual Pass"
		}
	],
	"fees": [],
	"directionsInfo": "From Boston take I-95 north to Augusta, Maine, then Route 3 east to Ellsworth, and on to Mount Desert Island. For an alternate route, continue on I-95 north to Bangor, Maine, then take I-395 to U.S. Route 1A east to Ellsworth. In Ellsworth, take Route 3 to Mount Desert Island.",
	"directionsUrl": "http://www.nps.gov/acad/planyourvisit/directions.htm",
	"operatingHours": [
		{
			"exceptions": [],
			"description": "Acadia National Park is open year-round. Check our website for park facilities operating hours, such as Hulls Cove Visitor Center.",
			"standardHours": {
				"wednesday": "All Day",
				"monday": "All Day",
				"thursday": "All Day",
				"sunday": "All Day",
				"tuesday": "All Day",
				"friday": "All Day",
				"saturday": "All Day"
			},
			"name": "Acadia National Park"
		}
	],
	"addresses": [
		{
			"postalCode": "04609",
			"city": "Bar Harbor",
			"stateCode": "ME",
			"line1": "25 Visitor Center Road",
			"type": "Physical",
			"line3": "",
			"line2": "Hulls Cove Visitor Center"
		},
		{
			"postalCode": "04609",
			"city": "Bar Harbor",
			"stateCode": "ME",
			"line1": "PO Box 177",
			"type": "Mailing",
			"line3": "",
			"line2": ""
		}
	],
	"images": [
		{
			"credit": "NPS / Kristi Rugg",
			"title": "Acadia's rocky coastline",
			"altText": "Large puffy clouds dot a brilliant blue sky as wave crash against the rocky coastline of Acadia.",
			"caption": "Millions of people come to Acadia for our distinctive rocky coastline.",
			"url": "https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg"
		},
		{
			"credit": "NPS / Kristi Rugg",
			"title": "Heavy snow-laden trees",
			"altText": "Hiking tracks carved through three feet of snow wind through a heavy snow-laden forest.",
			"caption": "During the colder months snows transform our landscape into a winter wonderland.",
			"url": "https://www.nps.gov/common/uploads/structured_data/3C7B4BEC-1DD8-B71B-0B2CF833F93140FF.jpg"
		},
		{
			"credit": "NPS / Kristi Rugg",
			"title": "Sunset atop Cadillac Mountain",
			"altText": "A brilliant sunset filled with hues of blue, red, orange, magenta, and purple highlight the sky.",
			"caption": "As the tallest point on the eastern seaboard Cadillac Mountain provides fantastic viewpoints.",
			"url": "https://www.nps.gov/common/uploads/structured_data/3C7B477B-1DD8-B71B-0BCB48E009241BAA.jpg"
		},
		{
			"credit": "NPS / Kristi Rugg",
			"title": "Climbing The Precipice",
			"altText": "Two hikers ascend a sheer cliff trail by way of historic iron rung ladders.",
			"caption": "Whether it's a stroll along Ocean Path or a difficult ascent up The Precipice, there are hiking trails for everyone!",
			"url": "https://www.nps.gov/common/uploads/structured_data/3C7B48F9-1DD8-B71B-0BD3B413E58978F8.jpg"
		}
	],
	"weatherInfo": "Located on Mount Desert Island in Maine, Acadia experiences all four seasons. Summer temperatures range from 45-90F (7-30C). Fall temperatures range from 30-70F (-1-21C). Typically the first frost is in mid-October and first snowfall begins in November and can continue through April with an average accumulation of 73 inches (185 cm). Winter temperatures range from 14-35F (-10 - 2C). Spring temperatures range from 30-70F (-1-21C).",
	"name": "Acadia",
	"designation": "National Park"
}
```

## Visual of your component hierarchy
<img width="693" alt="components" src="https://user-images.githubusercontent.com/93807931/148152566-dd352b75-82e8-4089-8c75-309c1d78e14e.png">

## Wire Frames

### Home Page
<img width="814" alt="parks-home" src="https://user-images.githubusercontent.com/93807931/148151474-13874283-a146-4959-88ec-344bde23941d.png">

### Search Results
<img width="818" alt="parks-results" src="https://user-images.githubusercontent.com/93807931/148151622-9bb94d6e-681b-4e2b-9d7f-0532ed1acf77.png">

### Park Details
<img width="811" alt="parks-details" src="https://user-images.githubusercontent.com/93807931/148151603-2e2f4e3b-2fae-4bdb-b80c-ffed3abeb40e.png">


## User Stories

### MVP Goals

- As a user, I want to find parks in a certain state, so that I can find parks in my area.
- As a user, I want to find parks based on certain activity, so that I can find parks that interest me.
- As a user, I want to know where the park is located, so that I can find ways to get there.
- As a user, I want to know how to contact the park I am interested in, so that I can contact the park personnel if I have any questions.
- As a user, I want to see pictures of the park, so that I have an idea of how it's looks like.
- As a user, I want to know which campgrounds are available at a particular park, so that I can make arrangments for accomodations.

### Stretch Goals

- As a user, I want to see where the park is on a map, so that I can see how far it is and how to get there.
- As a user, I want to be able to prepare a list of things that I need to bring, so that I don't forget anything.
