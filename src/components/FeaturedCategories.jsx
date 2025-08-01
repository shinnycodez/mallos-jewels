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
    imageUrl: "https://scontent.fskt1-1.fna.fbcdn.net/v/t1.15752-9/525536730_2494229634266747_3171338560065245666_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=VWBb3Bz-M-QQ7kNvwGqCH1k&_nc_oc=AdmeBA51mzkg67O6Su3X2a6Yo-SviFWwkjOGEs70OzQYya-oBJTOFdmioRlLOmtL07Q&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fskt1-1.fna&oh=03_Q7cD2wGGLi-EFidN0QIs06MD5vBPe5qxXlAHZ00V0IzB8CDNrg&oe=68B4880D",
      link: "Earrings"
  },
      {
    id: 4,
    title: "Resin jhumkas ｡°✩",
    imageUrl:"https://mail.google.com/mail/u/0?ui=2&ik=91e2725061&attid=0.4&permmsgid=msg-f:1839252043438834854&th=198655fd1d9544a6&view=fimg&fur=ip&permmsgid=msg-f:1839252043438834854&sz=s0-l75-ft&attbid=ANGjdJ9UHcbGtqr2RQXmVBXNb6sz-JGkhJVQh3WqB40znZ3xTni6KtS-TjHYip7-KWP7G4puA0y4SBAxRW8-ltvGvBnh3d7Y07joPOm282rPTKGggmM0BqLVuTwWSkc&disp=emb&realattid=ii_198655dd1cfd902dfb34&zw",
     link: "Resin jhumkas"
  },
        {
    id: 5,
    title: "Vintage Collection⋆⭒˚.⋆",
    imageUrl:"https://mail.google.com/mail/u/0?ui=2&ik=91e2725061&attid=0.5&permmsgid=msg-f:1839252043438834854&th=198655fd1d9544a6&view=fimg&fur=ip&permmsgid=msg-f:1839252043438834854&sz=s0-l75-ft&attbid=ANGjdJ_WOSTWO1zgj4IAhm_LZ9dtnp-Yx5gIvBxJUn0_AJf-GReHN-DpXKBtVwNbpjvCIzaiXTW0-8lRF-JaIqJ7zjKbshN4_b3QHJOZ4IZ9QVTRyJ1oL6vt6kYUi98&disp=emb&realattid=ii_198655e4562d910f7345&zw",
     link: "Vintage Collection"
  },
  {
      id: 6,
    title: "Gifts ⋆⭒˚.⋆",
    imageUrl:"https://mail.google.com/mail/u/0?ui=2&ik=91e2725061&attid=0.6&permmsgid=msg-f:1839252043438834854&th=198655fd1d9544a6&view=fimg&fur=ip&permmsgid=msg-f:1839252043438834854&sz=s0-l75-ft&attbid=ANGjdJ8qeTSiN9of0HCFaXNNbji8e5SXzMd2v-3WnE18DH8HjOpNfuyr9699ECKES5Pc6EAGt0T_8NZLwI4e8gLJM-BzCLyMsOE5MfSkfc3HlVi8fTIOvqfnsNOvXMc&disp=emb&realattid=ii_198655ecb77d7a2941a6&zw",
     link: "Gifts"
  },
    {
      id: 7,
    title: "Flower preservation⋆⭒˚.⋆",
    imageUrl:"https://mail.google.com/mail/u/0?ui=2&ik=91e2725061&attid=0.7&permmsgid=msg-f:1839252043438834854&th=198655fd1d9544a6&view=fimg&fur=ip&permmsgid=msg-f:1839252043438834854&sz=s0-l75-ft&attbid=ANGjdJ8QO-znAnuuTrHNvrkp8IDkEzEPSui90jXikiwD6MTeATNkuKGcOAnxwCv5gjBeg-T4yGDJ5a4KLqFkJWn2TiYSPqeq6h--D8vZPH3wldapb4AS75g2mUWcXI0&disp=emb&realattid=ii_198655f39b5d94955387&zw",
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
