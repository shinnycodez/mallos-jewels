import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
    id: 1,
    title: "Bracelets ˚⊹♡",
    imageUrl: "https://scontent.fskt1-1.fna.fbcdn.net/v/t1.15752-9/525024338_642833308844378_6043913897455377992_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=3Ff2DIBBG30Q7kNvwH3CvD2&_nc_oc=AdmLIk72lN_XE4vY0gzGJQMBtOyUF-HTsVBH4AoBojdBWP8aiImuovZgGBZmX-7ATYw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fskt1-1.fna&oh=03_Q7cD2wGNK0WIy8HgGDmq5-EAiLxTrUOzVGJ9Z81yqKWH9Pb63g&oe=68B481BC",
    link: "Bracelets"
  },
  {
    id: 2,
    title: "Pendants ⋆｡𖦹°",
    imageUrl: "https://scontent.fskt1-1.fna.fbcdn.net/v/t1.15752-9/526286986_1947875569334194_6432178775595699056_n.jpg?stp=dst-jpg_s565x565_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=hzi2kP2DyY0Q7kNvwEO2oRI&_nc_oc=Adk_8ftUe8ZCeB0ylNgoL17lA7FjARZFkx1cSCHZfNk_RodGMjmM2giL8Fq5Fkwpgc8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fskt1-1.fna&oh=03_Q7cD2wEJBvYe0SkCsxymylXDD3uhRjEjjDV0eKnqXxlAc8DfZA&oe=68B471CB",
      link: "Pendants",
  },


  //   {
  //   id: 4,
  //   title: "Bookmarks",
  //   imageUrl: "https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/520429125_1334742338219253_2531984894124566733_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=j7XYMWWmVY8Q7kNvwFYLOQX&_nc_oc=Adkef7qEPDIiflArvyMlAj0FTg2JoPnp6bRd6DV5GSZcJB7m97b8m8ZRWL8id8lVe1k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD2wF-rY8Fqy79pbeR3ML53F8zqAW-4GruhgPAjdrVNB5Twg&oe=68AC16BF"
  // },
      {
    id: 3,
    title: "Earrings ˚⋆𐙚｡",
    imageUrl: "https://scontent.flhe3-1.fna.fbcdn.net/v/t1.15752-9/525536730_2494229634266747_3171338560065245666_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=VWBb3Bz-M-QQ7kNvwHEPpCJ&_nc_oc=AdmVq2lkacmwEti8Llkp2DeEHFz6Yw-ZXUf7d2_4Ta_EsCYQ_IhHob9gUnWEog5_r9k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-1.fna&oh=03_Q7cD2wEfpKa1PYz4ecpDmYQFfmK6yhiNySaOcYM6h3oiUBMF3w&oe=68B4880D",
      link: "Earrings"
  },
      {
    id: 4,
    title: "Resin jhumkas ｡°✩",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/525739796_2577973002553554_2792564749880080398_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rjv2zOG-G8cQ7kNvwH0IFsr&_nc_oc=Adl-skidLv8GMAqOuiKpW0JWqbt4Yg1ysYgxA8-_lGWwubZ5Bjb4SeCd4lTZMoJGzv8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wHT0jiXrOPzHl0SPJVuEAEseCJ8uZyYN8_NUlgLWKn6tw&oe=68B496DB",
     link: "Resin jhumkas"
  },
        {
    id: 5,
    title: "Vintage Collection⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/525631364_1459822905434217_8427164512772885201_n.png?stp=dst-png_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bQ_3uKnOs1wQ7kNvwFiikrb&_nc_oc=AdkBaC0V_nJBVM8V_F4GUTIqPYO2GnmN7uK1s52yo7lkXml1aLDSuOOHW5DhserJxpk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wHRCZg7xTeIe4PwJyuVePPQXa6WcSn_koEh2ji0l1rtEQ&oe=68B47A47",
     link: "Vintage Collection"
  },
  {
      id: 6,
    title: "Gifts ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/527294313_1078671567792581_6885154972106435777_n.png?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=akn5LZ8j-HcQ7kNvwHXqWYf&_nc_oc=AdnxVAQQWIij2xikGiTT37QQ1c__0VltmW5s5DoP8zyhPHu5FG-EojG5dObKIvaIh9M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD2wEyEzUFolOX6yJlHR8dhmUXrgxlFyJJpCEbp9oAoGoMJg&oe=68B49D89",
     link: "Gifts"
  },
    {
      id: 7,
    title: "Flower preservation⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/523933575_775230068389768_1997263228595901004_n.png?stp=dst-png_s640x640&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=33NGxhFGj4UQ7kNvwF92DXg&_nc_oc=Adlakkleh9isusWUFzCLiiaCVZ0KOxZcLujmUsoC59l6X8qzMUXmD5EnqXSIxFTHjts&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wEGpj7DsqUPZkwTRN7jwAc1alZ1vXnjjCw4QnoBlBxkqg&oe=68B48E04",
     link: "Flower preservation"
  },
      {
      id: 7,
    title: "Rings⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe7-1.fna.fbcdn.net/v/t1.15752-9/524769285_763827739370305_1636925045429649579_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=l6B5QlwQuiYQ7kNvwHMs3sa&_nc_oc=AdmxW89NEjxsdB9QIpsBBvkoDd-mbDSs4mQ4TodMetfrbTEWEsju3xA8EApAp1QglFM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-1.fna&oh=03_Q7cD2wFRh47vgDNvagitPHYPNmdiFuCGCSVoPwuh_fWkx_5iZQ&oe=68B473CE",
     link: "Rings"
  },
  //       {
  //   id: 6,
  //   title: "Bag charms",
  //   imageUrl: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/520244288_1267810474939004_9048492148598199566_n.png?stp=dst-png_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=neIk5TZGFm4Q7kNvwEuXfQ_&_nc_oc=AdmxJ4KDwZ-uqPdqouvocGIJ_PMCJuOMaF7ERpOXqSlLAudbRPv9J7oqkY8r3siKLZI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wFMPcWh2mt2rXhc_FNIMeleWIzjCbZQawAV-wDep1F7MQ&oe=68A70F62"
  // },

];

function FeaturedCategories() {
  return (
<div>
  <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
    Featured Categories
  </h2>

  <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
    {categories.map(category => (
      <Link
        to={`/products?category=${encodeURIComponent(category.link)}`}
        key={category.id}
        className="flex flex-col gap-2 group bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
      >
        <div
          className="w-full aspect-[1/1] bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        ></div>
        <p className="text-[#141414] text-base font-medium leading-normal text-center px-2 pb-3">
          {category.title}
        </p>
      </Link>
    ))}
  </div>
</div>

  );
}

export default FeaturedCategories;
