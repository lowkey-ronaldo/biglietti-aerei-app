import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "Italia",
    imageUrl:
      "https://www.fulltravel.it/wp-content/uploads/2019/11/Cosa-vedere-a-Roma.jpg",
    route: "voli/italia",
  },
  {
    id: 2,
    title: "Francia",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRycwRChnvG7SODs_TdDVnOk285E_MkHvzFw&usqp=CAU",
    route: "voli/francia",
  },
  {
    id: 3,
    title: "Germania",
    route: "voli/germania",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0RU18GcHP0MLLwRixhPZl1W2wcTZ4BqnMQ&usqp=CAU",
  },
];

// Componente usato nella Home per le categorie

const Directory = () => {
  
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
