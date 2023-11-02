import { menuData } from "../../menuData.js";
import MenuTitle from "../menu-title/MenuTitle.jsx";
import "./Menu.css";

export default function Menu() {
  return (
    <main className="main">
      {menuData.map((item, index) => {
        return (
          <div key={index}>
            <MenuTitle>{item.coffeeTitle}</MenuTitle>
            {item.coffeeList.map((item, index) => {
              return (
                <div className="menu-item" key={index}>
                  <div className="coffee">
                    <h3 className="coffee-name">{item.coffeeName}</h3>
                    <p className="coffee-desc">{item.coffeeDesc}</p>
                  </div>
                  <div className="coffee-sizes" key={index}>
                    {item.coffeeTypes.map((item, index) => {
                      return (
                        <div className="coffee-size" key={index}>
                          <p className="size">{item.coffeeSize}</p>
                          <p className="price">{item.coffeePrice}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </main>
  );
}
