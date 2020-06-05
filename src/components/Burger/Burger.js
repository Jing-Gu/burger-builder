import React from "react";

import styles from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const Burger = (props) => {
  //transform ingredients object to array before using map()
  //concept: transform an object of key-value pairs into an array of burger ingredients
  //the key indicates the type of ingredient, the value indicates how many for that ingredient
  let transformedIng = Object.keys(props.ingredients).map((ingKey) => {
    return [...Array(props.ingredients[ingKey])].map((_, i) => {
      return <BurgerIngredients key={ingKey + i} type={ingKey} />;
    });
  });

  //to check if there's ingredients or not, if not, output message
  //use reduce() to pull out inner arrays from array transformedIng, and create one array only

  let reducedIng = transformedIng.reduce((acc, cur) => {
    return acc + cur;
  }, []);

  if (reducedIng.length === 0) {
    transformedIng = <p>Please start adding ingredients.</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIng}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
