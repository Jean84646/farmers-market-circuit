import React from 'react';
import CurrentProduce from './CurrentProduce';
import { Switch, Route, Link } from 'react-router-dom';

const availableProduce = [
   {
      month: "January",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes",
         "Turnips"
      ]
   },
   {
      month: "February",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes"
      ]
   },
   {
      month: "March",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes"
      ]
   },
   {
      month: "April",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Asparagus",
         "Garlic",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Potatoes"
      ]
   },
   {
      month: "May",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Asparagus",
         "Cauliflower",
         "Garlic",
         "Lettuce",
         "Potatoes",
         "Radishes"
      ]
   },
   {
      month: "June",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Blackberries",
         "Cherries",
         "Raspberries",
         "Strawberries",
         "Asparagus",
         "Broccoli",
         "Cauliflower",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Potatoes",
         "Radishes",
         "Squash"
      ]
   },
   {
      month: "July",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Apricots",
         "Blackberries",
         "Blueberries",
         "Cherries",
         "Melons",
         "Nectarines",
         "Peaches",
         "Raspberries",
         "Strawberries",
         "Tomatoes",
         "Beets",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Potatoes",
         "Radishes",
         "Squash",
         "Turnips"
      ]
   },
   {
      month: "August",
      selection: [
         "Apples",
         "Apricots",
         "Blackberries",
         "Blueberries",
         "Cherries",
         "Melons",
         "Nectarines",
         "Peaches",
         "Pears",
         "Plums",
         "Raspberries",
         "Rhubarb",
         "Strawberries",
         "Tomatoes",
         "Beets",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Corn",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Peas",
         "Peppers",
         "Potatoes",
         "Radishes",
         "Squash",
         "Turnips"
      ]
   },
   {
      month: "September",
      selection: [
         "Apples",
         "Blueberries",
         "Grapes",
         "Melons",
         "Peaches",
         "Pears",
         "Plums",
         "Raspberries",
         "Tomatoes",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Corn",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Peas",
         "Peppers",
         "Potatoes",
         "Radishes",
         "Squash",
         "Turnips"
      ]
   },
   {
      month: "October",
      selection: [
         "Apples",
         "Grapes",
         "Hazelnuts",
         "Melons",
         "Peaches",
         "Pears",
         "Tomatoes",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Corn",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Peas",
         "Peppers",
         "Potatoes",
         "Pumpkins",
         "Radishes",
         "Squash",
         "Turnips"
      ]
   },
   {
      month: "November",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Broccoli",
         "Carrots",
         "Cauliflower",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes",
         "Squash",
         "Turnips"
      ]
   },
   {
      month: "December",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
        "Broccoli",
         "Carrots",
         "Cauliflower",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes",
         "Turnips"
      ]
   }
];

function SeasonalProduce(){

  return(
    <div>
      <h1 style={{textAlign:'center', color:'#294223'}}>Seasonal Produce</h1>
      <hr/>
        <style jsx>{`
          .produceStyle {
            border: 1px solid #4d8c3c;
            padding: 10px;
            text-align: center;
            font-size: 20px;
          }
          a {
            color: #294223;
          }
          a:hover {
            color: #4d8c3c;
            text-decoration: none;
          }
        `}</style>
      <div className="produceStyle">
        <Link to="/January">January </Link>
        <Link to="/February">February </Link>
        <Link to="/March">March </Link>
        <Link to="/April">April </Link>
        <Link to="/May">May </Link>
        <Link to="/June">June </Link>
        <Link to="/July">July </Link>
        <br/>
        <Link to="/August">August </Link>
        <Link to="/September">September </Link>
        <Link to="/October">October </Link>
        <Link to="/November">November </Link>
        <Link to="/December">December </Link>
      </div>

      <Switch>
        <Route exact path='/January' component={() => <CurrentProduce month={availableProduce[0].month}
        selection={availableProduce[0].selection} />} />
      <Route exact path='/February' component={() => <CurrentProduce month={availableProduce[1].month}
          selection={availableProduce[1].selection} />} />
        <Route exact path='/March' component={() => <CurrentProduce month={availableProduce[2].month}
          selection={availableProduce[2].selection} />} />
        <Route exact path='/April' component={() => <CurrentProduce month={availableProduce[3].month}
          selection={availableProduce[3].selection} />} />
        <Route exact path='/May' component={() => <CurrentProduce month={availableProduce[4].month}
          selection={availableProduce[4].selection} />} />
        <Route exact path='/June' component={() => <CurrentProduce month={availableProduce[5].month}
          selection={availableProduce[5].selection} />} />
        <Route exact path='/July' component={() => <CurrentProduce month={availableProduce[6].month}
          selection={availableProduce[6].selection} />} />
        <Route exact path='/August' component={() => <CurrentProduce month={availableProduce[7].month}
          selection={availableProduce[7].selection} />} />
        <Route exact path='/September' component={() => <CurrentProduce month={availableProduce[8].month}
          selection={availableProduce[8].selection} />} />
        <Route exact path='/October' component={() => <CurrentProduce month={availableProduce[9].month}
          selection={availableProduce[9].selection} />} />
        <Route exact path='/November' component={() => <CurrentProduce month={availableProduce[10].month}
          selection={availableProduce[10].selection} />} />
        <Route exact path='/December' component={() => <CurrentProduce month={availableProduce[11].month}
        selection={availableProduce[11].selection} />} />
      </Switch>
    </div>
  );
}

export default SeasonalProduce;
