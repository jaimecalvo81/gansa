import React, { useEffect, useState } from 'react';

export default function Menu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
      async function loadMenu() {
          const response = await fetch('http://localhost/wp-json/myroutes/menu');
          if(!response.ok) {
              // oups! something went wrong
              return;
          }
          const menu = await response();
          setMenu(menu);
      }
      loadMenu();
 }, [])
return (
  <div>
    { menu }
  </div>
);
}
